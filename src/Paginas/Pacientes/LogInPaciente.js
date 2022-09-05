import { render } from '@testing-library/react';
import React, {Component} from 'react';
import '../../css/LogIn.css';

const LogInPaciente = () => {
  return (
      <div className='containerPrincipal'>
        <div className='containerSecundario'>
          <div className='form-group'>

            <h1 className='titulo'>Bienvenido</h1>

            <input type="text" className='form-control' placeholder='Tipo documento'/>

            <br/>
            <input type="text" className='form-control' placeholder='Nro de documento'/>

            <br/>
            <input type="password" className='form-control' placeholder='Contraseña'/>
            <br/>

            <label> Código Captcha </label>
            <br/>


            <br/>
            <input type="password" className='form-control' placeholder='Código Captcha'/>
            <br/>

            <botton className = "btn btn-primary"> Iniciar Sesión</botton>
            <br/>
            <br/>
            <label> ¿Olvidaste tu contraseña? </label>
            <br/>
            <botton className = "btn btn-primary"> Registrate</botton>
            
          </div>
        </div>
      </div>
  );
}

export default LogInPaciente