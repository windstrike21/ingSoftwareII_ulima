import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import "./App.css";


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


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Principal />} />
          {/* Rutas para personal */}
          <Route path="IniciarSesionPersonal">
            <Route index element={<LogIn />} />
            <Route path="InicioPersonal" >
              <Route index element={<IndexPersonal />} />
              <Route path="Buscar_pacientes_para_ver_perfil">
                <Route index element={<BuscarPacientesParaVerPerfil />} />
                <Route path="GestionarHojaClinica">
                  <Route index element={<HistorialClinico />} />
                  <Route path="ActualizarHistorialClinico" element={<EditarHistoria />} />
                  <Route path="AgregarHistoria" element={<AgregarHistoria/>}/>
                </Route>
                <Route path="Citas" element={<Citas />} />
              </Route>
              <Route path="Afiliados">
                <Route index element={<RegistroPersonal />} />
              </Route>
              <Route path="CanalSoporte" element={<CanalSoporte />} />
            </Route>
            <Route path="OldPassword" element={<OldPassword/>}/>
          </Route>
          {/* Rutas para pacientes */}
          <Route path="RegistrarPaciente">
            <Route index element={<SignOut toIniciar="IniciarSesionPaciente" />} />
            <Route path="IniciarSesionPaciente">
              <Route index element={<LogIn toRegistrar="/RegistrarPaciente" />}/>
              <Route path="OldPassword" element={<OldPassword/>}/>
            </Route>
          </Route>

          <Route path="IniciarSesionPaciente">
            <Route index element={<LogIn toRegistrar="RegistrarPaciente" />} />
            <Route path="RegistrarPaciente" element={<SignOut toIniciar="/IniciarSesionPaciente" />} />
            <Route path="OldPassword" element={<OldPassword/>}/>
          </Route>
          {/* Rutas para administrador */}
          <Route path="IniciarSesionAdministrador">
            <Route index element={<LogIn />}/>
            <Route path="OldPassword" element={<OldPassword/>}/>
          </Route>
          {/* Rutas para medico */}
          <Route path="RegistrarMedico">
            <Route index element={<SignOut toIniciar="IniciarSesionMedico" />} />
            <Route path="IniciarSesionMedico">
              <Route index element={<LogIn toRegistrar="/RegistrarMedico" />}/>
              <Route path="OldPassword" element={<OldPassword/>}/>
            </Route>
          </Route>

          <Route path="IniciarSesionMedico">
            <Route index element={<LogIn toRegistrar="RegistrarMedico" />} />
            <Route path="RegistrarMedico" element={<SignOut toIniciar="/IniciarSesionMedico" />} />
            <Route path="OldPassword" element={<OldPassword/>}/>

          </Route>

        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
