
import './App.css';

import React, { useState } from "react"

import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from "./Paginas/Principal";
import IndexPersonal from "./Paginas/Personal/indexPersonal"
import BuscarUsuariosParaVerPerfil from "./Componentes/Buscar usuarios para ver perfil";

import LogIn from "./Componentes/LogIn";
import HistorialClinico from "./Paginas/Personal/HistorialClinico";
import EditarHistoria from "./Paginas/Personal/EditarHistoria";

import RegistroPersonal from "./Paginas/Personal/RegistroPorPersonal";
import CanalSoporte from "./Paginas/Personal/canalSoporte";
import Citas from "./Paginas/Personal/Citas";
import SignOut from "./Componentes/SignOut";

import OldPassword from "./Componentes/OldContraseña";

import EditarHoja from "./Paginas/Personal/EditarHoja";
import ChatArea from "./Componentes/ChatArea";
import ConsultasPersonal from "./Paginas/Administrador/ConsultasPersonal";

import Pagar from './Paginas/Pacientes/HacerPago'
import ConfirmarP from './Paginas/Pacientes/ConfirmarPago'


import RecetaMedica from './Paginas/Pacientes/Receta Medica';
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
              <Route index element={<IndexPersonal tochat="CanalSoporte" usuario="Paciente" />} />
              <Route path="Buscar_Pacientes_Para_Ver_Perfil">
                <Route index element={<BuscarUsuariosParaVerPerfil />} />
                <Route path="HistorialClinicoPaciente">
                  <Route index element={<HistorialClinico />} />
                  <Route path="ActualizarHistorialClinico" element={<EditarHistoria />} />
                  
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
              <Route path="InicioPaciente">
                <Route index element={<IndexPersonal tochat="CanalSoporte" usuario="Medico" />} />
                <Route path="Buscar_Medicos_Para_Ver_Perfil">
                  <Route index element={<BuscarUsuariosParaVerPerfil />} />
                  <Route path="Citas" element={<Citas />} />
                </Route>
                <Route path="HistorialClinico">
                  <Route index element={<HistorialClinico />} />
                  <Route path="Citas" >
                    <Route index element={<Citas />} />
                    <Route path="RecetaMedica" element={<RecetaMedica />} />
                  </Route>
                </Route>
              </Route>


            </Route>
          </Route>

          <Route path="IniciarSesionPaciente">
            <Route index element={<LogIn toRegistrar="RegistrarPaciente" />} />
            <Route path="RegistrarPaciente" element={<SignOut toIniciar="/IniciarSesionPaciente" />} />
            <Route path="OldPassword" element={<OldPassword />} />
            <Route path="InicioPaciente">
              <Route index element={<IndexPersonal tochat="CanalSoporte" usuario="Medico" />} />
              <Route path="Buscar_Medicos_Para_Ver_Perfil">
                <Route index element={<BuscarUsuariosParaVerPerfil />} />
                <Route path="Citas" element={<Citas />} />
              </Route>
              <Route path="HistorialClinico">
                <Route index element={<HistorialClinico />} />
                <Route path="Citas" >
                  <Route index element={<Citas />} />
                  <Route path="RecetaMedica" element={<RecetaMedica />} />
                </Route>
              </Route>

            </Route>


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
