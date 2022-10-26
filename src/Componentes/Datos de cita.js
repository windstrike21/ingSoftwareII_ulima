import Axios from 'axios';
import React, { useEffect, useState } from 'react';
const Datos_de_cita = (props) => {
    const [nombre, setNombre] = useState("")
    const [user, setUser] = useState("")
    useEffect(() => {
        if (props.usuario == "Paciente") {
            setUser("Medico")
            setNombre(props.doctor)

        } else if (props.usuario == "Medico") {
            setUser("Paciente")
            Axios.get(`http://localhost:5000/usuariosId/Paciente/${props.id_Paciente}`)
                .then(res => {

                    setNombre(res.data[0].nombres)
                }).catch(console.log)
        }

    }, [])
    return (
        <div>
            
            <div className="mb-2 card bg-dark text-white">
                
                <div className="row justify-content-center ">

                    <div className="col-md-5 ">
                        <label>Fecha: {props.fecha}</label><br></br>
                        <label>Especialidad: {props.especialidad}</label>
                    </div>
                    <div className="col-3 ">
                        <label>Hora: {props.hora}</label><br></br>
                        <label>{user}: {nombre}</label>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Datos_de_cita;