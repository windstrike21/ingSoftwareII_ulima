import Inicio_al_perfil_paciente from "../../Components/Inicio al perfil paciente";
const Buscar_pacientes_para_ver_perfil = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h3 className="col-md-4">Pacientes</h3>
                    <input placeholder="Buscar Paciente..." className="col-8"></input>
                </div>

            </div>

            <div className="container mt-4">
                <Inicio_al_perfil_paciente nombre="Juan Perez" codigo="002001902" />
                <Inicio_al_perfil_paciente nombre="Juan Perez" codigo="002001902" />
                <Inicio_al_perfil_paciente nombre="Juan Perez" codigo="002001902" />
                <Inicio_al_perfil_paciente nombre="Juan Perez" codigo="002001902" />
                <Inicio_al_perfil_paciente nombre="Juan Perez" codigo="002001902" />
            </div>
        </div>
    )
}
export default Buscar_pacientes_para_ver_perfil;