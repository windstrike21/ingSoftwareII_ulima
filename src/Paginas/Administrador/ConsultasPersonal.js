
import axios from "axios"
import React, { useEffect, useState } from "react"
import InicioAlChatPersonal from "../../Componentes/InicioAlChatAreaPersonal"

const ConsultasPersonal = (props) => {
    const [usuariosPersonal,setUsuariosPersonal]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/usuarios/Personal")
        .then(res => {
            console.log("MIRA")
            console.log(res.data);
            setUsuariosPersonal(res.data)
        }).catch(console.log)
    },[])
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <h3 className="col-md-4">ConsultasPersonal</h3>
                    
                </div>

            </div>

            <div className="container mt-4">
                {usuariosPersonal.map((usuario)=>(
                    <InicioAlChatPersonal nombre={usuario.nombre} id={props.id}  idUsuario={usuario.id} tipo="Administrador"/>
                ))}
                
            </div>
        </div>
    )
}
export default ConsultasPersonal;