"use client";

import { useEffect, useState } from "react";

import DestinationCard from "@/components/DestinationCard";

export default function Block() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch("/api/destinations")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error en la respuesta de red");
                }
                return response.json();
            })
            .then((data) => {
                setDestinations(data);
            })
            .catch((error) => {
                console.error("Hubo un error al obtener los destinos", error);
            });
    }, []);

    return (
        <div className="m-10 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-4/5">
                {destinations.map((destination) => (
                    <DestinationCard key={destination.num} destination={destination} />
                ))}
            </div>
        </div>
    );
}