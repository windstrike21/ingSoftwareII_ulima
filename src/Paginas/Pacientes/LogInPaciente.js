import { render } from '@testing-library/react';
import React, {Component, useState, DropdownItem, DropdownMenu, DropdownToggle} from 'react';
import '../../css/LogIn.css';
import {Dropdown} from 'bootstrap';


const LogInPaciente = () => {

  const [doc, setCar] =useState("selectDoc");

  const handleOnChange =(event) =>{
    setCar(event.target);
  }

  const makeFirstLetterCapital =(str) => {
    return str.charAt(0).toUpperCase() + str.slide(1);
  }

  return (
  
  <body className='logpaciente'>
    <div className='container rounded-4 '>
      <div class = "row align-items-stretch px-5 ">
        <div class = "col d-lg-block col-md-5"></div>
          <h2 class ="titulo fw-bold py-4">Bienvenido</h2>
          <form action='#'>

            <div class="mb-4">
              <select className='form-select' value={doc} onChange = {handleOnChange}>
                <option value = "selectDoc">Tipo de documento</option>
                <option value = "selectDoc">DNI</option>
                <option value = "selectDoc">CARNET DE EXTRANJERIA</option>
                <option value = "selectDoc">PASAPORTE</option>
                <option value = "selectDoc">CARNET DE IDENTIDAD</option>
              </select>
            </div>

            <div class="mb-4">
              <input type="text" className='form-control' placeholder='Nro de documento'/>
            </div>

            <div class="mb-4">
              <input type="password" className='form-control' placeholder='Contraseña'/>
            </div>
            

            <div>
              <label> Código Captcha </label>
              <input type="password" className='form-control' placeholder='Código Captcha'/>
              <br></br>
            </div>

            <div class="d-grid">
              <botton type="submit" class="btn btn-primary"> INICIAR SESIÓN</botton>
            </div>

            <div class="my-3">
              <span><a href='#'>¿Olvidaste tu Contraseña?</a></span>
            </div>

            <div class="d-grid">
              <botton type="submit" class="btn btn-primary"> Registrate ahora</botton>
            </div>

          </form>
      </div>
    </div>
  </body>
  );
}

export default LogInPaciente