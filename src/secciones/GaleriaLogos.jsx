import React, { useRef } from 'react';

const logos = [
    'https://mighty.tools/mockmind-api/content/abstract/51.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/1.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/11.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/50.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/21.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/6.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/7.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/31.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/51.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/2.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/41.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/4.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/5.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/12.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/33.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/21.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/6.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/36.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/37.jpg',
];

const LogoGallery = () => {
    const containerRef = useRef(null);

    const handleScroll = (scrollOffset) => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: containerRef.current.scrollLeft + scrollOffset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8">

        <section className="logo-gallery relative px-24">
            <div className="w-full overflow-x-hidden" ref={containerRef}>
                <div className="flex space-x-4">
                    {logos.map((logo, index) => (
                        <div key={index} className="grayscale hover:grayscale-0 flex-none w-1/5">
                            <img className="transition-all duration-50 w-full" src={logo} alt={`Logo ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <button className="absolute bg-primary lg:top-16 left-0 h-10 rounded-full ml-2 px-4 flex items-center" onClick={() => handleScroll(-300)}>
                &lt;
            </button>
            <button className="absolute bg-primary lg:top-16 right-0 h-10 rounded-full mr-2 px-4 flex items-center" onClick={() => handleScroll(300)}>
                &gt;
            </button>
        </section>
        </div>
    );
};

export default LogoGallery;
