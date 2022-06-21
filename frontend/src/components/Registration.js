import React from "react";
import toast from 'react-hot-toast';

import logo from '../logo.png';
import CONFIG from "../config";

const checkPasswordMatch = () => {
    let pwd = document.getElementById("password").value;
    let pwdConfirm = document.getElementById("password-confirm").value;
    if (pwd === pwdConfirm && pwd.length > 3) {
        document.getElementById("register-btn").disabled = false;
        document.getElementById("no-pwd-match").style.visibility = "hidden";
    } else {
        // Disable button and show text when passwords don't match
        document.getElementById("register-btn").disabled = true;
        document.getElementById("no-pwd-match").style.visibility = "visible";
    }
}

const register = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const userdata = {
        email: email,
        password: password
    }

    fetch(CONFIG.authAPI + 'accounts', {
        method: 'POST',
        mode: 'same-site',
        credentials: 'same-site',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
    })
    .then(res => {
        if(res.ok) {
            return res.json();
        } else {
            throw new Error(res);
        }
    })
    .then(response => {
        toast.success("Erfolgreich registriert");
        window.location = CONFIG.frontendURL + 'login';
    })
    .catch(error => {
        toast.error(error.devMsg);
    });
}

const Registration = () => {
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-24 w-auto"
                        src={logo}
                        alt="CyberCity Logo"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registrierung CyberCity</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Erstellen Sie Ihren persönlichen Bürger-Account, um das digitale Angebot der CyberCity in vollem Umfang zu nutzen!
                    </p>
                </div>
                <form onSubmit={register}>
                    <div className="mt-2">
                        <div className="mt-2">
                            <label className="block" htmlFor="email">Email-Adresse</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Email-Adresse"
                                required
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-oxfordblue focus:border-oxfordblue" />
                        </div>
                        <div className="mt-2">
                            <label className="block">Passwort</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Passwort"
                                onInput={checkPasswordMatch}
                                required
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-oxfordblue focus:border-oxfordblue" />
                        </div>
                        <div className="mt-2">
                            <label className="block">Passwort bestätigen</label>
                            <input
                                id="password-confirm"
                                name="password-confirm"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Passwort bestätigen"
                                onInput={checkPasswordMatch}
                                required
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-oxfordblue focus:border-oxfordblue" />
                        </div>
                        <span id="no-pwd-match" className="text-xs text-red-400 mt-2">Passwort stimmt nicht überein!</span>
                        <button
                            type="submit"
                            id="register-btn"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-mintcream bg-oxfordblue hover:text-bittersweet focus:outline-none"
                        >
                            Registrieren
                        </button>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Sie haben bereits einen Account?{' '}
                            <a href="login" className="font-medium text-bittersweet">
                                Zum Login
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;