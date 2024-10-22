import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchDiv = ({
  imageUrl = "../../public/images/400.png",
  title = "Explora Panama",
  description = "Descubre los mejores destinos y experiencias para tu próximo viaje",
  searchPlaceholder = "¿A dónde quieres ir?",
  onSearch = (value) => console.log('Búsqueda:', value)
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
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
            <div className="relative w-full max-w-[95%] sm:max-w-xl md:max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                className="block w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 
                         bg-white/95 backdrop-blur-sm 
                         border border-gray-300 rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         placeholder-gray-500 
                         text-base sm:text-lg
                         shadow-lg"
                placeholder={searchPlaceholder}
                style={{
                  textAlign: 'center',
                  paddingLeft: '2.5rem',
                  paddingRight: '2.5rem'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDiv;