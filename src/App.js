
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Encuestas from './components/Encuesta';

function App() {
  const encuestas = [
    { id: 1, pregunta: '¿Cuál es tu color favorito?', opciones:
    ['Rojo', 'Azul', 'Verde'] },
    
    { id: 2, pregunta: '¿Cuál es tu comida favorita?', opciones:
    ['Pizza', 'Hamburguesa', 'Sushi'] },
  ];
  return (
    <div className="App">
      <h1>Aplicacion de Encuestas</h1>

      {/* Contenido de las paginas */}
      <Encuestas encuestas={ encuestas }/>
    </div>
  );
}

export default App;
