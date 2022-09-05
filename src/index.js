import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./Components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import indexPersonal from "./Paginas/Personal/canalSoporte";
import ChatArea from "./Components/Personal/ChatArea";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Router>
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
    <Header />
>>>>>>> 2fa99ab8f512883d27b5c7c4c09905a4c96122be
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
