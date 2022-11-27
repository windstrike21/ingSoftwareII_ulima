import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import InicioAlEditarMedicamentos from '../../Componentes/InicioAlEditarMedicamentos';




const AgregarMedicamento = () => {
    let count = 0;
    let todosMedicamentos = []
    let tresMedicamentos = []
    const [arr, setArr] = useState([])
    const location = useLocation();
    const navigate = useNavigate();
    const [medicamento, setMedicamento] = useState([])
    const [acabado, setAcabado] = useState(false)
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })
    return (
        <main>
            <div className="container m-4 p-4" ref={componentRef}>

                <h2>Receta</h2>
                <br></br>





                <div className="secciones">
                    <InicioAlEditarMedicamentos unidades={5} duracion={'3 meses'} frecuencia={'cada día'} medicamento={'Paracetamol'} />
                    <InicioAlEditarMedicamentos unidades={5} duracion={'3 meses'} frecuencia={'cada día'} medicamento={'Paracetamol'} />
                    <InicioAlEditarMedicamentos unidades={5} duracion={'3 meses'} frecuencia={'cada día'} medicamento={'Paracetamol'} />

                </div>
                <div className='row'>
                    <div className='col-4'>
                        <button>Agregar Medicamento</button>
                    </div>
                    <div className='col-4'></div>
                    <div className='col-4'>
                        <button onClick={handlePrint}>Imprimir</button>
                    </div>
                </div>

            </div>


        </main>
    )
}
export default AgregarMedicamento;