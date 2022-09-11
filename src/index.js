import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";


import Principal from "./Paginas/Principal";
import ActualizarHojaFiliacion from "./Paginas/Personal/Actualizar hoja filiacion";
import IndexPersonal from "./Paginas/Personal/indexPersonal"
import BuscarPacientesParaVerPerfil from "./Paginas/Personal/Buscar pacientes para ver perfil";

import LogIn from "./Componentes/LogIn";
import HistorialClinico from "./Paginas/Personal/HistorialClinico";
import EditarHistoria from "./Paginas/Personal/EditarHistoria";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Principal/>} />
          {/* Rutas para personal */}
          <Route path="IniciarSesionPersonal"> 
            <Route index element={<LogIn/>} /> 
            <Route path="InicioPersonal" >
              <Route index element={<IndexPersonal />}/>
              <Route path="Buscar_pacientes_para_ver_perfil">
                <Route index element={<BuscarPacientesParaVerPerfil/>}/>
                <Route path="GestionarHojaClinica">
                  <Route index element={<HistorialClinico/>}/>
                  <Route path="ActualizarHistorialClinico" element={<EditarHistoria/>}/>
                </Route>
              </Route>
              <Route path="Afiliados">
                <Route index element={<}/>
              </Route>  
            </Route>
          </Route>
          {/* Rutas para pacientes */}

          {/* Rutas para administrador */}

          {/* Rutas para medico */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
