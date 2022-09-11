import React from 'react'

import { Link } from 'react-router-dom'
import { Dropdown } from 'bootstrap'

const Header = () => {
    return( 
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">Logo</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item mx-2">
                        <Link className="nav-link active" aria-current="page" to="#">Inicio</Link>
                    </li>
                    <li className="nav-item dropdown mx-1">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pacientes
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="Buscar_pacientes_para_ver_perfil">Consultar</Link></li>
                            <li><Link className="dropdown-item" to="#">Historia clínica</Link></li>
                            <li><Link className="dropdown-item" to=" ">Afiliados</Link></li>
                        </ul>
                    </li>
                                          
                </ul>        
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="#">¿Necesitas Ayuda?</Link>                        
                    </li>  
                    <Link className="navbar-brand" to="#">Perfil</Link>   
                </ul>                         
            </div>
            
        </div>
    </nav>
    )
}
export default Header;