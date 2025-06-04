export default function Header() {
  return (
    <header className="px-4 mx-auto my-8 max-w-6xl sm:px-6 md:px-8">
      <img src="https://zeleny.cl/wp-content/uploads/2022/05/zeleny-R-Negro.png" alt="nuestro logo :D" />
      <div className="grid gap-4 items-center md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl poppins-regular lg:text-3xl">
            Te ofrecemos un servicio personalizado en tu &nbsp;
            <strong className="block text-primary">Comunicación Visual</strong>
          </h1>
          <a href="https://wa.me/56976226261" target="_blank" className="tracking-wide font-4 xl btn poppins-regular hover:bg-[#25D366]">
            <span className="drop-shadow-md">Escríbenos!</span>
          </a>
        </div>
        <div>
            <img src="/assets/servicios/home-zeleny.png" alt="imagen descriptiva" />
          
        </div>
      </div>
    </header>
  )
}
