-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    num TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    card_id TEXT UNIQUE,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    is_confirmed BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create provinces table
CREATE TABLE IF NOT EXISTS provinces (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create destinations table
CREATE TABLE IF NOT EXISTS destinations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    num TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    location TEXT,
    province TEXT,
    image_url TEXT,
    image_url2 TEXT,
    cost_per_day REAL NOT NULL,  -- Costo diario por persona
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create user_destinations table to link users and destinations
CREATE TABLE IF NOT EXISTS user_destinations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_num TEXT NOT NULL,
    destination_num TEXT NOT NULL,
    total_cost REAL NOT NULL,
    number_of_days INTEGER NOT NULL,
    number_of_people INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_num) REFERENCES users (num),
    FOREIGN KEY (destination_num) REFERENCES destinations (num)
);

-- Insert provinces data
INSERT INTO provinces (name, description) VALUES 
('Bocas del Toro', 'Paraíso caribeño con playas cristalinas, ideal para el ecoturismo y la vida marina. Hogar de hermosas islas y del Parque Nacional Marino Isla Bastimentos.'),
('Coclé', 'Provincia que combina hermosas playas del Pacífico, sitios arqueológicos y el Valle de Antón, ubicado en el cráter de un volcán extinto.'),
('Colón', 'Ciudad histórica del Caribe panameño, sede de fortalezas coloniales, la Zona Libre y parte del Canal de Panamá.'),
('Chiriquí', 'Provincia del eterno clima primaveral, hogar del Volcán Barú y de las tierras altas productoras del mejor café de Panamá.'),
('Darién', 'La provincia más extensa y menos poblada, hogar del Parque Nacional Darién y de comunidades indígenas ancestrales.'),
('Herrera', 'Tierra del folklore y las tradiciones, famosa por sus festivales y la elaboración de artesanías tradicionales.'),
('Los Santos', 'Cuna del folklore panameño, famosa por sus playas, festivales y la elaboración del sombrero pintao.'),
('Panamá', 'Provincia capital, mezcla de historia colonial en el Casco Antiguo y modernidad en su línea costera de rascacielos.'),
('Panamá Oeste', 'Provincia que combina áreas residenciales modernas con playas del Pacífico y el histórico Puente de las Américas.'),
('Veraguas', 'Única provincia con costas en ambos océanos, hogar de la Isla de Coiba y hermosas playas para el surf.');

-- Insert destinations data
INSERT INTO destinations (num, name, description, location, province, image_url, image_url2, cost_per_day) VALUES 
-- Bocas del Toro
('BOD001', 'Playa Estrella', 'Famosa por sus aguas cristalinas y estrellas de mar. Ideal para snorkel y fotografía.', 'Isla Colón', 'Bocas del Toro', '/images/destinations/playa-estrella-1.jpg', '/images/destinations/playa-estrella-2.jpg', 50.00),
('BOD002', 'Cayo Zapatilla', 'Par de islas deshabitadas con playas vírgenes y aguas turquesas. Excelente para snorkel.', 'Parque Nacional Bastimentos', 'Bocas del Toro', '/images/destinations/zapatilla-1.jpg', '/images/destinations/zapatilla-2.jpg', 70.00),

-- Coclé
('CLO001', 'Valle de Antón', 'Pueblo pintoresco ubicado en el cráter de un volcán extinto. Famoso por su clima fresco y cascadas.', 'El Valle', 'Coclé', '/images/destinations/valle-1.jpg', '/images/destinations/valle-2.jpg', 40.00),
('CLO002', 'Playa Santa Clara', 'Hermosa playa de arena blanca con palmeras y aguas tranquilas. Perfecta para familias.', 'Santa Clara', 'Coclé', '/images/destinations/santa-clara-1.jpg', '/images/destinations/santa-clara-2.jpg', 30.00),

-- Chiriquí
('CHI001', 'Volcán Barú', 'El punto más alto de Panamá. En días claros se pueden ver ambos océanos desde su cima.', 'Boquete', 'Chiriquí', '/images/destinations/baru-1.jpg', '/images/destinations/baru-2.jpg', 80.00),
('CHI002', 'Caldera Hot Springs', 'Aguas termales naturales rodeadas de naturaleza. Ideal para relajación.', 'Boquete', 'Chiriquí', '/images/destinations/caldera-1.jpg', '/images/destinations/caldera-2.jpg', 25.00),

-- Colón
('COL001', 'Portobelo', 'Ciudad histórica con fortalezas coloniales españolas declaradas Patrimonio de la Humanidad.', 'Portobelo', 'Colón', '/images/destinations/portobelo-1.jpg', '/images/destinations/portobelo-2.jpg', 60.00),
('COL002', 'Esclusas de Agua Clara', 'Punto de observación del Canal ampliado donde se pueden ver los grandes buques pasar.', 'Colón', 'Colón', '/images/destinations/agua-clara-1.jpg', '/images/destinations/agua-clara-2.jpg', 45.00),

-- Los Santos
('LOS001', 'Playa Venao', 'Una de las mejores playas para el surf en Panamá. Sede de competencias internacionales.', 'Pedasí', 'Los Santos', '/images/destinations/venao-1.jpg', '/images/destinations/venao-2.jpg', 55.00),
('LOS002', 'Isla Iguana', 'Refugio de vida silvestre con playas de arena blanca y aguas cristalinas. Excelente para snorkel.', 'Pedasí', 'Los Santos', '/images/destinations/iguana-1.jpg', '/images/destinations/iguana-2.jpg', 65.00),

-- Panamá
('PAN001', 'Casco Antiguo', 'Centro histórico de la ciudad, Patrimonio de la Humanidad UNESCO. Mezcla de arquitectura colonial y moderna.', 'Ciudad de Panamá', 'Panamá', '/images/destinations/casco-1.jpg', '/images/destinations/casco-2.jpg', 30.00),
('PAN002', 'Canal de Panamá', 'Una de las maravillas de la ingeniería moderna. Las Esclusas de Miraflores permiten ver el funcionamiento del canal.', 'Ciudad de Panamá', 'Panamá', '/images/destinations/canal-1.jpg', '/images/destinations/canal-2.jpg', 50.00),

-- Veraguas
('VER001', 'Isla de Coiba', 'Parque Nacional y Patrimonio de la Humanidad. Excelente para buceo y observación de vida marina.', 'Santa Catalina', 'Veraguas', '/images/destinations/coiba-1.jpg', '/images/destinations/coiba-2.jpg', 100.00),
('VER002', 'Santa Catalina', 'Pueblo surfista con una de las mejores olas de Centroamérica. Punto de partida hacia Coiba.', 'Santa Catalina', 'Veraguas', '/images/destinations/santa-catalina-1.jpg', '/images/destinations/santa-catalina-2.jpg', 45.00);