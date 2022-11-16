import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import InicioAlEditarMedicamentos from '../../Componentes/InicioAlEditarMedicamentos';
import FilaEditarHistorialClinico from '../Componentes/FilaEditarHistorialClinico';



const HistorialClinico = () => {
    let count = 0;
    let todosMedicamentos = []
    let tresMedicamentos = []
    const [arr, setArr] = useState([])
    const location = useLocation();
    const navigate = useNavigate();
    const [medicamento, setMedicamento] = useState([])
    const [acabado, setAcabado] = useState(false)

    return (
        <main>
            <div className="container m-4 p-4">

                <h2>Receta</h2>
                <br></br>
                
                



                <div className="secciones">
                    <InicioAlEditarMedicamentos unidades={5} duracion={'3 meses'} frecuencia={'cada día'} medicamento={'Paracetamol'}/>
                    <InicioAlEditarMedicamentos unidades={5} duracion={'3 meses'} frecuencia={'cada día'} medicamento={'Paracetamol'}/>
                    <InicioAlEditarMedicamentos unidades={5} duracion={'3 meses'} frecuencia={'cada día'} medicamento={'Paracetamol'}/>

                </div>
                <div>
                    <button>Agregar Medicamento</button>
                </div>
               
            </div>

        </main>
    )
}
export default HistorialClinico;