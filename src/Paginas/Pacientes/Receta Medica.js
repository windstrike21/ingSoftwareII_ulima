import Medicamento from "../../Componentes/Medicamento";
import React, { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from "react-to-print";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import '../../css/App.css'
const RecetaMedica = () => {
    const location = useLocation()
    const [medicamentos, setMedicamentos] = useState([])
    const colores = { true: "verde", false: "rojo" }
    const navigate = useNavigate()
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })

    useEffect(() => {
        axios.get(`/medicamentos/Cita/${location.state.CitaId}`)
            .then(res => {
                setMedicamentos(res.data[0].Medicamentos)
            }).catch(console.log)
    }, [])

    console.log(medicamentos)
    return (
        <div>
            <div className="row">
                <div className="col-1"></div>

                <div className="col-10">


                    <div ref={componentRef}>
                        <div className="row mt-2 mb-4">
                            <h5 className="col-3">Receta Medica</h5>
                            <div className="col-8"></div>
                            <button className="col-1">Volver</button>
                        </div>
                        <div className="row mb-3">
                            <div className="col-7"></div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-5">
                                        Estado: Disponible
                                    </div>
                                    <div className="circulo_verde col-1"></div>
                                    <div className="col-5">
                                        No Disponible
                                    </div>
                                    <div className="circulo_rojo col-1"></div>
                                </div>

                            </div>


                        </div>
                        {
                            medicamentos.map((medicamento) => (
                                <Medicamento nombre={medicamento.cita_medicamento.nombre} frecuencia={medicamento.cita_medicamento.frecuencia} duracion={medicamento.cita_medicamento.duracion}
                                    unidades={medicamento.cita_medicamento.unidades} color={colores[medicamento.disponibilidad]} />
                            ))
                        }
                    </div>



                    <div className="row">
                        <div className="col-3"></div>
                        <button className="col-2" onClick={() => navigate("comprarMedicamento", { state: { medicamentos: medicamentos } })}>Comprar</button>
                        <div className="col-1"></div>
                        <button className="col-2" onClick={handlePrint}>Imprimir</button>

                        <div className="col-3"></div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>

        </div>
    )
}
export default RecetaMedica;