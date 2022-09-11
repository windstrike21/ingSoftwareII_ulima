import img1 from "../Imagenes/Personal/logo_canal_ayuda_tecnica.ico";
import "../css/personal/ChatArea.css";
import React from 'react';
const ChatArea = () => {
    return <div className="row">
        <div className="col mt-1 ps-1 pe-0">
            <div className="overflow-auto componente mb-2 me-4">
            <table className="table border border-white">
                <tbody>
                    <tr className="row me-0">
                        <td className="col-1">
                            <div className="py-2 text-end">
                                <img src={img1} alt="..." className="rounded-5" height="20px" width="20px" />
                            </div>
                        </td>
                        <td className="col-11">
                            <p className="mb-0 p-2 w-75 rounded-2 bg-light">
                                Bienvenido al canal de consultas!
                                Para registrar su consulta escriba en el campo inferior “Escriba su consulta...”
                                Un administrador se pondrá en contacto con usted en un plazo no mayor a 48 horas.
                            </p>
                        </td>
                    </tr>
                    <tr>                        
                        <td>
                            <p className="mb-0 p-2 w-75 rounded-2 bg-secondary ms-auto text-white">
                                Hola tengo una consulta...
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </td>
                    </tr>                      
                </tbody>
            </table>
            </div>
        </div>
        <div className="row pe-5">
            <div className="col-md-11 mb-2 ps-4">
                <textarea className="form-control" placeholder="Ingrese su consulta aquí" rows={3} ></textarea>
            </div>
            <div className="col-md-1 mb-2 text-center">
                <button type="button" className="p-2 btn btn-secondary opacity-50">ENVIAR</button>
            </div>
        </div>
    </div>
}
export default ChatArea;