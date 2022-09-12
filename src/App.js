import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

//import components

import Rotas from './routes/Rotas';
import NavbarSite from './components/NavbarSite';

function App() {


  return (
    <>
      <BrowserRouter>
        <NavbarSite/>
        <Rotas/>
      </BrowserRouter>
    </>
    
   
  );
}

export default App;
