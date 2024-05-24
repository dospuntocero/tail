import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const logos = [
    'https://mighty.tools/mockmind-api/content/abstract/51.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/1.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/11.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/50.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/21.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/6.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/7.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/31.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/2.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/41.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/4.jpg',
    'https://mighty.tools/mockmind-api/content/abstract/5.jpg',
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
        <div className="mx-auto max-w-7xl">
            <section className="logo-gallery flex items-center">
                <button className="order-1 bg-accent h-10 rounded-full mr-4 px-4" onClick={() => handleScroll(-300)}>&lt;</button>
                <div className="order-2 w-full overflow-x-hidden grow" ref={containerRef}>
                    <div className="flex space-x-4">
                        {logos.map((logo, index) => (
                            <LogoImage key={index} logo={logo} index={index} />
                        ))}
                    </div>
                </div>
                <button className="order-3 bg-accent h-10 rounded-full ml-4 px-4" onClick={() => handleScroll(300)}>&gt;</button>
            </section>
        </div>
    );
};

const LogoImage = ({ logo, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="transition-all duration-500 grayscale hover:grayscale-0 flex-none w-1/5">
            {inView && <img className="w-full" src={logo} alt={`Logo ${index + 1}`} />}
        </div>
    );
};

export default LogoGallery;
