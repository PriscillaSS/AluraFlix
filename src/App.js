import './App.css';
import Home from './componentes/Home/Home';
import Header from './componentes/Header/Header';
import NuevoVideo from './componentes2/NuevoVideo/NuevoVideo';
import CuartoVideo from './componentes/CuartoVideo/CuartoVideo';
import Footer from './componentes/Footer/Footer';
import NoExiste from './componentes/NoExiste/NoExiste';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';

function App() {
  // Función para inicializar el estado
  const inicializarDatos = () => {
    const datosGuardados = JSON.parse(localStorage.getItem('datosFormulario')) ?? [];
     return datosGuardados;
   };
 
  const [datosFormulario, setDatosFormulario] = useState(inicializarDatos);

  const [idVideo, setIdVideo] = useState("");

  // Función auxiliar para actualizar el estado
  const actualizarDatosFormulario = (datos) => {
    setDatosFormulario([...datosFormulario, datos]);
    setIdVideo(datos.video);
  };

  // Guardar datos en el localStorage cuando el estado cambie
  useEffect(() => {
    localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));
  }, [datosFormulario]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home datosFormulario={datosFormulario} />} />
        <Route path='/cuartovideo' element={<CuartoVideo datosFormulario={datosFormulario} idVideo={idVideo} />} />
        <Route path='/nuevovideo' element={<NuevoVideo manejarDatosFormulario={actualizarDatosFormulario} />} />
        <Route path='*' element={<NoExiste />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;