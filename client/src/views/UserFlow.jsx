import { useState } from "react";

export default function UserFlow() {
    const [currentForm, setCurrentForm] = useState("login");
    const [passVisible, setPassVisible] = useState(false);
    const [repeatPassVisible, setRepeatPassVisible] = useState(false);
    if (currentForm == "login") {
        return (
            <main id="user-login" className="container mx-auto px-4 h-screen flex-center">
                <form method="post" action="" className="w-full max-w-lg">
                    <h1 className="text-3xl font-semibold text-center mb-6">Ingresa a tu cuenta</h1>
                    <div id="fields-container" className="grid gap-y-6">
                        <div className="w-full">
                            <label htmlFor="email" className="text-lg">Correo electrónico</label>
                            <input type="email" name="email" id="email" autoComplete="email" className="w-full text-lg px-2 py-2 border border-neutral-200 rounded-sm focus:outline focus:outline-voyage-500 duration-150" placeholder="email@example.com" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="pass" className="text-lg">
                                Contraseña
                                <button type="button" className="mx-4" onClick={() => { setPassVisible(!passVisible) }}>
                                    <i className={"bi bi-eye-fill duration-150 " + (passVisible ? " text-voyage-500" : "text-neutral-400")}></i>
                                </button>
                            </label>
                            <input type={passVisible ? "text" : "password"} name="pass" id="pass" autoComplete="current-password" className="w-full text-lg px-2 py-2 border border-neutral-200 rounded-sm focus:outline focus:outline-voyage-500 duration-150" placeholder="Elige una contraseña segura" />
                        </div>
                        <div className="w-full">
                            <input type="submit" value="Iniciar sesión" className="w-full text-lg rounded-sm py-2 btn-primary" />
                        </div>
                        <div className="w-full">
                            <p>
                                ¿Aun no tienes cuenta?&nbsp;
                                <button onClick={() => { setCurrentForm("signup") }} className="text-blue-500 hover:underline">
                                    Crea una aquí
                                </button>
                            </p>
                        </div>
                    </div>
                </form>
            </main>
        );
    } else if (currentForm == "signup") {
        return (
            <main id="user-signup" className="container mx-auto px-4 h-screen flex-center">
                <form method="post" action="" className="w-full max-w-lg">
                    <h1 className="text-3xl font-semibold text-center mb-6">Crea una cuenta</h1>
                    <div id="fields-container" className="grid gap-y-6">
                        <div className="w-full">
                            <label htmlFor="fullname" className="text-lg">Nombre completo</label>
                            <input type="text" name="fullname" id="fullname" autoComplete="name" className="w-full text-lg px-2 py-2 border border-neutral-200 rounded-sm focus:outline focus:outline-voyage-500 duration-150" placeholder="John Doe" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="text-lg">Correo electrónico</label>
                            <input type="email" name="email" id="email" autoComplete="email" className="w-full text-lg px-2 py-2 border border-neutral-200 rounded-sm focus:outline focus:outline-voyage-500 duration-150" placeholder="email@example.com" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="pass" className="text-lg">
                                Contraseña
                                <button type="button" className="mx-4" onClick={() => { setPassVisible(!passVisible) }}>
                                    <i className={"bi bi-eye-fill duration-150 " + (passVisible ? " text-voyage-500" : "text-neutral-400")}></i>
                                </button>
                            </label>
                            <input type={passVisible ? "text" : "password"} name="pass" id="pass" autoComplete="new-password" className="w-full text-lg px-2 py-2 border border-neutral-200 rounded-sm focus:outline focus:outline-voyage-500 duration-150" placeholder="Elige una contraseña segura" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="repeat-pass" className="text-lg">
                                Repite tu contraseña
                                <button type="button" className="mx-4" onClick={() => { setRepeatPassVisible(!repeatPassVisible) }}>
                                    <i className={"bi bi-eye-fill duration-150 " + (repeatPassVisible ? " text-voyage-500" : "text-neutral-400")}></i>
                                </button>
                            </label>
                            <input type={repeatPassVisible ? "text" : "password"} name="repeat-pass" id="repeat-pass" autoComplete="new-password" className="w-full text-lg px-2 py-2 border border-neutral-200 rounded-sm focus:outline focus:outline-voyage-500 duration-150" placeholder="Debe ser igual a tu contraseña" />
                        </div>
                        <div className="w-full">
                            <input type="submit" value="Iniciar sesión" className="w-full text-lg rounded-sm py-2 btn-primary" />
                        </div>
                        <div className="w-full">
                        <p>
                            ¿Ya tienes una cuenta?&nbsp;
                            <button type="button" onClick={() => { setCurrentForm("login") }} className="text-blue-500 hover:underline">
                                Inicia sesión aquí
                            </button>
                        </p>
                    </div>
                    </div>
                </form>
            </main>
        );
    }
}