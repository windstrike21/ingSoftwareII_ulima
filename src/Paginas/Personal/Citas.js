import DatosDeCita from "../../Componentes/Datos de cita"
import Paginacion from "../../Componentes/Paginacion";
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
const Citas = () => {
    const location = useLocation()
    const navigate=useNavigate()
    const [citasPac, setCitasPac] = useState([]);
    console.log("id_usuario:")
    console.log(location.state.id_usuario)
    console.log("usuario:")
    console.log(location.state.usuario)
    useEffect(() => {
        Axios.get(`http://localhost:5000/citas/${location.state.usuario}/${location.state.id_usuario}`)
            .then(res => {
                console.log("MIRA")
                console.log(res.data);
                setCitasPac(res.data)
            }).catch(console.log)
    }, [])
    return (
        <div>
            <div className="container"><h3>Citas{location.state.tipo == "Personal" && `: ${location.state.nombre}`}</h3></div>

            <div className="container mt-4">
                {citasPac.map((cita) => (
                    <div>
                        {location.state.usuario == location.state.tipo && <button onClick={()=>navigate("RecetaMedica",{state:{CitaId:cita.id}})}>Receta medica</button>}
                        <DatosDeCita doctor={cita.doctor} fecha={cita.fecha} especialidad={cita.especialidad} hora={cita.hora} id_Paciente={cita.id_Paciente} id_Medico={cita.id_Medico} tipo={location.state.tipo} usuario={location.state.usuario} />
                    </div>          
                ))}
            </div>
            <Paginacion />
        </div>
    )
}
export default Citas;