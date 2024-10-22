'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchDiv = ({
    imageUrl = "/images/search_bg.png",
    title = "Explora Panama",
    description = "Descubre los mejores destinos y experiencias para tu próximo viaje",
    searchPlaceholder = "¿A dónde quieres ir?",
    onSearch = (value) => null
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchTerm.trim()) {
            setSearchResults([]);
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/search?q=${encodeURIComponent(searchTerm.trim())}`);

            if (!response.ok) {
                throw new Error('Error en la búsqueda');
            }

            const data = await response.json();
            setSearchResults(data);
            onSearch(data);
        } catch (error) {
            console.error('Error:', error);
            setError('No se pudieron cargar los resultados');
            setSearchResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
                <img
                    src={imageUrl}
                    alt="Destino turístico"
                    className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
                    <div className="text-center w-full max-w-[90%] sm:max-w-[85%] md:max-w-3xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                            {title}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto">
                            {description}
                        </p>
                        <form onSubmit={handleSearch} className="relative w-full max-w-[95%] sm:max-w-xl md:max-w-2xl mx-auto">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 sm:h-6 sm:w-6 high-contrast" />
                                </div>
                                <input type="text" value={searchTerm} onChange={handleInputChange} placeholder={searchPlaceholder}
                                className="high-contrast block w-full backdrop-blur-sm mid-contrast-b rounded-lg focus:outline-none
                                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 shadow-lg sm:text-lg
                                px-10 py-4 transition-all duration-150"/>
                                <button
                                    type="submit"
                                    className="absolute inset-y-0 right-0 px-4 flex items-center"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <div className="animate-spin h-5 w-5 border-2 border-blue-500 rounded-full border-t-transparent"></div>
                                    ) : (
                                        <span className="text-gray-500">Buscar</span>
                                    )}
                                </button>
                            </div>

                            {error && (
                                <div className="mt-2 text-red-500 text-sm">
                                    {error}
                                </div>
                            )}

                            {searchResults.length > 0 && (
                                <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-xl max-h-96 overflow-y-auto">
                                    {searchResults.map((result) => (
                                        <div
                                            key={result.num}
                                            className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                                        >
                                            <h3 className="font-medium text-gray-900">{result.name}</h3>
                                            <p className="text-sm text-gray-500">{result.description}</p>
                                            <p className="text-xs text-gray-400 mt-1">{result.location}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchDiv;