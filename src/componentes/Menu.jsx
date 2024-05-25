import React from 'react';

const MenuContacto = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Menú */}
      <div className="flex flex-col justify-center items-center md:items-start">
        <h3 className="poppins-black text-primary">MENÚ</h3>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-0">
          <div className="main-menu-item">
            <p><span>01—</span>&nbsp;<a href="/diseno-grafico/">Diseño Gráfico</a></p>
          </div>
          <div className="main-menu-item">
            <p><span>02—</span> <a href="/diseno-web/">Diseño Web</a></p>
          </div>
          <div className="main-menu-item">
            <p><span>03—</span> <a href="/diseno-redes-sociales/">Redes sociales</a></p>
          </div>
          <div className="main-menu-item">
            <p><span>04—</span> <a href="/fotografia/">Fotografía</a></p>
          </div>
          <div className="main-menu-item">
            <p><span>05—</span> <a href="/gastronomia/">Gastronomía</a></p>
          </div>
          <div className="main-menu-item">
            <p><span>06—</span> <a href="/portafolio/">Portafolio</a></p>
          </div>
        </div>
      </div>

      {/* Contacto */}
      <div className="flex flex-col justify-center items-center md:items-start">
        <h3 className="poppins-black text-primary">CONTACTO</h3>
        <div className="text-center md:text-left">
          <h4>NUESTRA UBICACIÓN</h4>
          <p>Quinta región, Valparaíso, Chile</p>
        </div>
        <div className="text-center md:text-left">
          <h4>CONTACTO</h4>
          <p><span>contacto@zeleny.cl</span><br /><span>+56 9 7622 6261</span></p>
        </div>
      </div>
    </div>
  );
};

export default MenuContacto;
