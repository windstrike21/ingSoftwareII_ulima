import InicioAlEditarHistorialClinico from "./Inicio al editar historial clinico"
import React from 'react';
const FilaEditarHistorialClinico = (props) => {
    return (
        <div className="row mt-3">
            <InicioAlEditarHistorialClinico nombre={props.nombre}/>
            <InicioAlEditarHistorialClinico nombre={props.nombre}/>
            <InicioAlEditarHistorialClinico nombre={props.nombre}/>
        </div>
    )
}
export default FilaEditarHistorialClinico;