import React from "react";
import toast from 'react-hot-toast';

import logo from '../logo.png';
import CONFIG from "../config";

const checkPasswordMatch = () => {
    let pwd = document.getElementById("password").value;
    let pwdConfirm = document.getElementById("password-confirm").value;
    if (pwd === pwdConfirm && pwd.length > 5) {
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

    const userdata = {
        email: formData.get('email'),
        password: formData.get('password'),
        first_name: formData.get('firstname'),
        last_name: formData.get('lastname'),
        date_of_birth: formData.get('birthdate'),
        street: formData.get('street'),
        street2: "",
        house_number: formData.get('housenumber')
    }

    fetch(CONFIG.authAPI + 'accounts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
    })
    .then(res => {
        if(res.ok) {
            return res.json();
        } else {
            return res.json().then(err => {
                throw new Error(res.status + " " + err.code + "😔");
            });
        }
    })
    .then(response => {
        toast.success("Erfolgreich registriert");
        window.location = CONFIG.frontendURL + 'login';
    })
    .catch(error => {
        toast.error(error.message);
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
                            <label className="block">Vorname</label>
                            <input
                                id="firstname"
                                name="firstname"
                                type="text"
                                placeholder="Vorname"
                                required
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-oxfordblue focus:border-oxfordblue" />
                        </div>
                        <div className="mt-2">
                            <label className="block">Nachname</label>
                            <input
                                id="lastname"
                                name="lastname"
                                type="text"
                                placeholder="Nachname"
                                required
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-oxfordblue focus:border-oxfordblue" />
                        </div>
                        <div className="mt-2">
                            <label className="block">Geburtsdatum</label>
                            <input
                                id="birthdate"
                                name="birthdate"
                                type="date"
                                required
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-oxfordblue focus:border-oxfordblue" />
                        </div>
                        <div className="mt-2">
                            <label className="block">Straße</label>
                            <input
                                id="street"
                                name="street"
                                type="text"
                                placeholder="Straße"
                                required
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-oxfordblue focus:border-oxfordblue" />
                        </div>
                        <div className="mt-2">
                            <label className="block">Hausnummer</label>
                            <input
                                id="housenumber"
                                name="housenumber"
                                type="text"
                                placeholder="Hausnummer"
                                required
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-oxfordblue focus:border-oxfordblue" />
                        </div>
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
                        <span id="no-pwd-match" className="text-xs text-red-400 mt-2">Passwort stimmt nicht überein oder ist zu kurz!</span>
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