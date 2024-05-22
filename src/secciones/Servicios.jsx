const services = [

    {
        name: 'Diseño Gráfico',
        description: 'Nos enfocamos en mejorar la presencia visual de tu marca. Ofrecemos un servicio integral que incluye: Asesoramiento, Branding institucional, Packaging, Diseño ecológico',
        imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Anuncios de Facebook e Instagram',
        description: 'Prestamos asesorías para que aprendas a manejar tus redes sociales, realizar campañas publicitarias, llegar a tu público objetivo y vender tus productos.',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Videos Animados',
        description: 'Creamos contenidos audiovisuales que presentarán de manera atractiva tus ideas hacia tu audiencia, ya sean Reels, Historias o publicaciones.',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },

    {
        name: 'Diseño publicaciones Empresas',
        description: 'Elaboramos las piezas gráficas necesarias para que tu marca se vea profesional en redes sociales. Portadas, perfiles e historias para fanpages y páginas de instagram.',
        imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Anuncios de Facebook e Instagram',
        description: 'Prestamos asesorías para que aprendas a manejar tus redes sociales, realizar campañas publicitarias, llegar a tu público objetivo y vender tus productos.',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Videos Animados',
        description: 'Creamos contenidos audiovisuales que presentarán de manera atractiva tus ideas hacia tu audiencia, ya sean Reels, Historias o publicaciones.',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },


];


  export default function Services() {
    return (
      <div className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8">
          <div className="max-w-2xl xl:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Acerca de nuestros servicios</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Somos un grupo de expertos en diseño y desarrollo de contenido digital. Con más de 30 años de experiencia combinados encargados de apoyarte en tu trabajo digital.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-16 sm:gap-x-8">
            {services.map((service) => (

            <div key={service.name} className="bg-white rounded-lg border p-4 relative hover:shadow-lg transition-shadow">
                <div className="text-left">
                    <div className="overflow-hidden mb-4">
                        <img src="{service.imageUrl}" alt={service.name} class="w-full h-auto object-cover transition-transform duration-300 transform hover:scale-105"/>
                    </div>
                    <div>
                        <h4 className="text-lg poppins-black mb-2">{service.name}</h4>
                        <div className="text-gray-700">
                        {service.description}
                        </div>
                    </div>
                </div>
                <div className="text-right mt-4">
                    <a className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors" href="https://zeleny.cl/diseno-grafico/">Saber más</a>
                </div>
            </div>

            ))}

        </div>
        </div>
      </div>
    )
  }
  