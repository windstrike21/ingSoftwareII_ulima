const Datos_de_cita = (props) => {
    return (
        <div>
            <div className="mb-2 card bg-dark text-white">
                <div className="row justify-content-center ">
                    
                        <div className="col-md-5 ">
                            <label>Fecha: {props.fecha}</label><br></br>
                            <label>Especialidad: {props.especialidad}</label>
                        </div>
                        <div className="col-3 ">
                            <label>Hora: {props.hora}</label><br></br>
                            <label>Doctor: {props.doctor}</label>
                        </div>
                    

                </div>
            </div>
        </div>
    )
}
export default Datos_de_cita;