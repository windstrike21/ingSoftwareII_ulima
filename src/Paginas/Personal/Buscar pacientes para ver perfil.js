import InicioAlPerfilPaciente from "../../Componentes/Inicio al perfil paciente";
import React, { useEffect, useState } from "react"
import Axios from "axios";
const BuscarPacientesParaVerPerfil = (props) => {
    const [datosPac, setDatosPac] = useState([])
    useEffect(() => {
        Axios.get("http://localhost:5000/usuarios/Paciente")
            .then(res => {
                console.log("MIRA")
                console.log(res.data);
                setDatosPac(res.data)
            }).catch(console.log)
    }, [])
    const obtenerPaciente=(event)=>{
        Axios.get(`http://localhost:5000/usuarios/Paciente/${event.target.value}`)
        .then(res => {
            console.log("MIRA")
            console.log(res.data);
            setDatosPac(res.data)
        }).catch(console.log)
    }
    console.log(datosPac[1])
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <h3 className="col-md-4">Pacientes</h3>
                    <input onChange={obtenerPaciente} placeholder="Buscar Paciente..." className="col-8"></input>
                </div>

            </div>

            <div className="container mt-4">
                {datosPac.map((datos)=>(
                    <InicioAlPerfilPaciente nombre={datos.nombres} codigo="002001902" />
                ))}
                
            </div>
        </div>
    )
}
export default BuscarPacientesParaVerPerfil;