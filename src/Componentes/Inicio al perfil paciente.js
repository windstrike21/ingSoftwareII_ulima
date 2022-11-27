import logo_perfil_pac from "../Imagenes/Personal/logo_perfil_pac.jpg";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import '../css/App.css';
import Axios from "axios";
import HorarioAtencion from "./HorarioAtencion";
const InicioAlPerfilPaciente = (props) => {
    const navigate = useNavigate();
    const [mostrarHA, setMostrarHA] = useState(false)

    const IrCitas = async () => {
        navigate("Citas", { state: { nombre: props.datos.nombre, id_usuario: props.datos.id, usuario: props.usuario, tipo: props.tipo } })
    }
    const IrHistorialClinico = async () => {
        navigate("HistorialClinicoPaciente", { state: { nombre: props.datos.nombre, id_usuario: props.datos.id, usuario: props.usuario, tipo: props.tipo } })
    }
    const VerHorarioAtencion = () => {
        setMostrarHA(!mostrarHA)
    }


    return (
        <div>
            <div className="row mb-2">
                <img src={logo_perfil_pac} className="col-2" alt="" id="logo-perfil-pac"></img>
                <div className="col-10 " id="oval">
                    <center className="container">
                        <div className="row mt-2">
                            <div className="col-4">
                                <label>Nombre: {props.datos.nombre}</label><br></br>
                                <label className="mt-2">Codigo: {props.codigo}</label>
                            </div>
                            <div className="col-3 mt-2 ">
                                {(props.usuario == "Paciente" ?
                                    <button onClick={IrHistorialClinico}>Historial Clinico</button> :
                                    <button onClick={VerHorarioAtencion}>Horario de Atención</button>
                                )}
                                <button onClick={IrCitas} id="mov2d">Citas</button>

                            </div>
                            <div className="col-4 mt-2">
                                {props.usuario == "Paciente" &&
                                    <button  onClick={()=>navigate("AgregarMedicamento")}>AgregarMedicamento</button>
                                }
                            </div>

                        </div>
                    </center>



                </div>

            </div>
            {mostrarHA && <HorarioAtencion />}
        </div>
    )
}
export default InicioAlPerfilPaciente;