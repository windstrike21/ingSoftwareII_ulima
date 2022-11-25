import React from "react"
import 'bootstrap/dist/css/bootstrap.css'

export default function EditarDatosPaciente() {
    return (
        <div className="container m-4 p-4">
            
        <h3>Editar Datos: </h3>
        <br></br>
        <div className="container mb-1">
            
            <div className="form-group">
                <label className="form-label">Nombres: </label>
                <input type="text" className="form-control" name="nombre"></input>
            </div>

            <div className="form-group">
                <label className="form-label">Apellidos: </label>
                <input type="text" className="form-control" name="apellido"></input>
            </div>

            <div className="form-group">
                <label className="form-label">Correo: </label>
                <input type="text" className="form-control" name="correo"></input>
            </div>

            <div className="form-group">
                <label className="form-label">Telefono: </label>
                <input type="text" className="form-control" name="telf"></input>
            </div>
            <div className="form-group">
                <label className="form-label">Direccion: </label>
                <input type="text" className="form-control" name="direcc"></input>
            </div>
        </div>

        <br></br>

        <div className="row">
            <div className="col">
                <button type="button" className="btn btn-light">Guardar</button>
            </div>
        </div>
        
    </div>
    )
}