import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react';

const AgregarMedicamento2 = () => {
    const [med, setMed]=useState({
        medicamento: null,
        frecuencia: null,
        duracion: null,
        unidades: null
    })

    const actualizarDatos = (event) => {
        const { name, value } = event.target
        setMed(prevBody => ({
            ...prevBody,
            [name]: value

        }))
    }

    const agregar = () => {
        Axios.post(`http://localhost:5000/citaMedicamentos`, {
           medicamento:med.medicamento,
           frecuencia:med.frecuencia,
           duracion:med.duracion,
           unidades:med.unidades
        })
    }

    return (
        <div className="container m-4 p-4">
            
        <h3>Agregar Medicamento: </h3>
        <br></br>
        <div className="container mb-1">
            
            <div className="form-group">
                <label className="form-label">Medicamento: </label>
                <input type="text" placeholder='Agregue un medicamento' className="form-control" name="medicamento" value={med.medicamento} onChange={actualizarDatos}></input>
            </div>

            <div className="form-group">
                <label className="form-label">Cantidad: </label>
                <input type="text" placeholder='Agregue la cantidad' className="form-control" name="cant" value={med.unidades} onChange={actualizarDatos}></input>
            </div>

            <div className="form-group">
                <label className="form-label">Duración: </label>
                <input type="text" placeholder='Agregue la duración' className="form-control" name="duracion" value={med.duracion} onChange={actualizarDatos}></input>
            </div>

            <div className="form-group">
                <label className="form-label">Frecuencia: </label>
                <input type="text" placeholder='Agregue la frecuencia' className="form-control" name="frec" value={med.frecuencia} onChange={actualizarDatos}></input>
            </div>
        </div>

        <br></br>

        <div className="row">
            <div className="col">
                <button type="button" className="btn btn-light" onClick={agregar}>Agregar Medicamento</button>
            </div>
            <div className="col">
                <button type="button" className="btn btn-light" >Cancelar</button>
            </div>
        </div>
        
    </div>
    )
}
export default AgregarMedicamento2;