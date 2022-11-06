
import './App.css';

import React from "react"

import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from "./Paginas/Principal";
import Index from "./Componentes"
import BuscarUsuariosParaVerPerfil from "./Componentes/Buscar usuarios para ver perfil";

import LogIn from "./Componentes/LogIn";


import RegistroPersonal from "./Paginas/Personal/RegistroPorPersonal";
import CanalSoporte from "./Paginas/Personal/canalSoporte";
import Citas from "./Paginas/Personal/Citas";
import SignOut from "./Componentes/SignOut";

import OldPassword from "./Componentes/OldContraseña";

import EditarHoja from "./Paginas/Personal/EditarHoja";

import ConsultasPersonal from "./Paginas/Administrador/ConsultasPersonal";

import Pagar from './Paginas/Pacientes/HacerPago'



import RecetaMedica from './Paginas/Pacientes/Receta Medica';
import EditarHistoria from './Componentes/EditarHistoria';
import HistorialClinico from './Componentes/HistorialClinico';
import ComprarMedicamento from './Paginas/Pacientes/comprarMedicamento';
import EditarDatosPaciente from './Paginas/Pacientes/EditarDatosPaciente';
import AgendarCita from './Paginas/Pacientes/AgendarCita';
import CitaAgendada from './Paginas/Pacientes/CitaAgendada';

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
              <Route index element={<Index tochat="CanalSoporte" usuario="Paciente" />} />
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
                <Route index element={<Index tochat="CanalSoporte" usuario="Medico" />} />
                <Route path="Buscar_Medicos_Para_Ver_Perfil">
                  <Route index element={<BuscarUsuariosParaVerPerfil />} />
                  <Route path="Citas" element={<Citas />} />
                </Route>
                <Route path="HistorialClinico">
                  <Route index element={<HistorialClinico />} />
                  <Route path="Citas" >
                    <Route index element={<Citas />} />
                    <Route path="RecetaMedica">
                      <Route index element={<RecetaMedica />} />
                      <Route path="comprarMedicamento" element={<ComprarMedicamento />} />
                    </Route>
                  </Route>
                </Route>
                <Route path="EditarDatosPaciente" element={<EditarDatosPaciente />} />
                <Route path="AgendarCita" >
                  <Route index element={<AgendarCita />} />
                  <Route path="CitaAgendada">
                    <Route index element={<CitaAgendada />} />
                    <Route path="Pagar" element={<Pagar />} />
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
              <Route index element={<Index tochat="CanalSoporte" usuario="Medico" />} />
              <Route path="Buscar_Medicos_Para_Ver_Perfil">
                <Route index element={<BuscarUsuariosParaVerPerfil />} />
                <Route path="Citas" element={<Citas />} />
              </Route>
              <Route path="HistorialClinico">
                <Route index element={<HistorialClinico />} />
                <Route path="Citas" >
                  <Route index element={<Citas />} />
                  <Route path="RecetaMedica">
                    <Route index element={<RecetaMedica />} />
                    <Route path="comprarMedicamento" element={<ComprarMedicamento />} />
                  </Route>
                </Route>
              </Route>
              <Route path="EditarDatosPaciente" element={<EditarDatosPaciente />} />
              <Route path="AgendarCita" >
                <Route index element={<AgendarCita />} />
                <Route path="CitaAgendada">
                  <Route index element={<CitaAgendada />} />
                  <Route path="Pagar" element={<Pagar />} />
                </Route>
              </Route>
            </Route>


          </Route>
          {/* Rutas para administrador */}
          <Route path="IniciarSesionAdministrador">
            <Route index element={<LogIn />} />
            <Route path="OldPassword" element={<OldPassword />} />
            <Route path="InicioAdministrador">
              <Route index element={<Index tochat="ConsultasPersonal" />} />
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
              <Route path="InicioMedico">
                <Route index element={<Index tochat="CanalSoporte" usuario="Paciente" />} />
                <Route path="Buscar_Pacientes_Para_Ver_Perfil">
                  <Route index element={<BuscarUsuariosParaVerPerfil />} />
                  <Route path="HistorialClinicoPaciente">
                    <Route index element={<HistorialClinico />} />
                    <Route path="ActualizarHistorialClinico" element={<EditarHistoria />} />

                  </Route>
                  <Route path="Citas" element={<Citas />} />
                </Route>
              </Route>
            </Route>
          </Route>

          <Route path="IniciarSesionMedico">
            <Route index element={<LogIn toRegistrar="RegistrarMedico" />} />
            <Route path="RegistrarMedico" element={<SignOut toIniciar="/IniciarSesionMedico" />} />
            <Route path="OldPassword" element={<OldPassword />} />
            <Route path="InicioMedico">
              <Route index element={<Index tochat="CanalSoporte" usuario="Paciente" />} />
              <Route path="Buscar_Pacientes_Para_Ver_Perfil">
                <Route index element={<BuscarUsuariosParaVerPerfil />} />
                <Route path="HistorialClinicoPaciente">
                  <Route index element={<HistorialClinico />} />
                  <Route path="ActualizarHistorialClinico" element={<EditarHistoria />} />

                </Route>
                <Route path="Citas" element={<Citas />} />
              </Route>
            </Route>

          </Route>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
