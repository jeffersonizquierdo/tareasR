import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Mailer } from './components/Layouts/Mailer/Mailer';
import { HeaderContador } from './components/Pages/headerContador/HeaderContador';
import { MenuNavigationF } from './components/Pages/MenuNavigationF/MenuNavigationF';
import { RickAndMortyF } from './components/Pages/RickAndMortyF/RickAndMortyF';



function App() {

  const sendEmail = (event) => {
    event.preventDevault();
  }

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
        <Route path='/RickAndMorty' element={<RickAndMortyF/>}/>
        <Route path='Mailer' element={<Mailer></Mailer>}/>
        <Route path='apiTenor' element={<apiTenorF/>} ></Route>
      </Routes>
      
    </>
  );
}

export default App;