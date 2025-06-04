import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const logos = [
    './assets/clientes/Cliente-Gobierno de Chile.png',
    './assets/clientes/Cliente-corfo.png',
    './assets/clientes/Cliente-sercotec.png',
    './assets/clientes/Cliente-efe trenes.png',
    './assets/clientes/Cliente-Universidad Catolica de Chile.png',
    './assets/clientes/Cliente-INACAP.png',
    './assets/clientes/Cliente-INACAP Capacitacion.png',
    './assets/clientes/Cliente-universidad de las americas.png',
    './assets/clientes/Cliente-Limache College.png',
    './assets/clientes/Cliente-Amix.png',
    './assets/clientes/Cliente-Baeza.png',
    './assets/clientes/Cliente-Bolero Garbo.png',
    './assets/clientes/Cliente-Burger Club.png',
    './assets/clientes/Cliente-El Sabio.png',
    './assets/clientes/Cliente-Evogen.png',
    './assets/clientes/Cliente-Feluen.png',
    './assets/clientes/Cliente-LeCleare-optica.png',
    './assets/clientes/Cliente-New Style.png',
    './assets/clientes/Cliente-Olimp.png',
    './assets/clientes/Cliente-PETCLINIC.png',
    './assets/clientes/Cliente-Prontobeauty.png',
    './assets/clientes/Cliente-Restobar del barrio.png',
    './assets/clientes/Cliente-Rincon-Peruano.png',
    './assets/clientes/Cliente-Scuola Italiana Villa alemana .png',
    './assets/clientes/Cliente-Trae Mi camara.png',
    './assets/clientes/Cliente-Woden.png',
    './assets/clientes/Cliente-dospuntocero.png',
    './assets/clientes/Cliente-ilustre municipalidad sagrada familia.png',
    './assets/clientes/Cliente-k&f-concept.png',
    './assets/clientes/Cliente-loor.png',
    './assets/clientes/Cliente-nitay.png',
    './assets/clientes/Cliente-proa al mar.png',
    './assets/clientes/Cliente-sushi-club.png',
    './assets/clientes/Cliente-the-good-vegan.png',
    './assets/clientes/Cliente-urban Moster.png',
    './assets/clientes/Cliente-American College.png',
    './assets/clientes/Cliente-yo te enseño.png',

];

const LogoGallery = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
                const nextScrollLeft = scrollLeft + 300; // Adjust the scroll amount as needed
                if (nextScrollLeft >= scrollWidth - clientWidth) {
                    containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    containerRef.current.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
                }
            }
        }, 5000); // Autoplay interval in milliseconds (5 seconds)
        return () => clearInterval(interval); // Clear the interval on component unmount
    }, []);

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
            <section className="flex items-center logo-gallery">
                <button className="order-1 px-4 mr-4 h-10 rounded-full bg-accent" onClick={() => handleScroll(-300)}>
&lt;
                </button>
                <div className="overflow-x-hidden order-2 w-full grow" ref={containerRef}>
                    <div className="flex space-x-4">
                        {logos.map((logo, index) => (
                            <LogoImage key={index} logo={logo} index={index} />
                        ))}
                    </div>
                </div>
                <button className="order-3 px-4 ml-4 h-10 rounded-full bg-accent" onClick={() => handleScroll(300)}>
&gt;
                </button>
            </section>
        </div>
    );
};

const LogoImage = ({ logo, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div ref={ref} className="flex-none w-[4%] grayscale transition-all duration-500 hover:grayscale-0">
            {inView && <img className="px-4 w-32"  src={logo} alt={`Logo ${index + 1}`} />}
        </div>
    );
};

export default LogoGallery;
