import { useState } from 'react'
import './output.css'
import Header from './secciones/Header.jsx'
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
