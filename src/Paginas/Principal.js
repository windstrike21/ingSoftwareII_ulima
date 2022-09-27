import medicos from '../Imagenes/Principal/medicos.jpg'
import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'bootstrap'

const Principal = (props) => {
  
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown mx-1">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Registrar
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="RegistrarPaciente">Como paciente</Link></li>
                  <li><Link className="dropdown-item" to="RegistrarMedico">Como medico</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown mx-1">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Iniciar Sesión
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="IniciarSesionPersonal" state={{registrar:false}} >Como personal</Link></li>
                  <li><Link className="dropdown-item" to="IniciarSesionPaciente" state={{registrar:true}}>Como paciente</Link></li>
                  <li><Link className="dropdown-item" to="IniciarSesionMedico" state={{registrar:true}}>Como medico</Link></li>
                  <li><Link className="dropdown-item" to="IniciarSesionAdministrador" state={{registrar:false}}>Como administrador</Link></li>
                  
                </ul>
              </li>
            </ul>
            
          </div>

        </div>
      </nav>
      
      
      <img src={medicos} alt="" width="100%"></img>
      {/* Personal:<br></br> */}
      {/* <Link to="nombre del componente inciar sesion del personal">Iniciar Sesion</Link> */}
      {/* Paciente:<br></br>
        
        Medico:<br></br>

        Administrador */}
    </div>
  );
}

export default Principal;