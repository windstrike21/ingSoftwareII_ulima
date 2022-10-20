import React from "react";
import '../css/estiloMenu.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import EditarDatosPaciente from '../Paginas/Pacientes/EditarDatosPaciente';
import PerfilClinico from "../Paginas/Pacientes/PerfilClinico";

const RutasMenu = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path = "Pacientes">
            <Route index element ={<EditarDatosPaciente/>}/>
            <Route index element ={<PerfilClinico/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}


const MenuDesp = () => {
    return(
                <body>
            <nav class="nav">
                <ul class="list">

                    <li class="list__item">
                        <div class="list__button">
                            <img src="assets/dashboard.svg" class="list__img"/>
                            <a href="EditarDatosPaciente" class="nav__link">Editar Datos</a>
                        </div>
                    </li>


                    <li class="list__item">
                        <div class="list__button">
                            <img src="assets/stats.svg" class="list__img"/>
                            <a href="PerfilClinico" class="nav__link">Perfil clinico</a>
                        </div>
                    </li>


                    <li class="list__item">
                        <div class="list__button">
                            <img src="assets/message.svg" class="list__img"/>
                            <a href="#" class="nav__link">Receta medica</a>
                        </div>
                    </li>

                </ul>
            </nav>
        </body>
    );
}
export default MenuDesp
