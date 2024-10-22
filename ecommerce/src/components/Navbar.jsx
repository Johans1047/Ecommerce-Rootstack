"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function Navbar() {
    const { isAuthenticated, user, logout } = useAuth();
    const [navVisible, setNavVisible] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleResize = () => {
        setNavVisible(window.innerWidth >= 1024);
    };

    useEffect(() => {
        setNavVisible(typeof window !== 'undefined' && window.innerWidth >= 1024);
        
        if (typeof window !== 'undefined') {
            handleResize();
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    const getUserInitials = () => {
        if (!user || !user.full_name) return "U";
        const names = user.full_name.split(" ");
        return names.map(name => name.charAt(0).toUpperCase()).join("").slice(0, 2);
    };

    const handleLogout = async () => {
        await logout();
        setDropdownVisible(false);
    };

    // Hide dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('#user-flow-container')) {
                setDropdownVisible(false);
            }
        };

        if (dropdownVisible) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [dropdownVisible]);

    return (
        <>
            <div id="header-navigation" className={"high-contrast " + (navVisible ? "max-w-full" : "max-w-0") + " fixed top-0 right-0 z-20 lg:static overflow-hidden transition-all duration-300"}>
                <div id="navigation-container" className="border-l border-neutral-400 lg:border-none">
                    <div id="close-container" className="w-full flex lg:hidden justify-end">
                        <button onClick={() => setNavVisible(false)} className="p-1 block lg:hidden">
                            <i className="bi bi-x flex-center text-2xl"></i>
                        </button>
                    </div>
                    <div id="navigation-wrapper" className="flex flex-col-reverse lg:flex-row justify-end align-start text-left items-center gap-x-12 p-6 lg:p-0 h-screen lg:h-auto">
                        <nav id="header-navbar" className="flex flex-col lg:flex-row gap-6 my-8 lg:my-0">
                            <a href="/" className="px-2 py-1 rounded hover:bg-neutral-200 active:bg-neutral-300 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 duration-150">Inicio</a>
                            <a href="/commerce" className="px-2 py-1 rounded hover:bg-neutral-200 active:bg-neutral-300 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 duration-150">Comercio</a>
                            <a href="/about" className="px-2 py-1 rounded hover:bg-neutral-200 active:bg-neutral-300 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 duration-150">Acerca de nosotros</a>
                        </nav>
                        <div id="user-flow-container" className="relative">
                            {isAuthenticated ? (
                                <div className="relative">
                                    <button 
                                        onClick={() => setDropdownVisible(!dropdownVisible)}
                                        className="w-10 h-10 rounded-full bg-voyage-500 text-white flex items-center justify-center font-semibold hover:bg-voyage-600 transition-colors"
                                    >
                                        {getUserInitials()}
                                    </button>
                                    {dropdownVisible && (
                                        <div className="relative right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-neutral-700 ring-1 ring-black ring-opacity-5 z-50"> {/* Ajustar z-50 */}
                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                                <button
                                                    onClick={handleLogout}
                                                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-600 w-full text-left"
                                                    role="menuitem"
                                                >
                                                    Cerrar sesión
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a href="/users/login" className="rounded-lg px-4 py-2 btn-primary">
                                    Inicia sesión
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => { setNavVisible(!navVisible) }} className="block lg:hidden">
                <i className="bi bi-list text-2xl flex-center"></i>
            </button>
        </>
    );
}