import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export const MostrarBoleta = () =>{
    

    return (
        <div className=' container  mt-3 col-6'>
            <FormGroup>
                <Label for="NumCard">Numero de Tarjeta</Label>
                <Label type="text" name="numcard" />

                <Label className="col-1 col-md-5" >Clinica  #### </Label>
                <Label className="col-5 col-mx-2" name="nombre"/>

                <Label for="Nombre">Nombre de Paciente</Label>
                <Label type="text" name="nombre" />

                <Label for="Monto">Adquisición </Label>
                <Label type="text" name="Monto"/>
            </FormGroup>
        </div>
    )

}
export default MostrarBoleta();