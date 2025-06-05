import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const logos = [
    './assets/clientes/cliente-gobierno-de-chile.png',
    './assets/clientes/cliente-corfo.png',
    './assets/clientes/cliente-sercotec.png',
    './assets/clientes/cliente-efe-trenes.png',
    './assets/clientes/cliente-universidad-catolica-de-chile.png',
    './assets/clientes/cliente-inacap.png',
    './assets/clientes/cliente-inacap-capacitacion.png',
    './assets/clientes/cliente-universidad-de-las-americas.png',
    './assets/clientes/cliente-limache-college.png',
    './assets/clientes/cliente-amix.png',
    './assets/clientes/cliente-baeza.png',
    './assets/clientes/cliente-bolero-garbo.png',
    './assets/clientes/cliente-burger-club.png',
    './assets/clientes/cliente-el-sabio.png',
    './assets/clientes/cliente-evogen.png',
    './assets/clientes/cliente-feluen.png',
    './assets/clientes/cliente-lecleare-optica.png',
    './assets/clientes/cliente-new-style.png',
    './assets/clientes/cliente-olimp.png',
    './assets/clientes/cliente-petclinic.png',
    './assets/clientes/cliente-prontobeauty.png',
    './assets/clientes/cliente-restobar-del-barrio.png',
    './assets/clientes/cliente-rincon-peruano.png',
    './assets/clientes/cliente-scuola-italiana-villa-alemana.png',
    './assets/clientes/cliente-trae-mi-camara.png',
    './assets/clientes/cliente-woden.png',
    './assets/clientes/cliente-dospuntocero.png',
    './assets/clientes/cliente-ilustre-municipalidad-sagrada-familia.png',
    './assets/clientes/cliente-k&f-concept.png',
    './assets/clientes/cliente-loor.png',
    './assets/clientes/cliente-nitay.png',
    './assets/clientes/cliente-proa-al-mar.png',
    './assets/clientes/cliente-sushi-club.png',
    './assets/clientes/cliente-the-good-vegan.png',
    './assets/clientes/cliente-urban-moster.png',
    './assets/clientes/cliente-american-college.png',
    './assets/clientes/cliente-yo-te-enseño.png',

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
