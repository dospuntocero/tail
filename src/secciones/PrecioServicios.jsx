import React, { useState } from 'react';

const Servicios = () => {
  const [selectedPlan, setSelectedPlan] = useState(); // Estado para almacenar el plan seleccionado

  const pricingPlans = [
    {
      id: "mensual",
      planTitle: "Plan Mensual",
      planSubtitle: "Paga mes a mes",
      price: "$200.000+IVA",
      frequency: "/ Mes",
      features: [
        "4 Gráficas semanales.",
        "3 Fotografías semanales.",
        "1 Reel semanal.",
        "Modelo Profesional Femenina"
      ],
      selected: false,
      button: { href: "#", text: "Seleccionar plan" }
    },
    {
      id: "sin-plan",
      planTitle: "Sin Plan",
      planSubtitle: "Pago Único",
      price: "$70.000+IVA",
      frequency: "/ Único",
      features: [
        "3 Gráficas",
        "2 fotografías",
        "1 Reel"
      ],
      selected: false,
      button: { href: "#", text: "Seleccionar plan" }
    }
  ];

  const handlePlanSelect = (planId, event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    setSelectedPlan(planId); // Cambiar el plan seleccionado al hacer clic en un botón
  };

  return (
    <div className="py-8 bg-terciary">
      <div className="container mx-auto">
        <div className="flex justify-center w-full">
          <div className="mb-4">
            <img
              src="https://zeleny.cl/wp-content/uploads/2024/03/icon.png"
              alt="icon"
              title="icon"
              className="mx-auto w-28 h-28"
            />
          </div>
          <div className="mb-8">
            <h2 className="text-4xl font-bold poppins-black text-primary">
              <span className='block'>Servicios</span> Web
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap">
            <div className="mb-8">
              <p>Podrás utilizar las fotografías en tus redes sociales y web. Incluso podrás hacer anuncios y promocionar tus servicios o productos. (costo de publicidad no se incluyen en el servicio)</p>
              <p>La permanencia de este servicio mínima es de tres meses, aunque la mayoría de nuestros clientes lo contratan durante mucho más tiempo</p>
            </div>
        </div>

            <div className="inline-block mr-2 mb-4">
              <a className={`px-4 py-2 text-white rounded ${selectedPlan === 'mensual' ? 'bg-primary' : 'bg-accent'}`} href="#mensual" onClick={(event) => handlePlanSelect('mensual', event)}>Plan Mensual</a>
            </div>
            <div className="inline-block mr-2 mb-4">
              <a className={`px-4 py-2 text-white rounded ${selectedPlan === 'sin-plan' ? 'bg-primary' : 'bg-accent'}`} href="#unico" onClick={(event) => handlePlanSelect('sin-plan', event)}>Sin Plan</a>
            </div>

          <div className="grid gap-4 md:grid-cols-2">
            {pricingPlans.map((plan, index) => (
              <div key={index}>
                <div id={plan.id} className={`p-4 mb-8 bg-white rounded rounded-lg border-l ${selectedPlan === plan.id ? 'blur-none transition duration-300 ease-in-out transform scale-100 shadow-lg grayscale-0' : 'grayscale transition duration-300 ease-in-out transform scale-70 blur-sm'}`}>

                  <div className="mb-4">
                    <h2 className="text-2xl font-bold">{plan.planTitle}</h2>
                    <span className="text-sm text-blue-500">{plan.planSubtitle}</span>
                  </div>

                  <div className="mb-4 text-4xl font-bold">
                    <span className="text-gray-700">{plan.price}</span>
                    <span className="text-base">{plan.frequency}</span>
                  </div>
                  <ul className="mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Servicios;
