import img1 from '../../Imagenes/Paciente/Yape.jpg';
import img2 from '../../Imagenes/Paciente/Plin.jpg';
import '../../css/App.css'


export const MetodoPagoTarjeta = () => {

    return <div className='my-3 d-flex justify-content-center row'>

    <div className="col-2">
    <Label className='d-flex justify-content-center' for ='Yape'><h2> Yape</h2> </Label> 
        <img src={img1} className="img-fluid img-thumbnail rounded-5" alt='Yape' id='Yape'/>
    </div>

    <div className="col-2">
    <Label className='d-flex justify-content-center col' for='Plin'> <h2> Plin</h2></Label>
        <img src={img2} className="img-fluid img-thumbnail rounded-5" alt='Plin' id='Plin'/>
    </div>

</div>
    

}