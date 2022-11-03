import React from "react";
import Header from "../../Componentes/header";
import '../../css/screenSize.css'
import { useNavigate } from "react-router-dom";

const CitaAgendada = () => {
    const navigate = useNavigate()
    return <>
        <Header></Header>
        <div className="bg-light bg-opacity-75 componente">
            <h1 className="text-center pt-4 pb-5">¡Cita agendada con éxito!</h1>
            <h4 className="px-3 mt-5 mb-3">Detalles de la cita</h4>
            <div className="px-3 table-responsive">
                <table className="table">
                    <thead className="table-info">
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Modalidad</th>
                            <th scope="col">Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>@getFecha</td>
                            <td>@getHora</td>
                            <td>@getDoctor</td>
                            <td>Virtual</td>
                            <td>@getMontoCita</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col text-end">
                    <button type="button" className="btn btn-outline-success" onClick={() => navigate("Pagar")}>Pagar cita</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Cancelar cita
                    </button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">¿Desea eliminar su cita?</h5>
                                </div>
                                <div className="modal-body">
                                    Esta acción no se puede deshacer.
                                </div>
                                <div className="modal-footer">
                                    <div className="col text-end">
                                        <div id="liveAlertPlaceholder"></div>
                                        <button type="button" className="btn btn-success" id="liveAlertBtn">Sí</button>                                        
                                    </div>
                                    <div className="col">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">No</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default CitaAgendada;