import React from "react";

const comprarMedicamento = () => {
    return <>
        <div className="row">
            <div className="col-2 rounded bg-secondary"></div>
            <div className="col-8 bg">
                <h2 className="text-center">Tu orden de compra</h2>
                <div className="rounded bg-light">
                    <div className="row">
                        <div className="col">
                            <h3><b>Método de Pago:</b></h3>
                        </div>
                        <div className="col">
                            Tarjeta Nro 455788057349####
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-warning">Cambiar</button>
                        </div>
                    </div>
                    <h3><b>Resumen:</b></h3>
                    <table>
                        <thead>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Levocetirizina</td>
                                <td>10</td>
                                <td>2</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Paracetamol</td>
                                <td>10</td>
                                <td>1.5</td>
                                <td>15</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <p className="text-end">35</p>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-success">Comprar</button>
                    </div>
                    <div className="col text-end">
                        <button type="button" className="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
    </>
}

export default comprarMedicamento;