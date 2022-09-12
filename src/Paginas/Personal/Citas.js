import DatosDeCita from "../../Componentes/Datos de cita"
import Paginacion from "../../Componentes/Paginacion";
import React from 'react';
import { useLocation } from "react-router-dom";
const Citas =(props)=>{
    const location=useLocation()
    return(
        <div>
            <div className="container"><h3>Citas: {location.state.nombre}</h3></div>
            
            <div className="container mt-4">
               <DatosDeCita fecha="30/09/2022" especialidad="Traumatología" hora="10:00" doctor="Juan Perez" />
               <DatosDeCita fecha="30/09/2022" especialidad="Traumatología" hora="10:00" doctor="Juan Perez" /> 

            </div>
            <Paginacion/>
        </div>
    )
 }
 export default Citas;