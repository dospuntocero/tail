// Suggested code may be subject to a license. Learn more: ~LicenseLog:129366807.
import React from 'react';
import Servicios from '../componentes/Servicios';


const services = [

    {
        name: 'Diseño Gráfico',
        description: 'Nos enfocamos en mejorar la presencia visual de tu marca. Ofrecemos un servicio integral que incluye:',
        incluye: [
          'Asesoramiento', 'Branding institucional', 'Packaging', 'Diseño ecológico'
        ],
        imageUrl:'./assets/servicios/diseno-grafico-zeleny.png',
    },
    {
      name: 'Desarrollo Web',
      description: 'Proporcionarte soluciones web personalizadas y efectivas. Te ofrecemos un servicio de Diseño Web especializado que incluye:',
      incluye: [
        'Diseño Web estático o dinámico',
        'E-commerce (Tiendas online)',
        'Landing page (Página de inicio)',
        'Web corporativas e informativas'
      ],
      imageUrl:'./assets/servicios/diseno-web-zeleny.png',
    },
    {
      name:'Redes Sociales',
      description:'Nos dedicamos a proporcionarte una gama completa de servicios para optimizar tu presencia en las redes sociales:',
      incluye: [
      'Asesoramiento personalizado',
      'Alcance de público objetivo',
      'Comunicación asertiva',
      'Análisis de rendimiento',
      'Actualizaciones constantes'
      ],
      imageUrl:'./assets/servicios/redes-sociales-zeleny.png'
    },
    {
      name:'Fotografía',
      description:'Nuestro completo servicio de Fotografía se especializa en una variedad de áreas para satisfacer todas tus necesidades visuales:',
      incluye: [
      'Fotografía Corporativa',
      'Fotografía Publicitaria',
      'Fotografía de Moda',
      'Fotografía de Gastronomía',
      'Fotografía de Productos',
      'Fotografía e-Commerce'
      ],
      imageUrl:'./assets/servicios/fotografia-zeleny.png'
    },
    


];


const Services = () => {
  return (
    <Servicios
      services={services}
      title="Nuestros Servicios de creación web"
      description="Somos un grupo de expertos en diseño y desarrollo de contenido digital. Con más de 30 años de experiencia combinados encargados de apoyarte en tu trabajo digital."
    />
    
  );
};

export default Services;
