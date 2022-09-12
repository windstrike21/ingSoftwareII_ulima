
import './App.css';

import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from "./Paginas/Principal";

import IndexPersonal from "./Paginas/Personal/indexPersonal"
import BuscarPacientesParaVerPerfil from "./Paginas/Personal/Buscar pacientes para ver perfil";

import LogIn from "./Componentes/LogIn";
import HistorialClinico from "./Paginas/Personal/HistorialClinico";
import EditarHistoria from "./Paginas/Personal/EditarHistoria";

import RegistroPersonal from "./Paginas/Personal/RegistroPorPersonal";
import CanalSoporte from "./Paginas/Personal/canalSoporte";
import Citas from "./Paginas/Personal/Citas";
function App() {
  const [nombrePacCita,setNombrePacCita]=useState(""); 
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Principal />} />
          {/* Rutas para personal */}
          <Route path="IniciarSesionPersonal">
            <Route index element={<LogIn/>} />
            <Route path="InicioPersonal" >
              <Route index element={<IndexPersonal />} />
              <Route path="Buscar_pacientes_para_ver_perfil">
                <Route index element={<BuscarPacientesParaVerPerfil NombrePacCita={setNombrePacCita}/>} />
                <Route path="GestionarHojaClinica">
                  <Route index element={<HistorialClinico />} />
                  <Route path="ActualizarHistorialClinico" element={<EditarHistoria />} />
                </Route>
                <Route path="Citas" element={<Citas nombre={nombrePacCita}/>} />
              </Route>
              <Route path="Afiliados">
                <Route index element={<RegistroPersonal />} />
              </Route>
              <Route path="CanalSoporte" element={<CanalSoporte />} />
            </Route>
          </Route>
          {/* Rutas para pacientes */}

          {/* Rutas para administrador */}
          <Route path="IniciarSesionAdministrador">
            <Route index element={<LogIn />}>

            </Route>
          </Route>
          {/* Rutas para medico */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
