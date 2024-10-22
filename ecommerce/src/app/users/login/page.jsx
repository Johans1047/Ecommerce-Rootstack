"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Alerts from "@/components/Alerts"

import FloatingAnchor from "@/components/FloatingAnchor";

export default function Login() {
    const router = useRouter();

    const [passVisible, setPassVisible] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const asyncSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            const response = await fetch(event.target.action, {
                method: "POST",
                body: formData
            });

            const text = await response.text();

            if (!response.ok) {
                setErrorMessage(text);
                setSuccessMessage(null);
            }
            else {
                setSuccessMessage(text);
                setErrorMessage(null);

                router.push("/");
            }
        } catch (error) {
            setErrorMessage("An unexpected error occurred.");
        }
    }

    return (
        <main id="user-login" className="container mx-auto px-4 h-screen flex-center">
            {errorMessage && <Alerts type="error" message={errorMessage} />}
            {successMessage && <Alerts type="success" message={successMessage} />}
            <form method="post" action="/api/users/authenticate" className="w-full max-w-lg" onSubmit={asyncSubmit}>
                <h1 className="text-3xl font-semibold text-center mb-6">Ingresa a tu cuenta</h1>
                <div id="fields-container" className="grid gap-y-6">
                    <div className="w-full">
                        <label htmlFor="email" className="text-lg">Correo electrónico</label>
                        <input type="email" name="email" id="email" autoComplete="email" className="high-contrast w-full text-lg px-2 py-2 border mid-contrast-b rounded-sm focus:outline focus:outline-voyage-500 duration-150" placeholder="email@example.com" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="pass" className="text-lg">
                            Contraseña
                            <button type="button" className="mx-4" onClick={() => { setPassVisible(!passVisible) }}>
                                <i className={"bi bi-eye-fill duration-150 " + (passVisible ? " text-voyage-500" : "text-neutral-400")}></i>
                            </button>
                        </label>
                        <input type={passVisible ? "text" : "password"} name="pass" id="pass" autoComplete="current-password" className="high-contrast w-full text-lg px-2 py-2 border mid-contrast-b rounded-sm focus:outline focus:outline-voyage-500 duration-150" placeholder="Elige una contraseña segura" />
                    </div>
                    <div className="w-full">
                        <input type="submit" value="Iniciar sesión" className="w-full text-lg rounded-sm py-2 btn-primary" />
                    </div>
                    <div className="w-full">
                        <p>
                            ¿Aun no tienes cuenta?&nbsp;
                            <a href="/users/signup" className="text-blue-500 hover:underline">
                                Crea una aquí
                            </a>
                        </p>
                    </div>
                </div>
            </form>
            <FloatingAnchor href="/" bi="bi-house-fill" title="Ir a inicio" />
        </main>
    );
}