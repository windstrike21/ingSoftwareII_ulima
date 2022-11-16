import React from 'react';
import { useNavigate } from 'react-router-dom';
const InicioAlEditarMedicamentos = (props) => {

    return (

        <div className="card col">
            <div className="row mt-3">
                <div className="form-group col">{props.unidades}</div>
                <div className="form-group col">{props.duracion}</div>
            </div>
            <div className="row mt-3">
                <div className="form-group col">{props.diagnostico}</div>
            </div>
            <div className="row mt-3">
                <div className="form-group col">{props.frecuencia}</div>
            </div>

        </div>

    )
}
export default InicioAlEditarMedicamentos;