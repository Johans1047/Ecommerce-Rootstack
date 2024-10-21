import { useState, useEffect } from "react";

export default function Header() {
    const [navVisible, setNavVisible] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setNavVisible(window.innerWidth >= 1024);
        });
    }, []);

    return (
        <header id="website-header" className="bg-white sticky top-0 z-10 py-6 border-b border-neutral-400">
            <div id="header-content" className="relative mx-4 md:mx-8 lg:mx-12 flex items-center justify-between">
                <div id="header-title">
                    <a href="/" className="flex items-center gap-4">
                        <i className="bi bi-brightness-high-fill flex-center text-3xl"></i>
                        <h1 className="font-semibold text-2xl hidden md:block">VoyageXplore</h1>
                    </a>
                </div>
                <div id="header-navigation" className={"bg-white " + (navVisible ? "max-w-full" : "max-w-0") + " fixed top-0 right-0 z-20 lg:static overflow-hidden transition-all duration-300"}>
                    <div id="navigation-container" className="border-l border-neutral-400 lg:border-none">
                        <div id="close-container" className="w-full flex lg:hidden justify-end">
                            <button onClick={() => setNavVisible(false)} className="p-1 block lg:hidden">
                                <i className="bi bi-x flex-center text-2xl"></i>
                            </button>
                        </div>
                        <div id="navigation-wrapper" className="flex flex-col-reverse lg:flex-row justify-end algin-start text-left items-center gap-x-12 p-6 lg:p-0 h-screen lg:h-auto">
                            <nav id="header-navbar" className="flex flex-col lg:flex-row gap-6 my-8 lg:my-0">
                                <a href="/" className="px-2 py-1 rounded hover:bg-neutral-200 active:bg-neutral-300 duration-150">Inicio</a>
                                <a href="/commerce" className="px-2 py-1 rounded hover:bg-neutral-200 active:bg-neutral-300 duration-150">Comercio</a>
                                <a href="/about-us" className="px-2 py-1 rounded hover:bg-neutral-200 active:bg-neutral-300 duration-150">Acerca de nosotros</a>
                            </nav>
                            <div id="user-flow-container">
                                <a href="/users" className="rounded-lg px-4 py-2 btn-primary">Inicia sesión</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => { setNavVisible(!navVisible) }} className="block lg:hidden">
                    <i className="bi bi-list text-2xl flex-center"></i>
                </button>
            </div>
        </header>
    );
}