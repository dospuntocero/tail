import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
const gallery = [
    { imageUrl: './assets/portafolio/sitioweb/portafolio-zeleny-web-bermost.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/sitioweb/portafolio-zeleny-web-bolerogarbo.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/sitioweb/portafolio-zeleny-web-igmen.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/sitioweb/portafolio-zeleny-web-k&f.jpg', category: 'web'},
    { imageUrl: './assets/portafolio/sitioweb/portafolio-zeleny-web-nilachal.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/sitioweb/portafolio-zeleny-web-nitay.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/sitioweb/portafolio-zeleny-web-olimpsport.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/sitioweb/portafolio-zeleny-web-petstop.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/sitioweb/portafolio-zeleny-web-prontobeauty.jpg', category: 'web' },
    { imageUrl: './assets/portafolio/marcas/portafolio-zeleny-marca-feluen.jpg', category: 'marcas' },
    { imageUrl: './assets/portafolio/marcas/portafolio-zeleny-marca-sushiclub.jpg', category: 'marcas' },
    { imageUrl: './assets/portafolio/editorial/portafolio-zeleny-editorial-petclinic.jpg', category: 'editorial' },
    { imageUrl: './assets/portafolio/fotografia/portafolio-zeleny-feluen-fotografia-01.jpg', category: 'fotografia' },
    { imageUrl: './assets/portafolio/fotografia/portafolio-zeleny-gastronomia-fotografia-01.jpg', category: 'fotografia' },
    { imageUrl: './assets/portafolio/fotografia/portafolio-zeleny-limachecollege-fotografia-01.jpg', category: 'fotografia' },
    { imageUrl: './assets/portafolio/fotografia/portafolio-zeleny-loor-fotografia-01.jpg', category: 'fotografia' },
    { imageUrl: './assets/portafolio/fotografia/portafolio-zeleny-proaalmar-fotografia-01.jpg', category: 'fotografia' },
    { imageUrl: './assets/portafolio/marcas/portafolio-zeleny-marca-petclinic.jpg', category: 'marcas' }, 
    { imageUrl: './assets/portafolio/publicitario/portafolio-zeleny-publicitario-fotografia-efe-chile-01.jpg', category: 'publicitario' },
    { imageUrl: './assets/portafolio/publicitario/portafolio-zeleny-publicitario-fotografia-efe-chile-02.jpg', category: 'publicitario' },
    { imageUrl: './assets/portafolio/gastronomia/portafolio-zeleny-gatronomia-cartadigital-sushiclub.jpg', category: 'gastronomia' }, 
    { imageUrl: './assets/portafolio/gastronomia/portafolio-zeleny-gatronomia-sushiclub.jpg', category: 'gastronomia' }, 
    { imageUrl: './assets/portafolio/packaging/portafolio-zeleny-packaging-quinoto-nitay.jpg', category: 'packaging' }, 

    

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
            <div class="py-10 mx-auto max-w-2xl md:py-20 poppins-regular"
>
            <h2 className="mt-5 mb-4 text-center text-1xl text-primary poppins-black sm:text-4xl">Nuestros Trabajos</h2>
            </div>
            <div className="flex flex-wrap justify-center px-2 mb-4 text-center filters">
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
