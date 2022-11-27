import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Confirmation from './ConfirmarPago';
import { useState } from 'react';
import img1 from '../../Imagenes/Paciente/Yape.jpg';
import img2 from '../../Imagenes/Paciente/Plin.jpg';


export const MetodoPagoTarjeta = (props) => {

    const [TarjetaBody, setTarjetaBody] = useState({
        numcard: null,
        cvv: null,
        nombre: null,
        fecven: null,
        
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setTarjetaBody(prevBody => ({
            ...prevBody,
            [name]: [value] 

        }))
    }





    return (
        <div className='container border mt-3 col-4'>
            <FormGroup>
                <Label for="NumCard">Numero de Tarjeta</Label>
                <Input type="text" onChange={handleChange} name="numcard" value={TarjetaBody.numcard} />
                <Label className="col-1 col-md-3" >Fecha de Vencimiento </Label>
                <Input className="col-5 col-mx-2" onChange={handleChange} name="fecven" value={TarjetaBody.fecven}></Input>
                <Label className="col-4 col-md-1">CVV </Label>
                <Input className="col-3 " onChange={handleChange} name="cvv" value={TarjetaBody.cvv}></Input>
                <Label for="Name">Nombre del Propietario</Label>
                <Input type="text" onChange={handleChange} name="nombre" value={TarjetaBody.nombre} />
            </FormGroup>

            <div className="my-3 d-flex justify-content-center">
                <Confirmation TarBody={TarjetaBody} setTarjetaBody={setTarjetaBody} />
            </div>

            <div classname='col col-md-3'>

                <div className="y-3 d-flex justify-content-center">
                    <img src={img1} className="img-fluid img-thumbnail rounded-5" alt='Yape'/>
                </div>

                <div className="y-3 d-flex justify-content-center">
                    <img src={img2} className="img-fluid img-thumbnail rounded-5" alt='Plin'/>
                </div>
            
            </div>
           

        </div>

        
    )
}

export default MetodoPagoTarjeta;