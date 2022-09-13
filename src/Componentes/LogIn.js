
import React, { useState } from 'react';
import '../css/LogIn.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'


const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [doc, setCar] = useState("selectDoc");

  const handleOnChange = (event) => {
    setCar(event.target);
  }
  
  return (

    <body className='logpaciente'>
      <div className='container1 rounded-4 '>
        <div class="row align-items-stretch px-5 ">
          <div class="col d-lg-block col-md-5"></div>
          <h2 class="titulo fw-bold py-4">Bienvenido</h2>
          <form action='#'>

            <div class="mb-4">
              <select className='form-select' value={doc} onChange={handleOnChange}>
                <option value="selectDoc">Tipo de documento</option>
                <option value="selectDoc">DNI</option>
                <option value="selectDoc">CARNET DE EXTRANJERIA</option>
                <option value="selectDoc">PASAPORTE</option>
                <option value="selectDoc">CARNET DE IDENTIDAD</option>
              </select>
            </div>

            <div class="mb-4">
              <input type="text" className='form-control' placeholder='Nro de documento' />
            </div>

            <div class="mb-4">
              <input type="password" className='form-control' placeholder='Contraseña' />
            </div>


            <div>
              <label> Código Captcha </label>
              <input type="password" className='form-control' placeholder='Código Captcha' />
              <br></br>
            </div>

            <div class="d-grid">
              <botton type="submit" class="btn btn-primary" onClick={() => navigate("Inicio"+location.pathname.slice(14))}> INICIAR SESIÓN</botton>
            </div>

            <div class="my-3">
              <span><Link to="">¿Olvidaste tu Contraseña?</Link></span>
            </div>
            
            {location.state.registrar &&
              <div class="d-grid">
                <botton type="submit" class="btn btn-primary"> Registrate ahora </botton>
              </div>
            }










          </form>
        </div>
      </div>
    </body>
  );
}

export default LogIn;