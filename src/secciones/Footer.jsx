export default function Footer() {
    return (

        <footer class="poppins-regular">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
                <div class="flex items-center space-x-3">
                    <div>
                        <h4 class="text-lg poppins-black">WhatsApp</h4>
                        <p class="text-2xl text-primary poppins-regular">+56 9 7622 6261</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex items-center space-x-3">
                    <div>
                        <h4 class="text-lg poppins-black">Correo</h4>
                        <p class="text-2xl text-primary poppins-regular">contacto@zeleny.cl</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex items-center space-x-3">
                    <div>
                        <h4 class="text-lg poppins-black">Ubicación</h4>
                        <p class="text-2xl text-primary poppins-regular">Quinta Región, con presencia nacional</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-8 p-8 mt-12 rounded-lg md:grid-cols-4 bg-terciary">
            <div class="flex justify-center md:justify-start">
                <img src="https://zeleny.cl/wp-content/uploads/2022/03/zeleny-R-Negro.svg" alt="Zeleny" class="w-56 h-auto"/>
            </div>
            <div class="text-center md:text-left">
                <h3 class="text-lg font-semibold">Servicios</h3>
                <p><a href="/gastronomia/" class="text-blue-500 hover:underline">Gastronomía</a></p>
                <p><a href="/web/" class="text-blue-500 hover:underline">Diseño Web</a></p>
                <p><a href="/diseno-grafico/" class="text-blue-500 hover:underline">Diseño Gráfico</a></p>
                <p><a href="/diseno-redes-sociales/" class="text-blue-500 hover:underline">Redes Sociales</a></p>
                <p><a href="/fotografia/" class="text-blue-500 hover:underline">Fotografía</a></p>
            </div>
            <div class="text-center md:text-left">
                <p class="text-lg font-semibold">Síguenos:</p>
                <ul class="flex justify-center mt-2 space-x-4 md:justify-start">
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
                <img src="https://zeleny.cl/wp-content/uploads/2022/03/mercado-pago-negro.png" alt="Mercado Pago" class="mx-auto mt-4 w-56 h-auto md:mx-0"/>
            </div>
        </div>
        <div class="pt-8 mt-12 text-center border-t border-gray-300">
            <p>2020 - 2024 Hecho con <span class="text-red-500">❤</span> por <a href="https://zeleny.cl" class="text-blue-500 hover:underline">Zeleny <span class="font-bold">®</span></a></p>
        </div>
    </div>
</footer>


    )
  }
  

