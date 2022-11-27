import React from "react";
import Header from "../../Componentes/header";
import doctor from '../../Imagenes/Médico/doctor.jpg'
import '../../css/screenSize.css'
import { useNavigate } from "react-router-dom";

const AgendarCita = () => {
    const navigate = useNavigate();
    return <>
    <Header></Header>
        <div className="row border border-top text-center componente">
            <div className="col-4 border-end border-info ps-4 bg-info bg-opacity-10">
                <h2 className="my-4">Dr. Francisco</h2>
                <h4 className="mb-4">Ginecólogo</h4>
                <img className="mb-4 img-fluid rounded-circle border-info border" src={doctor} />
                <h3 className="mb-3">Acerca de</h3>
                <div className="text-start mb-3">
                    ...
                </div>
            </div>
            <div className="col-8 bg-light bg-opacity-75 position-relative">
                <h1 className="my-3">Agendar cita</h1>
                <button type="button" className="position-absolute top-0 end-0 btn btn-outline-info bg-opacity-75 btn-sm mt-3 me-3"><div>Ver</div><div>médicos</div></button>
                <h4 className="mt-5 mb-4">Fecha de la cita</h4>
                <div className="row mb-5">
                    <div className="col"></div>
                    <div className="col">
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col"></div>
                </div>
                <h4 className="mb-4">Horas disponibles</h4>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 border rounded bg-white">
                        <div className="">H1 H2 H3 H4 H5</div>
                        <div className="">H1 H2 H3 H4 H5</div>
                        <div className="">H1 H2 H3 H4 H5</div>
                    </div>
                    <div className="col-2"></div>
                </div>
                <button type="button" className="mt-3 btn btn-outline-warning" onClick={()=>navigate('CitaAgendada')}>Agendar</button>
            </div>
        </div>
    </>
}

export default AgendarCita;
