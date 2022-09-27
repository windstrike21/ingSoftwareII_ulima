import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import { useLocation } from 'react-router-dom';

const AgregarHistoria = () => {
    const location=useLocation()
    return (
        <div className="container m-4 p-4">
            
        <h3>Agregar Historia: {location.state.nombre}</h3>
        <br></br>
        <div className="container mb-1">
            
            <div className="form-group">
                <label className="form-label">Fecha: </label>
                <input type="date" placeholder='Agregue una fecha' className="form-control"></input>
            </div>

            <div className="form-group">
                <label className="form-label">Doctor: </label>
                <input type="text" placeholder='Agregue un doctor' className="form-control"></input>
            </div>

            <div className="form-group">
                <label className="form-label">Especialidad: </label>
                <input type="text" placeholder='Agregue una especialidad' className="form-control"></input>
            </div>

            <div className="form-group">
                <label className="form-label">Modificar descripción: </label>
                <textarea type="text" placeholder='Agregue una descripción' className="form-control"></textarea>
            </div>
        </div>

        <br></br>

        <div className="row">
            <div className="col">
                <button type="button" className="btn btn-light" >Agregar Historia</button>
            </div>
            <div className="col">
                <button type="button" className="btn btn-light" >Cancelar</button>
            </div>
        </div>
        
    </div>
    )
}
export default AgregarHistoria;