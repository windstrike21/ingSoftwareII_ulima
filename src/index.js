import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Componentes/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogInPaciente from "./Paginas/Paciente/LogInPaciente";
import Principal from "./Paginas/Principal";
import Actualizar_hoja_filiacion from "./Paginas/Personal/Actualizar hoja filiacion";
import indexPersonal from "./Paginas/Personal/indexPersonal"
import Buscar_pacientes_para_ver_perfil from "./Paginas/Personal/Buscar pacientes para ver perfil";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Principal />} />
          {/* Rutas para personal */}
          <Route path="nombre del archivo iniciar sesion del personal"> 
            <Route index element={<mismo nombre de arriba/>} /> 
            <Route path="indexPersonal" >
              <Route index element={<indexPersonal />}/>
              <Route path="Buscar_pacientes_para_ver_perfil">
                <Route index element={<Buscar_pacientes_para_ver_perfil/>}/>
                <Route path="nombre del archivo gestionar hoja filiacion">
                  <Route index element={<mismo nombre de arriba/>}/>
                  <Route path="Actualizar_hoja_filiacion" element={<Actualizar_hoja_filiacion/>}/>
                </Route>
              </Route>
              
            </Route>
          </Route>
          {/* Rutas para pacientes */}

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
