import { useState } from 'react'
import './output.css'
import Header from './secciones/Header.jsx'
import Testimonials from './secciones/Testimonials.jsx'
import Faqs from './secciones/Faqs'
import TheTeam from './secciones/The-team'
import MasonryGallery from './secciones/MasonryGallery'
import Presentacion from './secciones/Presentacion'
import GaleriaLogos from './secciones/GaleriaLogos'
import Services from './secciones/Servicios'
import Testimonios from './secciones/Testimonios'
import Footer from './secciones/Footer'

function App() {

  return (
    <>
      <Header/>
      <Presentacion/>
      <Services/>
      
      <GaleriaLogos/>
      <MasonryGallery/>
      <Testimonios/>
      <Footer/>
    </>
  )
}

export default App
