import React from 'react';
import todos from './todos.json'
import { Route, Routes } from 'react-router-dom';
import { HeaderContador } from './components/Pages/headerContador/HeaderContador';


function App() {
//const [persona, setPersona] = useState({
//nombre: 'David',
//apellido: 'Escobar'
//});
//const [todos1] = useState(todos)
//const getNoombreCompleto = () => persona.nombre + ' ' + persona.apellido;
//const mostrarTareas = () => todos.forEach(element => {

//});

  

  return (
    <>
    <h1 className='menu'>MENU</h1>
    <h2 className='tittle'>Contador</h2>
      <Routes>
        <Route path='/' element={ <HeaderContador/>}> </Route>
      </Routes>
    </>
  );
}

export default App;