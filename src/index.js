import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import Header from "./Components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./Components/Personal/Carousel";
import ContenidoInferior from "./Components/Personal/ContenidoInferior";
=======
import Header from './Components/header';
import Rutas from "./Rutas/Rutas";

>>>>>>> 060f520a121de154edb769c7c69b75b43670654c

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Router>
      
        <Header />
      
    </Router>
    <div className="px-4 py-3">
      <div className="row py-2 bg-light">
        <div className="col-2"></div>
        <div className="col-8">
          <h1 className="text-center mt-2 mb-4">Bienvenido @getusername</h1>
          <Carousel />
          <br />
          <h2 className="text-center mt-3 mb-4">Texto de relleno para la página principal...</h2>
          <ContenidoInferior />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
=======
    <Rutas/>
    
>>>>>>> 060f520a121de154edb769c7c69b75b43670654c
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
