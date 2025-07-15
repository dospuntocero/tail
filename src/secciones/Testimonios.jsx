import React, { useEffect, useRef } from 'react';


const testimonials =
    [


        {
            nombre: "Valentina Casanova",
            puesto: "Ex Directora de Admisión & Comunicaciones, INACAP Valparaíso",
            testimonio: "Trabajar con Zeleny me ayudó a ampliar mi horizonte de ideas y representar gráficamente lo que necesitábamos desarrollar. Es muy responsable y orientado al cumplimiento en plazos y obligaciones. Es interdisciplinario en su desarrollo, lo que fomenta el trabajo en equipo y ayuda al positivo clima laboral, adaptándose a los cambios y a las distintas tareas.",
            url_imagen: "/assets/testimonios/valentina-casanova.png"
        },
        {
            nombre: "Erick Mardones",
            puesto: "Trae mi Camara",
            testimonio: "Destacar que ha sido de las mejores que hemos tenido como empresa. Nos creó un sitio web intuitivo, minimalista e integrando cada uno de los requerimientos que solicitamos para hacerlo una página web aún más personalizada. Siempre existió una voluntad y paciencia de oro, considerando que no todos manejamos los aspectos relacionados a una buena web. Zeleny nos hizo partícipe de todo el proceso, pidiéndonos el visto bueno en los elementos claves del sitio, antes de dejarlo como definitivo. Muchas veces pedimos cambios o solicitudes especiales, donde ellos con mucha dedicación lo hicieron sin problemas.",
            url_imagen: "/assets/testimonios/erick-mardones.png"

        },
        {
            nombre: "Nimai Gabilondo",
            puesto: "CEO Super Alimentos Nitay",
            testimonio: "¡Estoy feliz con el resultado de mi marca y todo fue gracias al increíble trabajo de Zeleny! No solo crearon mi página web Nitay.cl, sino que también diseñaron todo el packaging de mis productos. Supieron captar a la perfección la esencia de lo que quería transmitir, logrando que la identidad visual fuera coherente. El proceso fue cercano, la comunicación excelente, superando las  expectativas. ¡Los recomiendo a ojos cerrados para un servicio de diseño integral!.Confiar en Zeleny fue la mejor decisión. Demostraron una gran capacidad para entender la visión del negocio y traducirla en una identidad de marca sólida y atractiva. La página web es funcional y moderna, y el diseño del packaging es simplemente espectacular, logrando que el producto destaque. Su profesionalismo, cumplimiento de plazos y enfoque estratégico son impecables. Recomiendo a Zeleny a cualquier emprendedor o empresa que busque un partner de diseño de alta calidad.",
            url_imagen: "/assets/testimonios/nimai.png"

        },
        {
            nombre: "Alejandra Saavedra",
            puesto: "Artista Innata",
            testimonio: "Zeleny un excelente profesional, tiene muy buena disposición y paciencia para satisfacer las necesidades de sus clientes. Llevo un par de años trabajando con el y de seguro lo seguiré haciendo. Es una persona cercana que genera confianza y que posee una linda calidad humana. Se los recomiendo para llevar a cabo sus proyectos, tengan la certeza que estarán trabajando con una persona que entrega lo mejor de si.",
            url_imagen: "/assets/testimonios/alejandra-saavedra.png"

        },
        {
            nombre: "Enzo Curotto",
            puesto: "CEO FELUEN | Fitness in colors",
            testimonio: "Zeleny ha sido una muy grata experiencia para nosotros. Existe un plus difícil de encontrar, me refiero a un manejo integral de fotografía, Photoshop, Illustrator y diseño sumado a una excelente disposición, puntualidad y profesionalismo. No son sólo unas grandes habilidades técnicas, sino también unas buenísimas habilidades blandas. Lo recomiendo 200%.",
            url_imagen: "/assets/testimonios/enzo.png"

        },
        {
            nombre: "Carlos Fuenzalida",
            puesto: "Ex Director DAE, INACAP Valparaíso",
            testimonio: "Zeleny en el tiempo que nos tocó trabajar, demostraron ser muy profesionales, puntuales en sus trabajos y un excelente trabajo y profesionalismo.",
            url_imagen: "/assets/testimonios/carlos-fuenzalida.png"
        },
        {
            nombre: "Millaray Herrera",
            puesto: "CEO Loor",
            testimonio: "Trabajar con Zeleny ha sido muy profesional, las sesiones de fotografía fueron muy creativas y enfocadas en el producto agregando valor desde la imagen. Tanto las sesiones de Fotografía en terreno cómo las fotografías de estudio agregaron valor a nuestro producto. También en el desarrollo de marca, evaluando las necesidades del cliente y del mercado.",
            url_imagen: "/assets/testimonios/millaray-herrera.png"

        },
        {
            nombre: "Alexander Anich",
            puesto: "CEO Hönigot",
            testimonio: "Zeleny demostró ser muy profesional y puntual en sus trabajos, con una excelente calidad.",
            url_imagen: "/assets/testimonios/alexander-anich.png"

        },
        {
            nombre: "Eduardo Vergara",
            puesto: "Gerente  | Empresa Gastronómica Salgado y Serrnuda y Cía Ltda ",
            testimonio: "Estamos muy satisfechos con el servicio brindado por Zeleny en restaurant proa al mar. Desde el primer contacto demostraron un alto nivel de responsabilidad y compromiso con nuestro proyecto. Cumplieron en todo momento con los plazos establecidos y mostraron una gran rapidez en la entrega del material, lo cual fue clave para avanzar sin contratiempos. Es una empresa seria, confiable y profesional. Sin duda, seguiremos trabajando con ellos y los recomendamos ampliamente.",
            url_imagen: "/assets/testimonios/eduardo-vergara.png"

        },


    ];
export default function Testimonials() {
    const scrollRef = useRef(null);
    const testimonialWidth = 384; // w-96

    const scrollNext = () => {
        const container = scrollRef.current;
        if (!container) return;

        const maxScroll = container.scrollWidth - container.clientWidth;
        const nextScrollLeft = container.scrollLeft + testimonialWidth;

        container.scrollTo({
            left: nextScrollLeft >= maxScroll ? 0 : nextScrollLeft,
            behavior: 'smooth',
        });
    };

    const scrollPrev = () => {
        const container = scrollRef.current;
        if (!container) return;

        const prevScrollLeft = container.scrollLeft - testimonialWidth;

        container.scrollTo({
            left: prevScrollLeft <= 0 ? container.scrollWidth : prevScrollLeft,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            scrollNext();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            <div className="py-10 mx-auto max-w-2xl md:py-20 poppins-regular">
                <h2 className="mt-5 mb-4 text-center text-1xl text-primary poppins-black sm:text-4xl">
                    Experiencias que respaldan nuestro trabajo
                </h2>
            </div>

            <div className="flex relative justify-center items-center size-full">


                <div
                    className="scroll-smooth snap-x snap-mandatory"
                    ref={scrollRef}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index} className="overflow-hidden p-4 rounded-lg shadow-lg" 
                        >
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.url_imagen}
                                        alt={testimonial.nombre}
                                        className="object-cover w-10 h-10 rounded-full border-4 shadow-lg border-terciary"
                                    />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold text-primary">{testimonial.nombre}</h3>
                                        <p className="text-sm text-gray-500">{testimonial.puesto}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700">{testimonial.testimonio}</p>
                            </div>
                    ))}
                </div>

                <button
                    onClick={scrollPrev}
                    className="absolute left-2 top-1/2 z-30 p-2 text-white rounded-full shadow-lg transform -translate-y-1/2 bg-primary hover:bg-opacity-90"
                >
                    ◀
                </button>

                <button
                    onClick={scrollNext}
                    className="absolute right-2 top-1/2 z-30 p-2 text-white rounded-full shadow-lg transform -translate-y-1/2 bg-primary hover:bg-opacity-90"
                >
                    ▶
                </button>
            </div>
        </div>
    );
}