import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {img1} from '../../Imagenes/Paciente/Yape.jpg'
import {img2} from '../../Imagenes/Paciente/Plin.jpg'

export const CodigosQR =() => {

    return (
        <div className='container mt-3 col-4'>
            <div>
            <img src={img1} className="img-fluid img-thumbnail rounded-5" id='Yape'/>
            </div>

            <div>
            <img src={img2} className="img-fluid img-thumbnail rounded-5" alt='Plin'/>
            </div>
        </div>
    )

}
export default CodigosQR();
