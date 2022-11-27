
import React, { useEffect, useState } from 'react';
import '../css/LogIn.css';

import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignOut = (props) => {
  const location = useLocation();
  const rutasIniciales = location.pathname.split("/")
  const indiceFinal = rutasIniciales.length - 1
  const rutarequerida = rutasIniciales[indiceFinal]
  console.log(rutarequerida)
  const usuario = rutarequerida.slice(9)
  console.log(usuario)
  const navigate = useNavigate();
  const [body, setBody] = useState({
    num_documento: null,
    fecha_emision: null,
    nombre: null,
    email: null,
    contraseña: null,
    num_celular: null,
    tipo: usuario,
  })
  

  const handleChange = (event) => {

    const { name, value } = event.target
    setBody(prevBody => ({
      ...prevBody,
      [name]: value

    }))
  }
  const enviar = () => {
    let optionsEdad = document.getElementById('selectEdad')
    let edad = optionsEdad.value
    let optionsSexo = document.getElementById('selectSexo')
    let sexo = optionsSexo.value
    

    axios.post('/usuarios', {
      id: body.num_documento,
      fecha_emision: body.fecha_emision,
      nombre: body.nombre,
      edad: edad,
      sexo: sexo,
      email: body.email,
      password: body.contraseña,
      celular: body.num_celular,
      tipo: usuario,
      idAdministrador: location.state.idAdministrador
    }).then(res => {
      console.log("MIRA")
      console.log(res.data);

    }).catch(console.log)
    if(usuario != "Personal"){
        navigate(props.toIniciar, { state: { registrar: true } })
    }
  }
  console.log(body)


  



  // const makeFirstLetterCapital =(str) => {
  //   return str.charAt(0).toUpperCase() + str.slide(1);
  // }

  return (

    <body className='logpaciente'>
      <div className='container rounded-4 '>
        <div class="row align-items-stretch px-5 ">
          <div class="col d-lg-block col-md-5"></div>
          <h2 class="titulo fw-bold py-4">Ingresa tus datos</h2>
          <form action='#'>

            <div class="mb-4">
              <select className='form-select'>
                <option value="selectDoc" >Tipo de documento</option>
                <option value="selectDoc">DNI</option>
                <option value="selectDoc">CARNET DE EXTRANJERIA</option>
                <option value="selectDoc">PASAPORTE</option>
                <option value="selectDoc">CARNET DE IDENTIDAD</option>
              </select>
            </div>

            <div class="mb-4">
              <input type="text" onChange={handleChange} value={body.num_documento} name="num_documento" className='form-control' placeholder='Nro de documento' />
            </div>

            <div class="mb-4">
              <input onChange={handleChange} value={body.fecha_emision} name="fecha_emision" className='form-control' placeholder='Fecha de emisión del documento' />
            </div>

            <div>
              <div class="row">
                <div className="col-5">
                  <select className='form-select' id='selectEdad'>
                    <option name="edad">Mayor de edad</option>
                    <option name="edad">Menor de edad</option>
                  </select>
                </div>
                <div className="col-5">
                  <select className='form-select' id='selectSexo'>
                    <option name="sexo">Masculino</option>
                    <option name="sexo">Femenino</option>
                  </select>
                </div>

              </div>
              <br></br>
            </div>
            <div class="mb-4">
              <input className='form-control' onChange={handleChange} value={body.nombre} name="nombre" placeholder='Nombre' />
            </div>


            <div class="mb-4">
              <input onChange={handleChange} value={body.email} name="email" className='form-control' placeholder='Correo electronico' />
            </div>


            <div class="mb-4">
              <input onChange={handleChange} value={body.contraseña} name="contraseña" className='form-control' placeholder='Contraseña' />
            </div>
            <div class="mb-4">
              <input className='form-control' placeholder='Repita la contraseña' />
            </div>



            <div class="mb-4">
              <input onChange={handleChange} value={body.num_celular} name="num_celular" className='form-control' placeholder='Numero de celular ' />
            </div>

            <div class="d-grid">
              <botton class="btn btn-primary" onClick={enviar}> ENVIAR</botton>
            </div>
            <br></br>

          </form>
        </div>
      </div>
    </body>
  );
}

export default SignOut