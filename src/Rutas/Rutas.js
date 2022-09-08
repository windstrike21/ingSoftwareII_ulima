import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPaciente from "../Paginas/Pacientes/LogInPaciente";
import SignOut from '../Paginas/Pacientes/SignOut';
import OldContraseña from '../Paginas/Pacientes/OldContraseña';


const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={ <OldContraseña/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default Rutas
