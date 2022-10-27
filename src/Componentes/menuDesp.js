import React from "react";
import '../css/estiloMenu.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditarDatosPaciente from '../Paginas/Pacientes/EditarDatosPaciente';
import PerfilClinico from "../Paginas/Pacientes/AgendarCita";
import logo from '../Imagenes/Personal/logo.png'


const MenuDesp = () => {
    return(
                <body>
            <nav class="nav">
                <ul class="list">

                    <img src="../Imagenes/Personal/logo.png" class="list__img"/>


                    <li class="list__item">
                        <div class="list__button">
                            <img src="assets/dashboard.svg" class="list__img"/>
                            <a href="EditarDatosPaciente" class="nav__link">Editar Datos</a>
                        </div>
                    </li>


                    <li class="list__item">
                        <div class="list__button">
                            <img src="assets/stats.svg" class="list__img"/>
                            <a href="AgendarCita" class="nav__link">Agendar cita</a>
                        </div>
                    </li>


                    <li class="list__item">
                        <div class="list__button">
                            <img src="assets/message.svg" class="list__img"/>
                            <a href="RecetaMedica" class="nav__link">Receta medica</a>
                        </div>
                    </li>

                </ul>
            </nav>
        </body>
    );
}
export default MenuDesp
