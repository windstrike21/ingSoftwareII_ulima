import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import Header from "./Components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatArea from "./Components/Personal/ChatArea"
=======
>>>>>>> 6b04ea1b85a468c4f002acc9cbf3cb98b78c8fcb

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Principal from "./Paginas/Principal";
import ActualizarHojaFiliacion from "./Paginas/Personal/Actualizar hoja filiacion";
import indexPersonal from "./Paginas/Personal/indexPersonal"
import BuscarPacientesParaVerPerfil from "./Paginas/Personal/Buscar pacientes para ver perfil";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
<<<<<<< HEAD
      <Header />
    </Router>
    <div className="px-4 py-3">
      <div className="row py-2 bg-light">
        <h3 className="text-center mt-2 mb-3"><b>Chatea con soporte técnico</b></h3>
        <div className="col-2"></div>
        <div className="col-8 bg-white rounded-4 border border-secondary shadow">
          <ChatArea />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
=======
      <Routes>
        <Route path="/">
          <Route index element={<Principal/>} />
          {/* Rutas para personal */}
          <Route path="nombre del archivo iniciar sesion del personal"> 
            <Route index element={<mismo nombre de arriba/>} /> 
            <Route path="indexPersonal" >
              <Route index element={<indexPersonal />}/>
              <Route path="Buscar_pacientes_para_ver_perfil">
                <Route index element={<BuscarPacientesParaVerPerfil/>}/>
                <Route path="nombre del archivo gestionar hoja filiacion">
                  <Route index element={<mismo nombre de arriba/>}/>
                  <Route path="Actualizar_hoja_filiacion" element={<ActualizarHojaFiliacion/>}/>
                </Route>
              </Route>
              
            </Route>
          </Route>
          {/* Rutas para pacientes */}

          {/* Rutas para medico */}
        </Route>
      </Routes>
    </Router>
>>>>>>> 6b04ea1b85a468c4f002acc9cbf3cb98b78c8fcb
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
