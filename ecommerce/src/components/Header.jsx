"use client";

import dynamic from 'next/dynamic';
import Image from 'next/image';

const Navbar = dynamic(() => import("@/components/Navbar"), {ssr: false})

export default function Header() { 
    const logo = '/images/logo.png'; 

    return (
        <header id="website-header" className="high-contrast sticky top-0 z-10 py-6 border-b mid-contrast-b">
            <div id="header-content" className="relative mx-4 md:mx-8 lg:mx-12 flex items-center justify-between">
                <div id="header-title">
                    <a href="/" className="flex items-center gap-4">
                    <Image
                        src={logo}
                        alt="VoyageXplore Logo"
                        width={60}
                        height={60}/>
                        <h1 className="font-semibold text-2xl hidden md:block">VoyageXplore</h1>
                    </a>
                </div>
                <Navbar/>
            </div>
        </header>
    );
}