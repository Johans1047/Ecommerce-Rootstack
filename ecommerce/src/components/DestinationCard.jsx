"use client";

import { useState } from "react";

export default function DestinationCard({ destination }) {
    const [currentImage, setCurrentImage] = useState(destination.image_url);

    const handleMouseEnter = () => {
        setCurrentImage(destination.image_url2);
    };

    const handleMouseLeave = () => {
        setCurrentImage(destination.image_url);
    };

    return (
        <a href={"/commerce/reservations/"+destination.num} title={"Realiza una reserva en " + destination.name}>
            <div
                className="high-contrast rounded-lg shadow-lg dark:shadow-black transition-transform transform hover:scale-105 overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={currentImage}
                    alt={destination.name}
                    className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out"
                />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-black dark:text-white line-clamp-2">{destination.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-1 line-clamp-3">{destination.description}</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-1">{destination.location}, {destination.province}</p>
                    <p className="text-indigo-500 font-bold mt-2 line-clamp-1">${destination.cost_per_day} / día</p>
                </div>
            </div>
        </a>

    );
}