import InicioAlEditarMedicamentos from "./InicioAlEditarMedicamentos"
import React from 'react';
const FilaEditarMedicamentos = (props) => {
    return (
        <div className="row mt-3">
            {
                props.tresMedicamentos.map((medicamento)=>(
                    <InicioAlEditarMedicamentos medicamento={props.medicamento} unidades={medicamento.unidades} frecuencia={medicamento.frecuencia} duracion={medicamento.duracion}/>
                ))
            }
            
        </div>
    )
}
export default FilaEditarMedicamentos;