import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
const EditarHistoriaM = () => {
    const location = useLocation();
    const [datos,setDatos]=useState({
        fecha:location.state.fecha,
        especialidad:location.state.especialidad,
        doctor:location.state.doctor,
        diagnostico:location.state.diagnostico
    })
    
    const actualizarDatos = (event) => {
        const { name, value } = event.target
        setDatos(prevBody => ({
            ...prevBody,
            [name]: value

        }))
    }
    
    const modificar = () => {
        Axios.put(`http://localhost:5000/citas/${location.state.cita_id}`, {
           fecha:datos.fecha,
           especialidad:datos.especialidad,
           doctor:datos.doctor,
           diagnostico:datos.diagnostico
        })
    }

    return (
        <div className="container m-4 p-4">

            <h3>Editar Historia: {location.state.nombre}</h3>
            <br></br>
            <div className="container mb-1">

                <div className="form-group">
                    <label className="form-label">Fecha: </label>
                    <input type="text"   className="form-control" name="fecha" value={datos.fecha} onChange={actualizarDatos}></input>
                </div>

                <div className="form-group">
                    <label className="form-label">Doctor: </label>
                    <input type="text"   className="form-control" name="doctor" value={datos.doctor} onChange={actualizarDatos}></input>
                </div>

                <div className="form-group">
                    <label className="form-label">Especialidad: </label>
                    <input type="text"   className="form-control" name="especialidad" value={datos.especialidad} onChange={actualizarDatos}></input>
                </div>

                <div className="form-group">
                    <label className="form-label">Modificar descripción: </label>
                    <textarea type="text" className="form-control"   name="diagnostico" value={datos.diagnostico} onChange={actualizarDatos}></textarea>
                </div>

            </div>

            <br></br>

            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-light" onClick={modificar}>Editar Historia</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-light" >Cancelar</button>
                </div>
            </div>

        </div>
    )
}
export default EditarHistoriaM;