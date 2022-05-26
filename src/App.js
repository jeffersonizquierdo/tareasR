import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HeaderContador } from './components/Pages/headerContador/HeaderContador';
import { MenuNavigationF } from './components/Pages/MenuNavigationF/MenuNavigationF';
import { RickAndMortyF } from './components/Pages/RickAndMortyF/RickAndMortyF';



function App() {

  return (
    <>
      
      <div className='menu'>
        <nav>
          <h2 >Home</h2>
        </nav>
        <MenuNavigationF></MenuNavigationF>
      </div>
      <Routes>
        <Route path='/' element={ <HeaderContador/>}> </Route>
        <Route path='/contador'  element={<HeaderContador/>}/>
      </Routes>
      <RickAndMortyF/>
    </>
  );
}

export default App;