import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPaciente from "../Paginas/Pacientes/LogInPaciente";
import SignOut from '../Paginas/Pacientes/SignOut';
import OldContraseña from '../Paginas/Pacientes/OldContraseña';
import EditarHoja from '../Paginas/Personal/EditarHoja';
import MenuDesp from '../Paginas/Pacientes/menuDesp';
import EditarDatosPaciente from '../Paginas/Pacientes/EditarDatosPaciente';


const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/">
          <Route index element ={<EditarDatosPaciente/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Rutas

/*LogInPaciente
SignOut
OldContraseña
*/