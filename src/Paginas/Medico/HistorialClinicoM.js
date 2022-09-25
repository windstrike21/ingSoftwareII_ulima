import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilaEditarHistorialClinico from '../../Componentes/FilaEditarHistorialClinico';



const HistorialClinicoM = () => {
    const location = useLocation();
    const navigate=useNavigate()
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
export default HistorialClinicoM;