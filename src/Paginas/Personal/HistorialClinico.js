import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilaEditarHistorialClinico from '../../Componentes/FilaEditarHistorialClinico';



const HistorialClinico = () => {
    const location = useLocation();
    const navigate=useNavigate();
    const [citas, setcitas] = useState([])
    

    Axios.get(`https://localhost:5000/citas/Paciente/${location.state.paciente_id}`)
        .then(res => {
                
                setcitas(res.data)
        }).catch(console.log)


    return (
        <main>
            <div className="container m-4 p-4">

                <h2>Historial Clinico: {location.state.nombre}</h2>
                <br></br>
                <button type="button" className="btn btn-light" onClick={()=>navigate("AgregarHistoria",{state:{nombre:location.state.nombre}})}>
                    Agregar historia
                </button>

                <div className="secciones">
                  

                    <FilaEditarHistorialClinico nombre={location.state.nombre}/>
                    
                    <FilaEditarHistorialClinico nombre={location.state.nombre}/>

                    <FilaEditarHistorialClinico nombre={location.state.nombre}/>

                    <FilaEditarHistorialClinico nombre={location.state.nombre}/>
                </div>
            </div>

        </main>
    )
}
export default HistorialClinico;