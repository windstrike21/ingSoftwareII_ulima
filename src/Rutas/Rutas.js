import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPaciente from "../Paginas/Pacientes/LogInPaciente";
import SignOut from '../Paginas/Pacientes/SignOut';
import OldContraseña from '../Paginas/Pacientes/OldContraseña';
import EditarHoja from '../Paginas/Personal/EditarHoja';
import menuD from '../Paginas/Pacientes/menuD';
import menuDesplegable from '../Paginas/Pacientes/menuDesplegable';
import ayudas1 from '../Paginas/Pacientes/ayudas';


const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<menuDesplegable/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default Rutas

/*LogInPaciente
SignOut
OldContraseña
*/