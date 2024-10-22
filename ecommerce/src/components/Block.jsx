"use client";

import { useEffect, useState } from "react";

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
        <div className="m-10 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-4/5">
                {destinations.map((destination) => (
                    <DestinationCard key={destination.num} destination={destination} />
                ))}
            </div>
        </div>
    );
}

function DestinationCard({ destination }) {
    const [currentImage, setCurrentImage] = useState(destination.image_url);

    const handleMouseEnter = () => {
        setCurrentImage(destination.image_url2);
    };

    const handleMouseLeave = () => {
        setCurrentImage(destination.image_url);
    };

    return (
        <div 
            className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <img 
                src={currentImage} 
                alt={destination.name} 
                className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out" 
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{destination.name}</h2>
                <p className="text-gray-600 mt-1">{destination.description}</p>
                <p className="text-gray-500 mt-2">{destination.location}, {destination.province}</p>
                <p className="text-indigo-600 font-bold mt-2">${destination.cost_per_day} / día</p>
            </div>
        </div>
    );
}