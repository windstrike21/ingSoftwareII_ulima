import React from "react";
import { Form } from "reactstrap";

const ActualizarHojaFiliacion = (props) => {
    
    const handleChange = (event) => {
        const { name, value } = event.target
        props.setPacBody(prevBody => ({
            ...prevBody,
            [name]: value

        }))
    }
    
    return (
        <div>
            <Form id ="Formulario" className ="row align-center">
            <center><h3>DATOS GENERALES</h3></center>
            <div className="container mb-1">
                <div className="row mb-1">
                    <label className="col-2">Apellidos:</label>
                    <input className="col-5" onChange={handleChange} name="apellidos" value={props.pacBody.apellidos}></input>
                    <label className="col-2">N° Historia clinica:</label>
                    <input className="col-3" onChange={handleChange} name="num_hist_cli" value={props.pacBody.num_hist_cli}></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Nombres:</label>
                    <input className="col-5" onChange={handleChange} name="nombres" value={props.pacBody.nombres}></input>
                    <label className="col-2">Sexo:</label>
                    <input className="col-3" onChange={handleChange} name="sexo" value={props.pacBody.sexo}></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Fecha de nacimiento:</label>
                    <input className="col-5" onChange={handleChange} name="fecha_nacimiento" value={props.pacBody.fecha_nacimiento}></input>
                    <label className="col-2">Tipo de seguro:</label>
                    <input className="col-3" onChange={handleChange} name="tipo_seguro" value={props.pacBody.tipo_seguro}></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Estado civil:</label>
                    <input className="col-5" onChange={handleChange} name="estado_civil" value={props.pacBody.estado_civil}></input>
                    <label className="col-2">Numero de documento:</label>
                    <input className="col-3" onChange={handleChange} name="num_documento" value={props.pacBody.num_documento}></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Nombre del padre:</label>
                    <input className="col-5" onChange={handleChange} name="nombre_padre" value={props.pacBody.nombre_padre}></input>
                    <label className="col-2">Fallecido:</label>
                    <input className="col-3" onChange={handleChange} name="fallecido_padre" value={props.pacBody.fallecido_padre}></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Nombre de la madre:</label>
                    <input className="col-5" onChange={handleChange} name="nombre_madre" value={props.pacBody.nombre_madre}></input>
                    <label className="col-2">Fallecido:</label>
                    <input className="col-3" onChange={handleChange} name="fallecido_madre" value={props.pacBody.fallecido_madre}></input>
                </div>


                <center className="mt-4"><h3>DATOS PERSONALES</h3></center>
                <div className="row mb-1">
                    <label className="col-2">Departamento:</label>
                    <input className="col-5" onChange={handleChange} name="departamento" value={props.pacBody.departamento}></input>
                    <label className="col-2">Provincia:</label>
                    <input className="col-3" onChange={handleChange} name="provincia" value={props.pacBody.provincia}></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Distrito:</label>
                    <input className="col-10" onChange={handleChange} name="distrito" value={props.pacBody.distrito}></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Dirección:</label>
                    <input className="col-10" onChange={handleChange} name="direccion" value={props.pacBody.direccion}></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Localidad:</label>
                    <input className="col-10" onChange={handleChange} name="localidad" value={props.pacBody.localidad}></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Sector:</label>
                    <input className="col-10" onChange={handleChange} name="sector" value={props.pacBody.sector}></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Referencia:</label>
                    <input className="col-10" onChange={handleChange} name="referencia" value={props.pacBody.referencia}></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">N° Teléfono:</label>
                    <input className="col-5" onChange={handleChange} name="telefono" value={props.pacBody.telefono}></input>
                    <label className="col-2">N° Celular:</label>
                    <input className="col-3" onChange={handleChange} name="celular" value={props.pacBody.celular}></input>
                </div>
            </div>
            </Form>

        </div>
    )
}
export default ActualizarHojaFiliacion;