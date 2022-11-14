import InicioAlPerfilPaciente from "./Inicio al perfil paciente";
import React, { useEffect, useState } from "react"
import Axios from "axios";
import { useLocation } from "react-router-dom";
import HorarioAtencion from "./HorarioAtencion";
const BuscarUsuariosParaVerPerfil = (props) => {
    const location = useLocation();
    const [datosPac, setDatosPac] = useState([])
    const [mostraTodos, setMostrarTodos] = useState(true)

    useEffect(() => {
        if (mostraTodos) {
            Axios.get(`/usuarios/${location.state.usuario}`)
                .then(res => {

                    setDatosPac(res.data)
                    setMostrarTodos(false)
                }).catch(console.log)
        }

    }, [mostraTodos])
    const obtenerPaciente = (event) => {
        if (event.target.value == "") {
            setMostrarTodos(true)
        } else {
            const valor = Number(event.target.value)
            console.log(valor)
            if (Number.isNaN(valor)) {
                
                Axios.get(`/usuariosNombre/${location.state.usuario}/${event.target.value}`)
                    .then(res => {

                        setDatosPac(res.data)
                    }).catch(console.log)
            } else {
                
                Axios.get(`/usuariosId/${location.state.usuario}/${event.target.value}`)
                    .then(res => {

                        setDatosPac(res.data)
                    }).catch(console.log)
            }

        }

    }


    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <h3 className="col-md-4">{`${location.state.usuario}s`}</h3>
                    <input onChange={obtenerPaciente} placeholder="Buscar Paciente..." className="col-8"></input>
                </div>

            </div>

            <div className="container mt-4">
                {datosPac.map((datos) => (
                    <div>
                        <InicioAlPerfilPaciente datos={datos} codigo="002001902" usuario={location.state.usuario} tipo={location.state.tipo} />

                    </div>

                ))}

            </div>
        </div>
    )
}
export default BuscarUsuariosParaVerPerfil;