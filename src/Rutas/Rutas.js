import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPaciente from "../Paginas/Pacientes/LogInPaciente";
import SignOut from '../Paginas/Pacientes/SignOut';
import OldContraseña from '../Paginas/Pacientes/OldContraseña';
import EditarHoja from '../Paginas/Personal/EditarHoja';
import MenuDesp from '../Paginas/Pacientes/menuDesp';


const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/">
          <Route index element ={<MenuDesp/>}/>
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