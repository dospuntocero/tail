const testimonials = 
[
        {
            nombre: "Valentina Casanova",
            puesto: "Ex Directora de Admisión & Comunicaciones, INACAP Valparaíso",
            testimonio: "Trabajar con Zeleny me ayudó a ampliar mi horizonte de ideas y representar gráficamente lo que necesitábamos desarrollar. Es muy responsable y orientado al cumplimiento en plazos y obligaciones. Es interdisciplinario en su desarrollo, lo que fomenta el trabajo en equipo y ayuda al positivo clima laboral, adaptándose a los cambios y a las distintas tareas.",
            url_imagen: "./assets/testimonios/Valentina-Casanova.png"
        },
        {
            nombre: "Erick Mardones",
            puesto: "Trae mi Camara",
            testimonio: "Destacar que ha sido de las mejores que hemos tenido como empresa. Nos creó un sitio web intuitivo, minimalista e integrando cada uno de los requerimientos que solicitamos para hacerlo una página web aún más personalizada. Siempre existió una voluntad y paciencia de oro, considerando que no todos manejamos los aspectos relacionados a una buena web. Zeleny nos hizo partícipe de todo el proceso, pidiéndonos el visto bueno en los elementos claves del sitio, antes de dejarlo como definitivo. Muchas veces pedimos cambios o solicitudes especiales, donde ellos con mucha dedicación lo hicieron sin problemas.",
            url_imagen: "./assets/testimonios/alexander-anich.png"

        },
        {
            nombre: "Enzo Curotto",
            puesto: "CEO FELUEN | Fitness in colors",
            testimonio: "Zeleny ha sido una muy grata experiencia para nosotros. Existe un plus difícil de encontrar, me refiero a un manejo integral de fotografía, Photoshop, Illustrator y diseño sumado a una excelente disposición, puntualidad y profesionalismo. No son sólo unas grandes habilidades técnicas, sino también unas buenísimas habilidades blandas. Lo recomiendo 200%.",
            url_imagen: "./assets/testimonios/enzo.png"

        },
        {
            nombre: "Carlos Fuenzalida",
            puesto: "Ex Director DAE, INACAP Valparaíso",
            testimonio: "Zeleny en el tiempo que nos tocó trabajar, demostraron ser muy profesionales, puntuales en sus trabajos y un excelente trabajo y profesionalismo.",
            url_imagen: "./assets/testimonios/alexander-anich.png"

        },
        {
            nombre: "Alexander Anich",
            puesto: "CEO Hönigot",
            testimonio: "Zeleny demostró ser muy profesional y puntual en sus trabajos, con una excelente calidad.",
            url_imagen: "./assets/testimonios/alexander-anich.png"

        },
    
];    

import alexanderAnichImage from '../assets/testimonios/alexander-anich.png';

import React from 'react';

export default function Testimonials() {
    return (
        <div className="grid grid-cols-1 gap-6 p-6 mx-auto max-w-6xl md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="flex">
                    <img src={testimonial.url_imagen} alt={testimonial.nombre} className="object-cover z-10 mb-4 w-32 h-32 rounded-full border-4 shadow-lg border-terciary" />
                    <div className="p-4 bg-white rounded-lg border-4 shadow-lg border-terciary">
                        <h3 className="text-lg poppins-black text-primary">{testimonial.nombre}</h3>
                        <p className="p-0 mb-2 text-gray-500 ptext-sm">{testimonial.puesto}</p>
                        <p className="text-gray-700 text">{testimonial.testimonio}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
