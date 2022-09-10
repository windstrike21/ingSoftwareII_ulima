import { render } from '@testing-library/react';
import React, {Component, useState, DropdownItem, DropdownMenu, DropdownToggle} from 'react';
import '../../css/LogIn.css';
import {Dropdown} from 'bootstrap';

const OldContraseña = () =>{
  return (
  
    <body className='logpaciente'>
      <div className='container rounded-4 '>
        <div class = "row align-items-stretch px-5 ">
          <div class = "col d-lg-block col-md-5"></div>
            <h2 class ="titulo fw-bold py-4 text-center">Olvidaste tu Contraseña</h2>
            <form action='#'>
    
              <p class="text-white text-center">
              Escribe tu dirección de correo electrónico y te enviaremos
              un enlace para que puedas cambiar su contraseña.
              </p>
              <br></br>
  
              <div class="mb-4">
                <input type="password" className='form-control' placeholder='Correo electronico'/>
              </div>

              <p class="text-white">
              Codigo Captcha
              </p>

              <div class="mb-4">
                <input type="password" className='form-control' placeholder='Codigo Captcha'/>
              </div>
  
              <div class="d-grid">
                <botton type="submit" class="btn btn-primary"> ENVIAR</botton>
              </div>
              <br></br>
  
            </form>
        </div>
      </div>
    </body>
    );
  }

export default OldContraseña