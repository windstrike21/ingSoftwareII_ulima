import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPaciente from "../Paginas/Pacientes/LogInPaciente";
import SignOut from '../Paginas/Pacientes/SignOut';
import OldContraseña from '../Paginas/Pacientes/OldContraseña';
import EditarHoja from '../Paginas/Personal/EditarHoja';


const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={ <EditarHoja/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default Rutas

/*LogInPaciente
SignOut
OldContraseña
*/