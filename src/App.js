import React from 'react';
import todos from './todos.json'
import { Route, Routes } from 'react-router-dom';
import { HeaderContador } from './components/Pages/headerContador/HeaderContador';
import { MenuNavigationF } from './components/Pages/MenuNavigationF/MenuNavigationF';
import { ModeDarkF } from './components/Pages/ModeDarkF/ModeDarkF';


function App() {

  return (
    <>
      
      <div className='menu'>
        <nav>
          <h2 >Home</h2>
        </nav>
        <MenuNavigationF></MenuNavigationF>
      </div>
      <h2 className='tittle'>Contador</h2>
      <Routes>
        <Route path='/' element={ <HeaderContador/>}> </Route>
      </Routes>

      <ModeDarkF></ModeDarkF>
    </>
  );
}

export default App;