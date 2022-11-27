
import React, { useState } from 'react';
import '../css/LogIn.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';


const LogIn = (props) => {

  const location = useLocation();
  const navigate = useNavigate();

  const [body, setBody] = useState({
    num_documento: null,
    contraseña: null
  })
  const [errorUsuario,setErrorUsuario]=useState(false)

  const rutasIniciales = location.pathname.split("/")
  const indiceFinal = rutasIniciales.length - 1
  const rutarequerida = rutasIniciales[indiceFinal]
  const usuario = rutarequerida.slice(13)

  const handleChange = (event) => {

    const { name, value } = event.target
    setBody(prevBody => ({
      ...prevBody,
      [name]: value

    }))
  }
  const iniciarSesion=()=>{
    axios.post("/iniciarSesion",{
      id:body.num_documento,
      password:body.contraseña
    }).then(res => {
      
      console.log(res.data);
      if(res.data != null){
         navigate("Inicio" + usuario, { state: { id: res.data.id, tipo: usuario } })
      }else{
         setErrorUsuario(true)
      }

    }).catch(console.log)
    
  }
  console.log(usuario)

  return (

    <body className='logpaciente'>
      <div className='container1 rounded-4 '>
        <div class="row align-items-stretch px-5 ">
          <div class="col d-lg-block col-md-5"></div>
          <h2 class="titulo fw-bold py-4">Bienvenido</h2>
          <form action='#'>

            <div class="mb-4">
              <select className='form-select'>
                <option value="selectDoc">Tipo de documento</option>
                <option value="selectDoc">DNI</option>
                <option value="selectDoc">CARNET DE EXTRANJERIA</option>
                <option value="selectDoc">PASAPORTE</option>
                <option value="selectDoc">CARNET DE IDENTIDAD</option>
              </select>
            </div>

            <div class="mb-4">
              <input type="number" className='form-control' placeholder='Nro de documento'
                onChange={handleChange} name='num_documento' value={body.num_documento} />
            </div>

            <div class="mb-4">
              <input type="password" className='form-control' placeholder='Contraseña'
                onChange={handleChange} name='contraseña' value={body.contraseña} />
            </div>




            <div class="d-grid">
              <botton type="submit" class="btn btn-primary" onClick={iniciarSesion}> INICIAR SESIÓN</botton>
            </div>


            <div class="my-3">
              <span><Link to="OldPassword">¿Olvidaste tu Contraseña?</Link></span>
            </div>

            {location.state.registrar &&
              <div class="d-grid">
                <botton type="submit" class="btn btn-primary" onClick={() => navigate(props.toRegistrar)}> Registrate ahora </botton>
              </div>
            }
            {errorUsuario &&
               <div className='text-center mt-3'>
                 No existe usuario ingresado
               </div>
            }
          </form>
        </div>
      </div>
    </body>
  );
}

export default LogIn;