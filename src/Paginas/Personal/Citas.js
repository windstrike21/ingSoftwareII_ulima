import DatosDeCita from "../../Componentes/Datos de cita"
import Paginacion from "../../Componentes/Paginacion";
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import  Axios  from "axios";
const Citas =()=>{
    const location=useLocation()
    const [citasPac,setCitasPac]=useState([]);
    console.log(location.state.paciente_id)
    useEffect(()=>{
        Axios.get(`https://ulimasoftwareiibackend-production.up.railway.app/citas/Paciente/${location.state.paciente_id}`)
        .then(res => {
            console.log("MIRA")
            console.log(res.data);
            setCitasPac(res.data)
        }).catch(console.log)
    },[])
    return(
        <div>
            <div className="container"><h3>Citas: {location.state.nombre}</h3></div>
            
            <div className="container mt-4">
                {citasPac.map((cita)=>(
                    <DatosDeCita fecha={cita.fecha} especialidad={cita.especialidad} hora={cita.hora} doctor={cita.doctor} />
                ))}
            </div>
            <Paginacion/>
        </div>
    )
 }
 export default Citas;