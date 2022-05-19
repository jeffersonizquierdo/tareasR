import React from 'react';
import logo from './logo.svg';
import todos from './todos.json'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HeaderContador } from './components/Pages/headerContador/HeaderContador';



function App() {

  const [persona, setPersona] = useState({
    nombre: 'David',
    apellido: 'Escobar'
  });
  const [todos1] = useState(todos)
  const getNoombreCompleto = () => persona.nombre + ' ' + persona.apellido;
  const mostrarTareas = () => todos.forEach(element => {

    <>
      <h1>
        hola mundo
      </h1>
    </>
    
    
  });

  return (
    <> 
      <Routes>
        <Route path='/' element={<HeaderContador></HeaderContador> } />
      </Routes>
    
    
    </>
  );
}

export default App;