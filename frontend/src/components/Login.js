/*Based on https://tailwindui.com/components/application-ui/forms/sign-in-forms*/

import React from "react";
import logo from '../logo.png';

const Login = () => {
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-24 w-auto"
                        src={logo}
                        alt="CyberCity Logo"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Anmeldung CyberCity</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Eingeloggte Benutzer können alle CyberCity Services nutzen!
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="login" method="GET">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email-Adresse
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-oxfordblue focus:border-oxfordblue focus:z-10 sm:text-sm"
                                placeholder="Email-Adresse"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Passwort
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-oxfordblue focus:border-oxfordblue focus:z-10 sm:text-sm"
                                placeholder="Passwort"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-bittersweet border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Eingeloggt bleiben
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="login" className="font-medium text-bittersweet">
                                Passwort vergessen?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-mintcream bg-oxfordblue hover:text-bittersweet focus:outline-none"
                        >
                            Einloggen
                        </button>
                    </div>
                </form>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Noch kein Account?{' '}
                    <a href="register" className="font-medium text-bittersweet">
                        Registrieren!
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;