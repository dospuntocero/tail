import React, { useState } from 'react';

const gallery = [
    { imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg', category: 'editorial' },
    { imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', category: 'publicitario' },
    { imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg', category: 'marcas' },
    { imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg', category: 'editorial' },
    { imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg', category: 'publicitario' },
    { imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg', category: 'marcas' },
    { imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg', category: 'publicitario' },
    { imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg', category: 'marcas' },
    { imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg', category: 'editorial' },
    { imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg', category: 'packaging' },
    { imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg', category: 'editorial' },
    { imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg', category: 'packaging' },
    { imageUrl: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZVuY_yD_rc6z69DzlCaFzuOJXBvAUhlyBqEJR7ggrVMswUxHy8FIfaJ0Gp-K0PG1bPrF730G1p8dAuJSu7JX7etmYy0dJBcYQ=w2560-h1440-rw-v1', category: 'editorial', name:'PetClinic Carnet de Salud', },
    { imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihYGeQXlyZtfk9YgU4CxApvAGSD6mbjDWPLj5fVqJUqtdfkrXhtWCII0u1tJXNiD6z1f9YzUhfMIW01Ubbe2b78tmOkax2aduqE=w1978-h1450', category: 'editorial', name:'Aviso de Prensa INACAP Capacitaciones', },
    { imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihYuE8A8L83u9fi7_9bPouZUxpUqhTkNx1kbnNzj6A8ARe18nQMBDMWE8Z6t6BOPWnHOMEUuhn-Ibvtg9JbGNa8RaPiTX7V37cw=w1978-h1450-rw-v1', category: 'marcas', name:'PetClinic Diseño de Marca', },
    { imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihY_maquRQbpoMXuFzJGeTJ5evBq4-dhuTt6e9pM3pzVi_RhJ3PjbT0kQOgVIwyeg6mJT3fNKzHWP94FIJkZPNNlAtIzjvL5-EI=w1978-h1450-rw-v1', category: 'publicitario', name:'Afiche Publicitario AMIX 10 años', },
    { imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihYFyijBwuELRDKwOjYSlmBePDT0INUV_q6dm7MtkutwAvUV_mv4FR7GFBgY-hXDWEJVlHDQNtv8vnUPi1oewmNaS1oWQVzdjvU=w1978-h1450-rw-v1', category: 'publicitario', name:'Afiche Publicitario Kétchup AMIX', },
];

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('todas');

    const [filteredImages, setFilteredImages] = useState(gallery);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFilterClick = (category) => {
        setIsAnimating(true);
        setTimeout(() => {
            setActiveFilter(category);
            setFilteredImages(gallery.filter(image => category === 'todas' || image.category === category));
            setIsAnimating(false);
        }, 300); // Ajusta el tiempo para que coincida con la duración de la animación
    };

    return (
        <div>
            <div className="filters text-center mb-4">
                {['todas', 'editorial', 'publicitario', 'marcas', 'packaging', 'etiquetas'].map((category) => (
                    <button
                        key={category}
                        className={`filter-button px-8 py-4 mx-2 my-2 bg-gray-200 rounded-lg  ${activeFilter === category ? 'active' : ''}`}
                        onClick={() => handleFilterClick(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div className="columns-2 lg:columns-4 md:columns-3 gap-4">
                {filteredImages.map((image, index) => (
                    <img
                        key={index}
                        className={`mb-4 inline-block h-auto max-w-full rounded-lg transition-all duration-300 ease-in-out transform ${
                            isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                        }`}
                        src={image.imageUrl}
                        alt={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;