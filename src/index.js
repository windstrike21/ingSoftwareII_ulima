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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Principal />} />
          <Route path="LogInPaciente">
            <Route index element={<LogInPaciente />} />
            <Route path="Actualizar_hoja_filiacion" element={<Actualizar_hoja_filiacion />} />
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
