import React from 'react';
import {Routes, Route} from 'react-router-dom';



import Home from '../pages/Home';
import Comtrade from '../pages/Comtrade';



function Rotas() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/comtrade' element={<Comtrade/>} />
            <Route path='/home' element={<Home/>} />
        </Routes>
    </>
  )
}

export default Rotas