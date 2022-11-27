import axios from 'axios';
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
    const [medicamentos, setMedicamentos] = useState([])
    const [agregado, setAgregado] = useState(false)
    const [idCita, setIdCita] = useState(null)
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })
    const [body, setBody] = useState({
        nombre: null,
        frecuencia: null,
        duracion: null,
        unidades: null
    })
    const handleChange = (event) => {

        const { name, value } = event.target
        setBody(prevBody => ({
            ...prevBody,
            [name]: value

        }))
    }
    useEffect(() => {
        axios.post('/citaUsuarios', {
            idPaciente: location.state.idPaciente,
            idMedico: location.state.id
        }).then(res => {


            setIdCita(res.data.id)

        }).catch(console.log)
    }, [])
    console.log(location.state.idPaciente)
    console.log(location.state.id)
    const agregar = () => {
        axios.post('/citaMedicamento', {
            CitaId: idCita,
            nombre: body.nombre,
            frecuencia: body.frecuencia,
            duracion: body.duracion,
            unidades: body.unidades

        }).catch(console.log)
        setAgregado(true)
    }
    useEffect(() => {
        if (agregado) {
            axios.get(`/medicamentos/Cita/${idCita}`).then(res => {
                setMedicamentos(res.data[0].Medicamentos)
            }).catch(console.log)
            setAgregado(false)
        }
    }, [agregado])
    return (
        <main>
            <div className="container m-4 p-4" ref={componentRef}>

                <h2>Receta</h2>



                <br></br>





                <div className="secciones">
                    {medicamentos.map((medicamento) => (
                        <InicioAlEditarMedicamentos unidades={medicamento.unidades} duracion={medicamento.duracion} frecuencia={medicamento.frecuencia} medicamento={medicamento.nombre} />
                    ))

                    }
                    {/* <InicioAlEditarMedicamentos unidades={5} duracion={'3 meses'} frecuencia={'cada día'} medicamento={'Paracetamol'} />
                    <InicioAlEditarMedicamentos unidades={5} duracion={'3 meses'} frecuencia={'cada día'} medicamento={'Paracetamol'} />
                    <InicioAlEditarMedicamentos unidades={5} duracion={'3 meses'} frecuencia={'cada día'} medicamento={'Paracetamol'} /> */}

                </div>
                <div className='row'>
                    <div className='col-4'>
                        <button onClick={agregar}>Agregar Medicamento</button>
                    </div>
                    <div className='col-4'></div>
                    <div className='col-4'>
                        <button onClick={handlePrint}>Imprimir</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-3">
                        <label>nombre</label>
                        <input onClick={handleChange} value={body.nombre}></input>
                        <div></div>
                    </div>
                    
                    <div className="col-3">
                        <label>frecuencia</label>
                        <input onClick={handleChange} value={body.frecuencia}></input>
                        <div></div>
                    </div>
                    
                    <div className="col-3">
                        <label>duracion</label>
                        <input onClick={handleChange} value={body.duracion}></input>
                        <div></div>
                    </div>
                    
                    <div className="col-3">
                        <label>unidades</label>
                        <input onClick={handleChange} value={body.unidades}></input>
                    </div>

                </div>


            </div>


        </main>
    )
}
export default AgregarMedicamento;