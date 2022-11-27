import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Confirmation from './ConfirmarPago';
import { useState } from 'react';
import img1 from '../../Imagenes/Paciente/Yape.jpg';
import img2 from '../../Imagenes/Paciente/Plin.jpg';
import '../../css/App.css'


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
        
        <div className='my-5 border rounded container col-6'>     
        <h2 className='d-flex justify-content-center'> Introduzca sus datos de Tarjeta </h2>
        
        <div className=' border container  mt-3 col-6'>
            <FormGroup>
                <Label for="NumCard">Numero de Tarjeta</Label>
                <Input type="text" onChange={handleChange} name="numcard" value={TarjetaBody.numcard} />
                <Label className="col-1 col-md-5" >Fecha de Vencimiento </Label>
                <Input className="col-5 col-mx-2" onChange={handleChange} name="fecven" value={TarjetaBody.fecven}></Input>
                <Label className="col-4 col-md-1">CVV </Label>
                <Input className="col-3 " onChange={handleChange} name="cvv" value={TarjetaBody.cvv}></Input>
                <Label for="Name">Nombre del Propietario</Label>
                <Input type="text" onChange={handleChange} name="nombre" value={TarjetaBody.nombre} />
            </FormGroup>

            <div className="my-3 d-flex justify-content-center">
                <Confirmation TarBody={TarjetaBody} setTarjetaBody={setTarjetaBody} />
            </div>
        </div> 
                <h2 className='mt-2 d-flex justify-content-center'> ¿Desea pagar con aplicativo de banca? </h2>
                <h2 className='mt-2 d-flex justify-content-center'>¡Aquí están nuestros códigos!  </h2>

            <div className='my-3 d-flex justify-content-center row'>

                <div className="col-2">
                <Label className='d-flex justify-content-center' for ='Yape'><h2> YAPE</h2> </Label> 
                    <img src={img1} className="img-fluid img-thumbnail rounded-5" alt='Yape' id='Yape'/>
                </div>

                <div className="col-2">
                <Label className='d-flex justify-content-center col' for='Plin'> <h2> Plin</h2></Label>
                    <img src={img2} className="img-fluid img-thumbnail rounded-5" alt='Plin' id='Plin'/>
                </div>
            
            </div>
        </div>

        
    )
}

export default MetodoPagoTarjeta;