export default function Footer() {
    return (

        <footer class="bg-terciary poppins-regular">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-left">
                <div class="flex items-center space-x-3">
                    <span class="text-4xl text-green-500"></span>
                    <div>
                        <h4 class="text-lg font-semibold">WhatsApp</h4>
                        <p class="text-gray-700">+56 9 7622 6261</p>
                    </div>
                </div>
            </div>
            <div class="text-left">
                <div class="flex items-center space-x-3">
                    <span class="text-4xl text-blue-500"></span>
                    <div>
                        <h4 class="text-lg font-semibold">Correo</h4>
                        <p class="text-gray-700">contacto@zeleny.cl</p>
                    </div>
                </div>
            </div>
            <div class="text-left">
                <div class="flex items-center space-x-3">
                    <span class="text-4xl text-red-500"></span>
                    <div>
                        <h4 class="text-lg font-semibold">Ubicación</h4>
                        <p class="text-gray-700">Quinta Región, con presencia nacional</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="flex justify-center md:justify-start">
                <img src="https://zeleny.cl/wp-content/uploads/2022/03/zeleny-R-Negro.svg" alt="Zeleny" class="w-56 h-auto"/>
            </div>
            <div class="text-center md:text-left">
                <h3 class="text-lg font-semibold">Servicios</h3>
                <p><a href="https://zeleny.cl/gastronomia/" class="text-blue-500 hover:underline">Gastronomía</a></p>
                <p><a href="https://zeleny.cl/diseno-web/" class="text-blue-500 hover:underline">Diseño Web</a></p>
                <p><a href="https://zeleny.cl/diseno-grafico/" class="text-blue-500 hover:underline">Diseño Gráfico</a></p>
                <p><a href="https://zeleny.cl/diseno-redes-sociales/" class="text-blue-500 hover:underline">Redes Sociales</a></p>
                <p><a href="https://zeleny.cl/fotografia/" class="text-blue-500 hover:underline">Fotografía</a></p>
            </div>
            <div class="text-center md:text-left">
                <p class="text-lg font-semibold">Síguenos:</p>
                <ul class="flex justify-center md:justify-start space-x-4 mt-2">
                    <li>
                        <a href="https://www.instagram.com/zeleny.cl/" class="text-pink-500 hover:text-pink-600" title="Seguir en Instagram" target="_blank">
                            <span class="sr-only">Instagram</span>
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="text-center md:text-left">
                <h3 class="text-lg font-semibold">¿Necesitas facilidades de pago?</h3>
                <p class="text-gray-700">Puedes pagar con tarjeta de crédito en 6 cuotas sin interés con:</p>
                <img src="https://zeleny.cl/wp-content/uploads/2022/03/mercado-pago-negro.png" alt="Mercado Pago" class="w-56 h-auto mt-4 mx-auto md:mx-0"/>
            </div>
        </div>
        <div class="mt-12 border-t border-gray-300 pt-8 text-center">
            <p>2020 - 2024 Hecho con <span class="text-red-500">❤</span> por <a href="https://zeleny.cl" class="text-blue-500 hover:underline">Zeleny <span class="font-bold">®</span></a></p>
        </div>
    </div>
</footer>


    )
  }
  


