import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import InicioAlEditarHistorialClinico from '../../Componentes/Inicio al editar historial clinico';

const HistorialClinico = () => {
    
    return (
        <main>
            <div className="container m-4 p-4">

                <h2>Historial Clinico: Juan Perez</h2>
                <br></br>
                <button type="button" className="btn btn-light">
                    Agregar historia
                </button>

                <div className="secciones">

                    <div className="row mt-3">
                        <InicioAlEditarHistorialClinico/>
                        <InicioAlEditarHistorialClinico/>
                        <InicioAlEditarHistorialClinico/>
                    </div>

                    <div className="row mt-3">
                        <InicioAlEditarHistorialClinico/>
                        <InicioAlEditarHistorialClinico/>
                        <InicioAlEditarHistorialClinico/>
                    </div>

                    <div className="row mt-3">
                        <InicioAlEditarHistorialClinico/>
                        <InicioAlEditarHistorialClinico/>
                        <InicioAlEditarHistorialClinico/>
                    </div>


                </div>
            </div>

        </main>
    )
}
export default HistorialClinico;