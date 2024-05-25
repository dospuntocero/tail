import React from 'react';
import ReactDOM from 'react-dom/client';

import '../output.css';
import Header from '../secciones/Header';
import Footer from '../secciones/Footer';
import Testimonios from '../secciones/Testimonios';

function App() {
  return (
    <>
    <Testimonios/>
    </>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
