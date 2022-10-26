import React from 'react'

import { Link } from 'react-router-dom'
import { Dropdown } from 'bootstrap'

const Header = (props) => {
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
                            {`${props.usuario}s`}
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to={`Buscar_${props.usuario}s_Para_Ver_Perfil`} state={{usuario:props.usuario,tipo:props.tipo}}>Consultar</Link></li>
                            <li><Link className="dropdown-item" to="HistorialClinico" state={{id_usuario:1,tipo:props.tipo,usuario:props.usuario}}>Historia clínica</Link></li>
                            <li><Link className="dropdown-item" to="Afiliados" >Afiliados </Link></li>
                        </ul>
                    </li>
                                          
                </ul>        
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={props.tochat} state={{id:props.id,tipo:props.tipo}} >¿Necesitas Ayuda?</Link>                        
                    </li>  
                    <Link className="navbar-brand" to="#">Perfil</Link>   
                </ul>                         
            </div>
            
        </div>
    </nav>
    )
}
export default Header;