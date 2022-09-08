import logo_perfil_pac from "../Imagenes/Personal/logo_perfil_pac.jpg";
import React from "react"
const InicioAlPerfilPaciente = (props) => {
    return (
        <div>
            <div className="row mb-2">
                <img src={logo_perfil_pac} className="col-2" alt=""></img>
                <div className="col-10 card bg-dark text-white">
                    <div className="row mt-2">
                        <div className="col-5">
                            <label>Nombre: {props.nombre}</label><br></br>
                            <label>Codigo: {props.codigo}</label>
                        </div>
                        <div className="col-5 mt-2">
                            <button>Historial clínico</button>
                            <button>Citas</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InicioAlPerfilPaciente;