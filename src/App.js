import React from 'react';
import logo from './logo.svg';
import todos from './todos.json'
import { useState } from 'react';
import { Contador } from './components/Ui/Contador/Contador';


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
    <div className="App">

      <nav className='Head' >
        <img src={logo} className="logo" alt="logo" />
      </nav>

      <div>Hola {getNoombreCompleto()}</div>
      <div>esta es mi lista</div>

      <Contador/>

    </div>
  );
}

export default App;