import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPaciente from "../Paginas/Pacientes/LogInPaciente";
import SignOut from '../Paginas/Pacientes/SignOut';
import OldContraseña from '../Paginas/Pacientes/OldContraseña';
import EditarHoja from '../Paginas/Personal/EditarHoja';
import EditarDatosPaciente from '../Paginas/Pacientes/EditarDatosPaciente';
import MenuDesp from '../Components/menuDesp';
import AgendarCita from '../Paginas/Pacientes/AgendarCita';
import RecetaMedica from '../Paginas/Pacientes/RecetaMedica';
import Calendario from '../../calendario';


const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" index element ={<MenuDesp/>}/>
        <Route path = "Calendario" index element ={<AgendarCita/>}/>
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