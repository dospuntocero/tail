import React from 'react';
import ReactDOM from 'react-dom/client';

import '../output.css';
import Header from '../secciones/Header';
import Footer from '../secciones/Footer';
import ServiciosInformatica from '../secciones/ServiciosInformatica';

function App() {
  return (
    <>
      <Header />
      <ServiciosInformatica />
      <Footer />
    </>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
