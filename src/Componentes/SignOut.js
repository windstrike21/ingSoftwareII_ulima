
import React, { useState } from 'react';
import '../css/LogIn.css';

import { useLocation, useNavigate } from 'react-router-dom';


const SignOut = (props) => {
  const location = useLocation();
  const rutasIniciales=location.pathname.split("/")
  const indiceFinal=rutasIniciales.length-1
  const rutarequerida=rutasIniciales[indiceFinal]
  const usuario=rutarequerida.slice(9)
  console.log(usuario)
  const navigate = useNavigate();
  const [body,setBody]=useState({
    num_documento:null,
    fecha_emision:null,
    edad:null,
    sexo:null,
    email:null,
    contraseña:null,
    num_celular:null
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setBody(prevBody => ({
        ...prevBody,
        [name]: value

    }))
  }
  

  

  // const makeFirstLetterCapital =(str) => {
  //   return str.charAt(0).toUpperCase() + str.slide(1);
  // }

  return (
  
  <body className='logpaciente'>
    <div className='container rounded-4 '>
      <div class = "row align-items-stretch px-5 ">
        <div class = "col d-lg-block col-md-5"></div>
          <h2 class ="titulo fw-bold py-4">Ingresa tus datos</h2>
          <form action='#'>

            <div class="mb-4">
              <select className='form-select'>
                <option value = "selectDoc" >Tipo de documento</option>
                <option value = "selectDoc">DNI</option>
                <option value = "selectDoc">CARNET DE EXTRANJERIA</option>
                <option value = "selectDoc">PASAPORTE</option>
                <option value = "selectDoc">CARNET DE IDENTIDAD</option>
              </select>
            </div>

            <div class="mb-4">
              <input type="text" onChange={handleChange} value={body.num_documento} className='form-control' placeholder='Nro de documento'/>
            </div>

            <div class="mb-4">
              <input type="password" onChange={handleChange} value={body.fecha_emision} className='form-control' placeholder='Fecha de emisión del documento'/>
            </div>

            <div>
              <div class="row">
                <div class ="col-5">
                  <select className='form-select' >
                    <option onChange={handleChange} value={body.edad}>Mayor de edad</option>
                    <option onChange={handleChange} value={body.edad}>Menor de edad</option>
                  </select>
                </div>
                <div class ="col-5">
                  <select className='form-select' >
                    <option value = "selectDoc">Genero</option>
                    <option onChange={handleChange} value={body.sexo}>Masculino</option>
                    <option onChange={handleChange} value={body.sexo}>Femenino</option>
                  </select>
                </div>
              </div>
              <br></br>
            </div>

            <div class="mb-4">
              <input type="password"onChange={handleChange} value={body.email} className='form-control' placeholder='Correo electronico'/>
            </div>


            <div class="mb-4">
              <input type="password" onChange={handleChange} value={body.contraseña} className='form-control' placeholder='Contraseña'/>
            </div>
            <div class="mb-4">
              <input type="password" className='form-control' placeholder='Repita la contraseña'/>
            </div>



            <div class="mb-4">
              <input type="password" onChange={handleChange} value={body.num_celular} className='form-control' placeholder='Numero de celular '/>
            </div>

            <div class="d-grid">
              <botton type="submit" class="btn btn-primary" onClick={()=>navigate(props.toIniciar,{state:{registrar:true}})}> ENVIAR</botton>
            </div>
            <br></br>

          </form>
      </div>
    </div>
  </body>
  );
}

export default SignOut