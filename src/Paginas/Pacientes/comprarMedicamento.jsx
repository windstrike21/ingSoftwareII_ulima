import React, { useState } from "react";
import "../../css/Paciente/comprarMedicamento.css"
import { useLocation, useNavigate } from "react-router-dom";

const comprarMedicamento = () => {
    const navigate = useNavigate();
    const location = useLocation()
    let precioTotal=0

    const RegresarARecetaMedica = async () => {
        navigate("/RecetaMedica")
    }

    return <>
        <div className="row pt-2">
            <div className="col-1"></div>
            <div className="col-10 rounded bg-secondary p-3 mt-3">
                <h3 className="text-center text-white">Tu orden de compra</h3>
                <div className="rounded bg-light px-3">
                    <div className="row py-2 text-center">
                        <div className="col-sm">
                            <b>Método de Pago:</b>
                        </div>
                        <div className="col-sm">
                            Tarjeta Nro 455788057349####
                        </div>
                        <div className="col-sm">
                            <button type="button" className="btn btn-warning">Cambiar</button>
                        </div>
                    </div>
                    <div className="row py-2"><b>Resumen:</b></div>
                    <div className="row py-2">
                        <div className="table-responsive componente">
                            <table className="table text-center">
                                <thead className="border-dark border-bottom border-2">
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio Unitario</th>
                                    <th>Total</th>
                                </thead>

                                <tbody>
                                    {
                                        location.state.medicamentos.map((medicina) => {
                                            if (medicina.disponibilidad) {
                                                precioTotal=precioTotal+medicina.unidades*medicina.precio_unitario
                                                return (
                                                    <tr>
                                                        <td>{medicina.medicamento}</td>
                                                        <td>{medicina.unidades}</td>
                                                        <td>{medicina.precio_unitario}</td>
                                                        <td>{medicina.unidades*medicina.precio_unitario}</td>
                                                    </tr>
                                                    
                                                )
                                                

                                            }
                                            
                                            

                                        })
                                    }

                                    <tr className="border-dark border-top border-2">
                                        <th>Total</th>
                                        <td colspan="2"></td>
                                        <th>{precioTotal}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <button type="button" className="btn btn-success">Comprar</button>
                    </div>
                    <div className="col text-end">
                        <button type="button" className="btn btn-danger" onClick={RegresarARecetaMedica} >Cancelar</button>
                    </div>
                </div>
            </div>
            <div className="col-1"></div>
        </div>
    </>
}

export default comprarMedicamento;