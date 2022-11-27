import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const EditarDatosPaciente = () => {
    const location = useLocation();
    const [datos,setDatos]=useState({
        nombres:location.state.nombres,
        apellidos:location.state.apellidos,
        direccion:location.state.direccion,
        celular:location.state.celular,
        telefono:location.state.telefono,
    })
    const actualizarDatos = (event) => {
        const { name, value } = event.target
        setDatos(prevBody => ({
            ...prevBody,
            [name]: value

        }))
    }

    const modificar = () => {
        Axios.put(`http://localhost:5000/hojasFiliacion/${location.state.hojafiliacion_id}`, {
           nombres:datos.nombres,
           apellidos:datos.apellidos,
           direccion:datos.direccion,
           celular:datos.celular,
           telefono:datos.telefono
        })
    }

    return (
        <div className="container m-4 p-4">
            
        <h3>Editar Datos: </h3>
        <br></br>
        <div className="container mb-1">
            
            <div className="form-group">
                <label className="form-label">Nombres: </label>
                <input type="text" className="form-control" name="nombre" value={datos.nombres} onChange={actualizarDatos}></input>
            </div>

            <div className="form-group">
                <label className="form-label">Apellidos: </label>
                <input type="text" className="form-control" name="apellido" value={datos.apellidos} onChange={actualizarDatos}></input>
            </div>

            <div className="form-group">
                <label className="form-label">Celular: </label>
                <input type="text" className="form-control" name="cel" value={datos.celular} onChange={actualizarDatos}></input>
            </div>

            <div className="form-group">
                <label className="form-label">Telefono: </label>
                <input type="text" className="form-control" name="telf" value={datos.telefono} onChange={actualizarDatos}></input>
            </div>
            <div className="form-group">
                <label className="form-label">Direccion: </label>
                <input type="text" className="form-control" name="direcc" value={datos.direccion} onChange={actualizarDatos}></input>
            </div>
        </div>

        <br></br>

        <div className="row">
            <div className="col">
                <button type="button" className="btn btn-light" onClick={modificar}>Guardar</button>
            </div>
        </div>
        
    </div>
    )
}

export default EditarDatosPaciente;