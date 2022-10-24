import Medicamento from "../../Componentes/Medicamento";
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";
import '../../css/App.css'
const RecetaMedica = () => {
    const location = useLocation()
    const [medicamentos, setMedicamentos] = useState([])
    const colores = { true: "verde", false: "rojo" }

    useEffect(() => {
        axios.get(`http://localhost:5000/medicamentos/Cita/${location.state.CitaId}`)
            .then(res => {
                setMedicamentos(res.data)
            }).catch(console.log)
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-1"></div>

                <div className="col-10">

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
                        medicamentos.map((medicina) => (
                            <Medicamento medicamento={medicina.medicamento} frecuencia={medicina.frecuencia} duracion={medicina.duracion}
                                unidades={medicina.unidades} color={colores[medicina.disponibilidad]} />
                        ))
                    }


                    <div className="row">
                        <div className="col-3"></div>
                        <button className="col-2">Comprar Selección</button>
                        <div className="col-1"></div>
                        <button className="col-2">Imprimir</button>
                        <div className="col-3"></div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>

        </div>
    )
}
export default RecetaMedica;