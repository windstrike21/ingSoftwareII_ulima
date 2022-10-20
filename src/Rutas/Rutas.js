import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPaciente from "../Paginas/Pacientes/LogInPaciente";
import SignOut from '../Paginas/Pacientes/SignOut';
import OldContraseña from '../Paginas/Pacientes/OldContraseña';
import EditarHoja from '../Paginas/Personal/EditarHoja';
import EditarDatosPaciente from '../Paginas/Pacientes/EditarDatosPaciente';
import MenuDesp from '../Components/menuDesp';
import PerfilClinico from '../Paginas/Pacientes/PerfilClinico';
import RecetaMedica from '../Paginas/Pacientes/RecetaMedica';


const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" index element ={<MenuDesp/>}/>
        <Route path = "PerfilClinico" index element ={<PerfilClinico/>}/>
        <Route path = "EditarDatosPaciente" index element ={<EditarDatosPaciente/>}/>
        <Route path = "RecetaMedica" index element ={<RecetaMedica/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default Rutas

/*LogInPaciente
SignOut
OldContraseña
*/