import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const AgregarHistoria = () => {
    const location = useLocation();
    const [datos,setDatos]=useState({
        fecha: null,
        especialidad: null,
        doctor: null,
        diagnostico: null
    })

    const actualizarDatos = (event) => {
        const { name, value } = event.target
        setDatos(prevBody => ({
            ...prevBody,
            [name]: value

        }))
    }

    const agregar = () => {
        Axios.post(`http://localhost:5000/citas`, {
           fecha:datos.fecha,
           especialidad:datos.especialidad,
           doctor:datos.doctor,
           diagnostico:datos.diagnostico
        })
    }
    return (
        <div className="container m-4 p-4">
            
        <h3>Agregar Historia: {location.state.nombre}</h3>
        <br></br>
        <div className="container mb-1">
            
            <div className="form-group">
                <label className="form-label">Fecha: </label>
                <input type="date" placeholder='Agregue una fecha' className="form-control" name="fecha" value={datos.fecha} onChange={actualizarDatos}></input>
            </div>

            <div className="form-group">
                <label className="form-label">Doctor: </label>
                <input type="text" placeholder='Agregue un doctor' className="form-control" name="doctor" value={datos.doctor} onChange={actualizarDatos}></input>
            </div>

            <div className="form-group">
                <label className="form-label">Especialidad: </label>
                <input type="text" placeholder='Agregue una especialidad' className="form-control" name="especialidad" value={datos.especialidad} onChange={actualizarDatos}></input>
            </div>

            <div className="form-group">
                <label className="form-label">Modificar descripción: </label>
                <textarea type="text" placeholder='Agregue una descripción' className="form-control" name="diagnostico" value={datos.diagnostico} onChange={actualizarDatos}></textarea>
            </div>
        </div>

        <br></br>

        <div className="row">
            <div className="col">
                <button type="button" className="btn btn-light" onClick={agregar}>Agregar Historia</button>
            </div>
            <div className="col">
                <button type="button" className="btn btn-light" >Cancelar</button>
            </div>
        </div>
        
    </div>
    )
}
export default AgregarHistoria;