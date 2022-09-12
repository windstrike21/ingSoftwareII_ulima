import React from 'react';
import { useNavigate } from 'react-router-dom';
const InicioAlEditarHistorialClinico = (props) => {
    const navigate = useNavigate()
    return (
        
            <div className="card col">
                <div className="row mt-3">
                    <div className="form-group col">Fecha: 06/04/2022</div>
                    <div className="form-group col">Especialidad: Oculista</div>
                    <div className="form-group col">Doctor: Juan Perez</div>
                </div>
                <div className="row mt-3">
                    <div className="form-group col">Molestias en el ojo derecho</div>
                </div>
                <div className="row mt-3">
                    <div className="form-group col">
                        <button type="button" className="btn btn-light" onClick={()=>navigate("ActualizarHistorialClinico",{state:{nombre:props.nombre}})}>
                            Editar
                        </button>
                    </div>
                </div>
            </div>
        
    )
}
export default InicioAlEditarHistorialClinico;