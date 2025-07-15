export default function Footer() {
    return (

        <footer className="poppins-regular">
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
                <div className="flex items-center space-x-3">
                    <div>
                        <h4 className="text-lg poppins-black">WhatsApp</h4>
 <p className="text-2xl text-primary poppins-regular"><a href="https://wa.me/56976226261" target="_blank" rel="noopener noreferrer">+56 9 7622 6261</a></p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center space-x-3">
                    <div>
                        <h4 className="text-lg poppins-black">Correo</h4>
                        <p className="text-2xl text-primary poppins-regular"><a href="mailto:contacto@zeleny.cl">contacto@zeleny.cl</a></p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center space-x-3">
                    <div>
                        <h4 className="text-lg poppins-black">Ubicación</h4>
                        <p className="text-2xl text-primary poppins-regular">Quinta Región, con presencia nacional</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid gap-8 p-8 mt-12 rounded-lg md:grid-cols-2 md:grid-cols-3 bg-terciary">

            <div>
                <h3 className="text-lg font-semibold">Servicios</h3>
                <p><a href="/gastronomia/" className="text-[#C48F3A] hover:underline">Gastronomía</a></p>
                <p><a href="/web/" className="text-[#C48F3A] hover:underline">Diseño Web</a></p>
                <p><a href="/diseno-grafico/" className="text-[#C48F3A] hover:underline">Diseño Gráfico</a></p>
                <p><a href="/diseno-redes-sociales/" className="text-[#C48F3A] hover:underline">Redes Sociales</a></p>
                <p><a href="/fotografia/" className="text-[#C48F3A] hover:underline">Fotografía</a></p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">¿Necesitas facilidades de pago?</h3>
                <p className="text-gray-700">Puedes pagar con tarjeta de crédito en 6 cuotas sin interés con:</p>
                <img src="https://zeleny.cl/wp-content/uploads/2022/03/mercado-pago-negro.png" alt="Mercado Pago" className="mx-auto mt-4 w-56 h-auto md:mx-0"/>
            </div>
            <div>
                <p className="text-lg font-semibold">Síguenos:</p>
                <ul className="flex justify-center mt-2 space-x-4 md:justify-start">
                    <li>
                        <a href="https://www.instagram.com/zeleny.cl/" className="text-pink-500 hover:text-pink-600" title="Seguir en Instagram" target="_blank">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
        <div className="pt-8 mt-12 text-center border-t border-gray-300">
            <p>2020 - 2025 Hecho con <span className="text-red-500">❤</span> por <a href="https://zeleny.cl" className="text-[#C48F3A] hover:underline">Zeleny <span className="font-bold">®</span></a></p>
        </div>
    </div>
</footer>


    )
  }
  

