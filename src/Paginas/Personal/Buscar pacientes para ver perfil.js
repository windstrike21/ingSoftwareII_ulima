import InicioAlPerfilPaciente from "../../Componentes/Inicio al perfil paciente";
import React from "react"
const BuscarPacientesParaVerPerfil = (props) => {
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <h3 className="col-md-4">Pacientes</h3>
                    <input placeholder="Buscar Paciente..." className="col-8"></input>
                </div>

            </div>

            <div className="container mt-4">{}
                <InicioAlPerfilPaciente nombre="Juan Perez" codigo="002001902" />
                <InicioAlPerfilPaciente nombre="Juan Perez" codigo="002001902" />
                <InicioAlPerfilPaciente nombre="Juan Perez" codigo="002001902" />
                <InicioAlPerfilPaciente nombre="Juan Perez" codigo="002001902" />
                <InicioAlPerfilPaciente nombre="Juan Perez" codigo="002001902" />
            </div>
        </div>
    )
}
export default BuscarPacientesParaVerPerfil;