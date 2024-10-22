"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Header from "@/components/Header";
import Block from "@/components/Block";
import Footer from "@/components/Footer";

import { getCookie } from "@/lib/cookie";

export default function Commerce() {
    const router = useRouter();

    useEffect(() => {
        if (!getCookie("jssessid")) {
            router.push("/users");
        }
    }, [router]);

    return (
        <>
        <Header/>
        <main className="container my-6 mx-auto">
            <h1 className="text-4xl font-semibold text-center my-4">Destinos populares</h1>  
            <Block />
        </main>
        <Footer/>
        </>
    );
}
