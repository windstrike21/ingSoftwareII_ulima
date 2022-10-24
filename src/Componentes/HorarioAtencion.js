import '../css/App.css';
import React from "react"
const HorarioAtencion = () => {
    return (
        <div className="row mb-2">
            <div className='col-1'></div>
            <div className="col-10" id="oval">
                <div className='row'>
                    <div className='col-1'>Hoy</div>
                    <div className='col-1'>4:00</div>
                    <div className='col-1'>6:00</div>
                    <div className='col-1'>7:00</div>
                    <div className='col-1'>7:30</div>
                </div>
                <div className='row'>
                    <div className='col-1'>Mañana</div>
                    <div className='col-1'>4:00</div>
                    <div className='col-1'>6:00</div>
                    <div className='col-1'>7:00</div>
                    <div className='col-1'>7:30</div>
                </div>
                <div className='row'>
                    <div className='col-1'>Domingo</div>
                    <div className='col-1'>4:00</div>
                    <div className='col-1'>6:00</div>
                    <div className='col-1'>7:00</div>
                    <div className='col-1'>7:30</div>
                </div>
            </div>
        </div>
    )
}
export default HorarioAtencion;