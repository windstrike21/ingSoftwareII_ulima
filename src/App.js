
import './App.css';

import React, { useState } from "react"

import './App.css';

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
import SignOut from "./Componentes/SignOut";
import AgregarHistoria from "./Paginas/Personal/AgregarHistoria";
import OldPassword from "./Componentes/OldContraseña";

import EditarHoja from "./Paginas/Personal/EditarHoja";
import ChatArea from "./Componentes/ChatArea";
import ConsultasPersonal from "./Paginas/Administrador/ConsultasPersonal";
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Principal />} />
          {/* Rutas para personal */}
          <Route path="IniciarSesionPersonal">
            <Route index element={<LogIn />} />
            <Route path="InicioPersonal" >
              <Route index element={<IndexPersonal tochat="CanalSoporte" />} />
              <Route path="Buscar_pacientes_para_ver_perfil">
                <Route index element={<BuscarPacientesParaVerPerfil />} />
                <Route path="HistorialClinicoPaciente">
                  <Route index element={<HistorialClinico />} />
                  <Route path="ActualizarHistorialClinico" element={<EditarHistoria />} />
                  <Route path="AgregarHistoria" element={<AgregarHistoria />} />
                </Route>
                <Route path="Citas" element={<Citas />} />
              </Route>
              <Route path="Afiliados">
                <Route index element={<RegistroPersonal />} />
              </Route>
              <Route path="HistorialClinico">
                <Route index element={<EditarHoja />} />
                <Route path="HistorialClinicoPaciente">
                  <Route index element={<HistorialClinico />} />
                  <Route path="ActualizarHistorialClinico" element={<EditarHistoria />} />
                  <Route path="AgregarHistoria" element={<AgregarHistoria />} />
                </Route>
              </Route>
              <Route path="CanalSoporte" element={<CanalSoporte />} />
            </Route>
            <Route path="OldPassword" element={<OldPassword />} />
          </Route>
          {/* Rutas para pacientes */}
          <Route path="RegistrarPaciente">
            <Route index element={<SignOut toIniciar="IniciarSesionPaciente" />} />
            <Route path="IniciarSesionPaciente">
              <Route index element={<LogIn toRegistrar="/RegistrarPaciente" />} />
              <Route path="OldPassword" element={<OldPassword />} />
            </Route>
          </Route>

          <Route path="IniciarSesionPaciente">
            <Route index element={<LogIn toRegistrar="RegistrarPaciente" />} />
            <Route path="RegistrarPaciente" element={<SignOut toIniciar="/IniciarSesionPaciente" />} />
            <Route path="OldPassword" element={<OldPassword />} />
          </Route>
          {/* Rutas para administrador */}
          <Route path="IniciarSesionAdministrador">
            <Route index element={<LogIn />} />
            <Route path="OldPassword" element={<OldPassword />} />
            <Route path="InicioAdministrador">
              <Route index element={<IndexPersonal tochat="ConsultasPersonal" />} />
              <Route path="ConsultasPersonal">
                <Route index element={<ConsultasPersonal />} />
                <Route path="CanalSoporte" element={<CanalSoporte />} />
              </Route>

            </Route>
          </Route>
          {/* Rutas para medico */}
          <Route path="RegistrarMedico">
            <Route index element={<SignOut toIniciar="IniciarSesionMedico" />} />
            <Route path="IniciarSesionMedico">
              <Route index element={<LogIn toRegistrar="/RegistrarMedico" />} />
              <Route path="OldPassword" element={<OldPassword />} />
            </Route>
          </Route>

          <Route path="IniciarSesionMedico">
            <Route index element={<LogIn toRegistrar="RegistrarMedico" />} />
            <Route path="RegistrarMedico" element={<SignOut toIniciar="/IniciarSesionMedico" />} />
            <Route path="OldPassword" element={<OldPassword />} />

          </Route>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
