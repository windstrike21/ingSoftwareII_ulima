import React from 'react';
import '../css/App.css'

const Medicamento = (props) => {
    return (
        
        <div className="mb-2 card text-white" id={props.color}>

            <div className="row justify-content-center ">
              <div className="col-3">
                 {props.medicamento}
              </div>
              <div className="col-3">
                 {props.frecuencia}
              </div>
              <div className="col-3">
                 {props.duracion}
              </div>
              <div className="col-3">
                 {props.unidades}
              </div>
            </div>
        </div>
    )
}
export default Medicamento;