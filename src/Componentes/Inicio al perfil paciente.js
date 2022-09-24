import logo_perfil_pac from "../Imagenes/Personal/logo_perfil_pac.jpg";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import '../css/App.css';
import Axios from "axios";
const InicioAlPerfilPaciente = (props) => {
    const navigate = useNavigate();
    const IrCitas =async()=>{
        const res=await Axios.get(`http://localhost:5000/usuarios/Paciente/${props.nombre}`)
        navigate("Citas",{state:{nombre:props.nombre,paciente_id:res.data[0].id}})
    }
  
    
    return (
        <div className="row mb-2">
            <img src={logo_perfil_pac} className="col-2" alt="" id="logo-perfil-pac"></img>

            <div className="col-10 " id="oval">
                <center className="container">
                    <div className="row mt-2">
                        <div className="col-5">
                            <label>Nombre: {props.nombre}</label><br></br>
                            <label className="mt-2">Codigo: {props.codigo}</label>
                        </div>
                        <div className="col-5 mt-2 ">
                            <button onClick={() => navigate("GestionarHojaClinica",{state:{nombre:props.nombre}})}>Historial clínico</button>
                            <button onClick={IrCitas} id="mov2d">Citas</button>
                        </div>
                    </div>
                </center>



            </div>
        </div>
    )
}
export default InicioAlPerfilPaciente;