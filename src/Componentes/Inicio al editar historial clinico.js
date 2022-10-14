import React from 'react';
import { useNavigate } from 'react-router-dom';
const InicioAlEditarHistorialClinico = (props) => {
    const navigate = useNavigate()
    
    return (
        
            <div className="card col">
                <div className="row mt-3">
                    <div className="form-group col">Fecha: {props.fecha}</div>
                    <div className="form-group col">Especialidad: {props.especialidad}</div>
                    <div className="form-group col">Doctor: {props.doctor}</div>
                </div>
                <div className="row mt-3">
                    <div className="form-group col">Molestias en el ojo derecho</div>
                </div>
                <div className="row mt-3">
                    <div className="form-group col">
                        <button type="button" className="btn btn-light" onClick={()=>navigate("ActualizarHistorialClinico",{state:{nombre:props.nombre,fecha:props.fecha,especialidad:props.especialidad,doctor:props.doctor,cita_id:props.cita_id}})}>
                            Editar
                        </button>
                    </div>
                </div>
            </div>
        
    )
}
export default InicioAlEditarHistorialClinico;