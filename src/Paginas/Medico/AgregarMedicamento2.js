import React from "react"
import 'bootstrap/dist/css/bootstrap.css'

export default function AgregarMedicamento2() {
    return (
        <div className="container m-4 p-4">
            
        <h3>Agregar Medicamento: </h3>
        <br></br>
        <div className="container mb-1">
            
            <div className="form-group">
                <label className="form-label">Medicamento: </label>
                <input type="text" placeholder='Agregue un medicamento' className="form-control" name="medicamento"></input>
            </div>

            <div className="form-group">
                <label className="form-label">Cantidad: </label>
                <input type="text" placeholder='Agregue la cantidad' className="form-control" name="cant"></input>
            </div>

            <div className="form-group">
                <label className="form-label">Duración: </label>
                <input type="text" placeholder='Agregue la duración' className="form-control" name="duracion"></input>
            </div>

            <div className="form-group">
                <label className="form-label">Frecuencia: </label>
                <input type="text" placeholder='Agregue la frecuencia' className="form-control" name="frec"></input>
            </div>
        </div>

        <br></br>

        <div className="row">
            <div className="col">
                <button type="button" className="btn btn-light">Agregar Medicamento</button>
            </div>
            <div className="col">
                <button type="button" className="btn btn-light" >Cancelar</button>
            </div>
        </div>
        
    </div>
    )
}