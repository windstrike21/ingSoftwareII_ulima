import { render } from '@testing-library/react';
import React, {Component} from 'react';

const LogInPaciente = () => {
  return (
      <div className='coutainerPrincipal'>
        <div className='containerSecundario'>
          <div className='form-group'>

            <label> Tipo documento</label>
            <br/>
            <input type="text" className='form-control'/>
            <br/>

            <label> Nro de documento</label>
            <br/>
            <input type="text" className='form-control'/>
            <br/>

            <label> Contraseña </label>
            <br/>
            <input type="password" className='form-control'/>
            <br/>

            <label> Código Captcha </label>
            <br/>

            <label> Código Captcha </label>
            <br/>
            <input type="password" className='form-control'/>
            <br/>

            <botton className = "btn btn-primary"> Iniciar Sesión</botton>
            <br/>
            <label> ¿Olvidaste tu contraseña? </label>
            <br/>

            <botton className = "btn btn-primary"> Iniciar Sesión</botton>

          </div>
        </div>
      </div>
  );
}

export default LogInPaciente