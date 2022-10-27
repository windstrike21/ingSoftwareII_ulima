import React from 'react';
import {FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Confirmation from './ConfirmarPago'
import { useState } from 'react';


export const MetodoPagoTarjeta = (props) => {

    const handleChange = (event) => {
      const { name, value } = event.target
      props.setTarBody(prevBody => ({
          ...prevBody,
          [name]: value

      }))
  }

  const [TarjetaBody, setTarjetaBody] = useState({
    numcard:null,
    dni: null,
    cvv:null,
    nombre: null,
    fecha_vencimiento: null,
    Tipo:"Tarjeta"
  })


    
    return(
        <div className='container border mt-3 col-4'>
            <FormGroup>
                <Label for="NumCard">Numero de Tarjeta</Label>
                <Input type="text" onChange={handleChange} name="numcard" value={props.pacBody.numcard}/> 
                <Label className="col-1 col-md-3" >Fecha de Vencimiento </Label>
                <Input className="col-5 col-mx-2" onChange={handleChange} name="fecven" value={props.pacBody.fecven}></Input>
                <Label className="col-4 col-md-1">CVV </Label>
                <Input className="col-3 "  onChange={handleChange} name="cvv" value={props.pacBody.cvv}></Input>
                <Label for="Name">Nombre del Propietario</Label>
                <Input type="text"  onChange={handleChange} name="nombre" value={props.pacBody.nombre}/> 
            </FormGroup>

            <div className="my-3 d-flex justify-content-center">
             <Confirmation TarBody={TarjetaBody} setTarjetaBody={setTarjetaBody}/>
            </div>
        </div>
    )
}

export default MetodoPagoTarjeta;