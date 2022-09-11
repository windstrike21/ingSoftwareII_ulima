import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
const EditarHistoria = () => {
    return (
        <div className="container m-4 p-4">
            
            <h3>Editar Historia: Juan Perez</h3>
            <br></br>
            <div className="container mb-1">
                
                <div className="form-group">
                    <label className="form-label">Fecha: </label>
                    <input type="text" readOnly value='30/08/22' className="form-control"></input>
                </div>

                <div className="form-group">
                    <label className="form-label">Doctor: </label>
                    <input type="text" readOnly value='Juan Perez' className="form-control"></input>
                </div>

                <div className="form-group">
                    <label className="form-label">Especialidad: </label>
                    <input type="text" readOnly value='Traumatología' className="form-control"></input>
                </div>

                <div className="form-group">
                    <label className="form-label">Modificar descripción: </label>
                    <textarea type="text" className="form-control" readOnly value='Esguince de segundo grado de dedo índice de la mano derecha.'></textarea>
                </div>
                
            </div>
            
        <br></br>

        <div className="row">
            <div className="col">
                <button type="button" className="btn btn-light" >Editar Historia</button>
            </div>
            <div className="col">
                <button type="button" className="btn btn-light" >Cancelar</button>
            </div>
        </div>
            
        </div>
    )
}
export default EditarHistoria;