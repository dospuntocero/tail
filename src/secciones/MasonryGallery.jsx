import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
const gallery = [
    { imageUrl: './assets/portafolio/sitioweb/Portafolio-Zeleny Web Bermost.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/sitioweb/Portafolio-Zeleny Web BoleroGarbo.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/sitioweb/Portafolio-Zeleny Web igmen.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/sitioweb/Portafolio-Zeleny Web K&F.jpg', category: 'web'},
    { imageUrl: './assets/portafolio/sitioweb/Portafolio-Zeleny Web Nilachal.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/sitioweb/Portafolio-Zeleny Web Nitay.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/sitioweb/Portafolio-Zeleny Web OlimpSport.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/sitioweb/Portafolio-Zeleny Web PetStop.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/sitioweb/Portafolio-Zeleny Web ProntoBeauty.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/marcas/Portafolio-Zeleny-Marca-feluen.jpg', category: 'marcas' },
    { imageUrl: './assets/portafolio/marcas/Portafolio-Zeleny-Marca-SushiClub.jpg', category: 'marcas' },
    { imageUrl: './assets/portafolio/marcas/Portafolio-Zeleny-editorial-PetClinic.jpg', category: 'editorial' },
    { imageUrl: './assets/portafolio/marcas/Portafolio-Zeleny-feluen-fotografia-01.jpg', category: 'fotografia' },
    { imageUrl: './assets/portafolio/marcas/Portafolio-Zeleny-Gastronomia-fotografia-01.jpg', category: 'fotografia' },
    { imageUrl: './assets/portafolio/marcas/Portafolio-Zeleny-LimacheCollege-fotografia-01.jpg', category: 'fotografia' },
    { imageUrl: './assets/portafolio/marcas/Portafolio-Zeleny-Marca-SushiClub.jpg', category: 'marcas' },
    { imageUrl: './assets/portafolio/marcas/Portafolio-Zeleny-publicitario-fotografia-EFE-Chile-01.jpg', category: 'publicitario' },
    { imageUrl: './assets/portafolio/marcas/Portafolio-Zeleny-publicitario-fotografia-EFE-Chile-02.jpg', category: 'publicitario' },

    
    
];

// Fisher-Yates (Knuth) Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('todas');
    // Shuffle the gallery array on initial load
    const [filteredImages, setFilteredImages] = useState(shuffleArray([...gallery]));
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFilterClick = (category) => {
        setIsAnimating(true);
        setTimeout(() => {
            setActiveFilter(category);
            setFilteredImages(gallery.filter(image => category === 'todas' || image.category === category));
            setIsAnimating(false);
        }, 300);
    };

    return (
        <div>
            <div className="mb-4 text-center filters">
                {['todas', 'web', 'editorial', 'publicitario', 'marcas', 'packaging', 'etiquetas', 'fotografia']
                    .filter(category => 
                        category === 'todas' || gallery.some(image => image.category === category)
                    )
                    .map((category) => (
                    <button
                        key={category}
                        className={`filter-button inline-block px-3 py-2 md:px-8 md:py-4 mx-2 my-2 bg-gray-200 rounded-lg ${activeFilter === category ? 'active' : ''}`}
                        onClick={() => handleFilterClick(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div className="gap-4 px-4 columns-2 lg:columns-4 md:columns-3 xl:columns-5">
                {filteredImages.map((image, index) => (
                    <ImageComponent
                        key={index}
                        imageUrl={image.imageUrl}
                        altText={image.name}
                        isAnimating={isAnimating}
                    />
                ))}
            </div>
        </div>
    );
};

const ImageComponent = ({ imageUrl, altText, isAnimating }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <img
            ref={ref}
            className={`mb-4 inline-block h-auto max-w-full rounded-lg transition-all duration-300 ease-in-out transform border-2 border-red-500 ${
                isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
            }`}
            src={inView ? imageUrl : ''}
            //alt={'DEBUG: ' + altText}
        />
    );
};

export default Gallery;
