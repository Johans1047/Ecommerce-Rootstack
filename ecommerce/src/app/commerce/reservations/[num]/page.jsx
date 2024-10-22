"use client";

import { useRouter } from "next/navigation";
import { use, useState, useEffect } from "react";

import { getCookie } from "@/lib/cookie";

import FloatingAnchor from "@/components/FloatingAnchor";

export default function Reservations({ params }) {
    const router = useRouter();
    const query = use(params);

    const [destination, setDestination] = useState({num: "", name: "", cost_per_day: ""});
    const [jssessid, setJssessid] = useState("");

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

    useEffect(() => {
        const fetchResponse = async () => {
            const response = await fetch("/api/destinations/" + query.num);
            const json = await response.json();

            setDestination(json);
        }

        fetchResponse();

    }, []);

    useEffect(() => {
        setJssessid(getCookie("jssessid"));
        if (!getCookie("jssessid")) {
            router.push("/users/login");
        }
    }, [router]);

    return (
        <main id="user-login" className="container mx-auto px-4 h-screen flex-center">
            <form method="post" action="/api/destinations/reservations/new" className="w-full max-w-lg" onSubmit={asyncSubmit}>
                <input type="text" value={jssessid} name="user-num" id="user-num" readOnly hidden required />
                <input type="text" value={destination.num} name="dest-num" id="dest-num" readOnly hidden required />
                <input type="text" value={destination.cost_per_day} name="daily-fee" id="daily-fee" readOnly hidden required />
                <h1 className="text-3xl font-semibold text-center mb-6">Realiza tu reserva</h1>
                <div id="fields-container" className="grid gap-y-6">
                    <div className="w-full">
                        <label htmlFor="destination" className="text-lg">Destino</label>
                        <input type="text" name="destination" id="destination" value={destination.name} readOnly className="pointer-events-none high-contrast w-full text-lg px-2 py-2 border mid-contrast-b rounded-sm focus:outline focus:outline-voyage-500 duration-150" />
                    </div>
                    <div className="w-full flex gap-6">
                        <div className="flex-1">
                            <label htmlFor="start" className="text-lg">Fecha de check-in</label>
                            <input type="date" name="start" id="start" className="w-full text-lg px-2 py-2 high-contrast border mid-contrast-b rounded-sm focus:outline focus:outline-voyage-500 duration-150" />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="start" className="text-lg">Fecha de check-out</label>
                            <input type="date" name="end" id="end" className="w-full text-lg px-2 py-2 high-contrast border mid-contrast-b rounded-sm focus:outline focus:outline-voyage-500 duration-150" />
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="destination" className="text-lg">Cantidad de personas</label>
                        <input type="number" min="1" max="8" step="1" name="qty" id="qty" className="high-contrast w-full text-lg px-2 py-2 border mid-contrast-b rounded-sm focus:outline focus:outline-voyage-500 duration-150" />
                    </div>
                    <div className="w-full">
                        <input type="submit" value="Completar registro" className="w-full text-lg rounded-sm py-2 btn-primary" />
                    </div>
                </div>
            </form>
            <FloatingAnchor href="/commerce" bi="bi-arrow-return-left" title="Ir a comercio" />
        </main>
    );
}
