import Modal3 from "../Paginas/Personal/modals/ModBorrarHA"
import Modal4 from "../Paginas/Personal/modals/mor4"
import React from "react";
const InicioHojaFiliacion = () => {
    return (
        <tr className="Row">
            <td>
                <div className="col">
                    Codigo usuario
                </div>
            </td>
            <td>
                <div className="container justify-content-end d-grid gap-2  ">

                    <Modal4 />
                    <Modal3 />
                </div>
            </td>
        </tr>
    )
}
export default InicioHojaFiliacion