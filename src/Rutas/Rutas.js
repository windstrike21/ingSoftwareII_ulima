import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPaciente from "../Paginas/Pacientes/LogInPaciente";
import SignOut from '../Paginas/Pacientes/SignOut';


const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={ <LogInPaciente/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas
