import React from 'react';
import ReactDOM from 'react-dom/client';

import '../output.css';
import Header from '../secciones/Header';
import Footer from '../secciones/Footer';
import Menu from '../componentes/Menu';
import Testimonios from '../secciones/Testimonios';

function App() {
  return (
    <>
    <Testimonios/>
    <Menu/>
    <Footer/>
    </>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
