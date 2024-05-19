import { useState } from 'react'
import './output.css'
import Header from './secciones/Header.jsx'
import Testimonials from './secciones/Testimonials.jsx'
import Faqs from './secciones/Faqs'
import TheTeam from './secciones/The-team'


function App() {

  return (
    <>

      <Header />
      <Faqs/>

      <Testimonials />
      <TheTeam />
      
    </>
  )
}

export default App
