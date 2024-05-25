// Componentes/Servicios.js

import React from 'react';

const Servicios = ({ services, title, description }) => {
  return (
    <div className="flex py-24 md:py-32">
      <div className="grid grid-cols-1 gap-4 px-6 mx-auto max-w-6xl md:grid-cols-2 lg:px-8">
        <div className="sticky top-0 z-20 py-2 max-w-2xl bg-white min-h-max md:h-64">
          <h2 className="text-3xl poppins-black text-primary sm:text-4xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>
        <div className="grid relative z-10 grid-cols-1 gap-4 lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.name} className="relative p-4 mb-4 bg-white rounded-lg border transition-shadow md:mb-0 hover:shadow-lg">
              <div className="text-left">
                <div className="overflow-hidden mb-4">
                  <img src={service.imageUrl} alt={service.name} className="object-cover w-full h-auto transition-transform duration-300 transform hover:scale-105"/>
                </div>
                <div className="prose">
                  <h4 className="mb-2 text-xl poppins-black text-primary">{service.name}</h4>
                  <div className="text-gray-700">
                    {service.description}
                    
                    <ul>
                      {service.incluye.map((item, index) => (
                        <li key={index} className="ml-4 list-disc">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-right">
                <a className="px-4 py-2 text-white rounded transition-colors bg-primary hover:bg-accent" href="https://zeleny.cl/diseno-grafico/">Saber más</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
