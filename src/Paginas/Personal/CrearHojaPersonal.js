import React from "react"
import {Form, Input, Label} from 'reactstrap';
const CrearHojaAFiliacionPersonal =(props)=>{

    const handleChange = (event) => {
        const { name, value } = event.target
        props.setPacBody(prevBody => ({
            ...prevBody,
            [name]: value

        }))
    }

    return(
        <Form id ="Formulario" className ="row align-center">
        <center><Label>Datos Generales</Label></center>
        <div className='col-6'>
          <Label className="">Apellidos:</Label>
          <Input className="col-6" onChange={handleChange} name="apellidos" value={props.pacBody.apellido}/> 
          <Label className="">N°Historia clínica:</Label>
          <Input className="col-6" onChange={handleChange} name="num_hist_cli" value={props.pacBody.num_hist_cli}/> 
          <Label className="">Nombres:</Label>
          <Input className="col-5" onChange={handleChange} name="nombres" value={props.pacBody.nombres}/>
          <Label className="">Sexo:</Label>
          <Input className="col-5" onChange={handleChange} name="sexo" value={props.pacBody.sexo}/>
          <Label className="">Fecha de Nacimiento:</Label>
          <Input className="col-5" onChange={handleChange} name="fecha_nacimiento" value={props.pacBody.fecha_nacimiento}/> 
          <Label className="">Tipo de seguro:</Label>
          <Input className="col-5" onChange={handleChange} name="tipo_seguro" value={props.pacBody.tipo_seguro}/> 
        </div>

        <div className='col-6'>
          <Label className="">Estado Civil:</Label>
          <Input className="col-6" onChange={handleChange} name="estado_civil" value={props.pacBody.estado_civil}/> 
          <Label className="">DNI:</Label>
          <Input className="col-5" onChange={handleChange} name="dni" value={props.pacBody.dni}/>       
          <Label className="">Nombre del Padre:</Label>
          <Input className="col-5" onChange={handleChange} name="nombre_padre" value={props.pacBody.nombre_padre}/> 
          <Label className="">Fallecido: </Label>
          <Input className="col-5" onChange={handleChange} name="fallecido_padre" value={props.pacBody.fallecido_padre}/>
          <Label className="">Nombre de la Madre:</Label>
          <Input className="col-5" onChange={handleChange} name="nombre_madre" value={props.pacBody.nombre_madre}/> 
          <Label className="">Fallecida: </Label>
          <Input className="col-5" onChange={handleChange} name="fallecido_madre" value={props.pacBody.fallecido_madre}/>
        </div>

        <center><Label>Datos Personales</Label></center>
        <div className='col-6'> 
          <Label className="">Departamento:</Label>
          <Input className="col-6" onChange={handleChange} name="departamento" value={props.pacBody.departamento}/> 
          <Label className="">Provincia:</Label>
          <Input className="col-5" onChange={handleChange} name="provincia" value={props.pacBody.provincia}/> 
          <Label className="">Distrito:</Label>
          <Input className="col-5" onChange={handleChange} name="distrito" value={props.pacBody.distrito}/> 
          <Label className="">Dirección: </Label>
          <Input className="col-5" onChange={handleChange} name="direccion" value={props.pacBody.direccion}/>
        </div>

        <div className='col-6'> 
        <Label className="">Localidad:</Label>
          <Input className="col-5" onChange={handleChange} name="localidad" value={props.pacBody.localidad}/> 
          <Label className="">Sector: </Label>
          <Input className="col-5" onChange={handleChange} name="sector" value={props.pacBody.sector}/>
          <Label className="">N°Teléfono: </Label>
          <Input className="col-5" onChange={handleChange} name="num_telefono" value={props.pacBody.num_telefono}/>
          <Label className="">N°Celular: </Label>
          <Input className="col-5" onChange={handleChange} name="num_celular" value={props.pacBody.num_celular}/>
        </div>

        <Label className="col-3">Referencia:</Label>
        <Input className="col-3" onChange={handleChange} name="referencia" value={props.pacBody.referencia}/> 

       
        
        </Form>
    )


}
export default CrearHojaAFiliacionPersonal;

