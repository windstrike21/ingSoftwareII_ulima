import React from 'react';
import {FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Confirmation from '../pago/ConfirmarPago'

export const MetodoPagoTarjeta = () => {

    
    return(
        <div className='container border mt-3 col-4'>
            <FormGroup>
                <Label for="NumCard">Numero de Tarjeta</Label>
                <Input type="text" id="NumCard"/> 
                <Label className="col-1 col-md-3" >Fecha de Vencimiento </Label>
                <Input className="col-5 col-mx-2" id="FechaV"></Input>
                <Label className="col-4 col-md-1">CVV </Label>
                <Input className="col-3 " id="NumCVV" ></Input>
                <Label for="Name">Nombre del Propietario</Label>
                <Input type="text" id="Name"/> 
            </FormGroup>

            <div className="my-3 d-flex justify-content-center">
             <Confirmation />
            </div>
        </div>
    )
}

export default MetodoPagoTarjeta;