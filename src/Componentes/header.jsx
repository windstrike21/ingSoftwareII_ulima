import React from 'react'

import { Link } from 'react-router-dom'
import { Dropdown } from 'bootstrap'

const Header = (props) => {
    return (

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
                        {(props.tipo == "Administrador") &&
                            <>
                                <li>
                                    <Link className="nav-link active" to="RegistrarPersonal" state={{ idAdministrador: props.id }}>RegistrarPersonal</Link>
                                </li>
                            </>
                        }
                        {props.tipo != "Administrador" &&
                            <li>
                                <Link className="nav-link active" aria-current="page" to={`Buscar_${props.usuario}s_Para_Ver_Perfil`} state={{ usuario: props.usuario, tipo: props.tipo,id:props.id }}>{`Consultar ${props.usuario}s`}</Link>
                            </li>
                        }
                        {props.tipo == "Medico" &&
                            <li>
                                <Link className="nav-link active" aria-current="page" to="Calendario">Calendario</Link>
                            </li>
                        }
                        {props.tipo == "Personal" &&
                            <>
                                <li>
                                    <Link className="nav-link active" aria-current="page" to={`Buscar_${props.usuario2}s_Para_Ver_Perfil`} state={{ usuario: props.usuario2, tipo: props.tipo }}>{`Consultar ${props.usuario2}s`}</Link>
                                </li>
                                <li>
                                    <Link className="nav-link active" aria-current="page" to="HistorialClinicoPaciente">Historial Clinico</Link>
                                </li>
                                <li>
                                    <Link className="nav-link active" aria-current="page" to="Afiliados">Afiliados</Link>
                                </li>
                            </>

                        }

                        {props.tipo == "Paciente" &&
                            <>
                                <li>
                                    <Link className="nav-link active" to="HistorialClinico" state={{ id_usuario: 1, tipo: props.tipo, usuario: props.usuario }}>Mi Historial Clínico</Link>
                                </li>
                                <li>
                                    <Link className="nav-link active" to="EditarDatosPaciente">Editar Perfil</Link>
                                </li>
                                <li>
                                    <Link className="nav-link active" to="AgendarCita">Agendar Cita</Link>
                                </li>
                            </>

                        }

                    </ul>
                    {(props.tipo == "Personal" || props.tipo == "Administrador") &&
                        <ul className="navbar-nav ms-auto">


                            <li className="nav-item">
                                <Link className="nav-link" to={props.tochat} state={{ id: props.id, idUsuario: 5, tipo: props.tipo }} >¿Necesitas Ayuda?</Link>
                            </li>



                            <Link className="navbar-brand" to="#">Perfil</Link>
                        </ul>

                    }

                </div>

            </div>
        </nav>
    )
}
export default Header;