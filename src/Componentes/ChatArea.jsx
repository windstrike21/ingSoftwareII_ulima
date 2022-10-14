import { useEffect, useState } from "react";
import img1 from "../Imagenes/Personal/logo_canal_ayuda_tecnica.ico";
import "../css/personal/ChatArea.css";
import React from 'react';
import axios from "axios";
const ChatArea = (props) => {
    const [mensaje, setMensaje] = useState("");
    const [consultasChat, setConsultasChat] = useState([]);
    const [nuevoMensaje, setNuevoMensaje] = useState(true)
    const [idPersonal, setIdPersonal] = useState(1)
    const [id_usuario2, setIdUsuario2] = useState(null);
    const [mensajeEnviado,setMensajeEnviado]=useState(null)


    const actualizarMensaje = (event) => {
        setMensaje(event.target.value);
    }

    useEffect(() => {
        
        if (props.idPersonal != undefined ) {
            axios.post('http://localhost:5000/Consultas/Chat', {
                id_usuario: props.id,
                id_usuario2: props.idPersonal
            }).then(res => {
                
                setConsultasChat(res.data);
                
            }).catch(console.log)
        }
        else {
            axios.post('http://localhost:5000/Consultas/Chat', {
                id_usuario: props.id,
                id_usuario2: null
            }).then(res => {
                
                setConsultasChat(res.data);
                
                
            }).catch(console.log)
        }
    },)
    // const enviarDatos = () => {
    //     console.log("prueba");
    //     if (mensajes.length == 0) {
    //         setMensajes([mensaje]);    
    //     } else {
    //         setMensajes(mensajes => [...mensajes,mensaje]);          
    //     }        
    // }
    const enviarDatos = () => {
        
        console.log()
        
        if (props.idPersonal != undefined) {
            axios.post('http://localhost:5000/Consultas', {
                mensaje: mensaje,
                id_usuario: props.id,
                id_usuario2: props.idPersonal
            }).then(res => {
                console.log("MIRA")
                console.log(res.data);
                setMensajeEnviado(res.data)
            }).catch(console.log)
        } else {
            
                axios.post('http://localhost:5000/Consultas', {
                    mensaje: mensaje,
                    id_usuario: props.id,
                    id_usuario2: null
                }).then(res => {
                    console.log("MIRA")
                    console.log(res.data);
                    
                }).catch(console.log)
            

        }
        setMensaje('')
        
        console.log(`mensaje:${mensaje}`)
    }
    return <div className="row">
        <div className="col mt-1 ps-1 pe-0">
            <div className="overflow-auto componente mb-2 me-4">
                <table className="table border border-white">
                    <tbody key="tbody_1">
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
                        {
                            consultasChat.map((consulta) => {
                                if (consulta.id_usuario === props.id) {
                                    return (
                                        <tr>
                                            <td>
                                                <p className="mb-0 p-2 w-75 rounded-2 bg-secondary ms-auto text-white">
                                                    {consulta.mensaje}
                                                </p>
                                            </td>
                                        </tr>
                                    )
                                } else {
                                    return (
                                        <tr className="row me-0">
                                            <td className="col-1">
                                                <div className="py-2 text-end">
                                                    <img src={img1} alt="..." className="rounded-5" height="20px" width="20px" />
                                                </div>
                                            </td>
                                            <td className="col-11">
                                                <p className="mb-0 p-2 w-75 rounded-2 bg-light">
                                                    {consulta.mensaje}
                                                </p>
                                            </td>
                                        </tr>
                                    )
                                }

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <div className="row pe-5">
            <div className="col-md-11 mb-2 ps-4">
                <textarea key="txtarea_1" className="form-control" placeholder="Ingrese su consulta aquí" rows={3}
                    onChange={actualizarMensaje} value={mensaje}></textarea>
            </div>
            <div className="col-md-1 mb-2 text-center">
                <button type="button" className="p-2 btn btn-secondary opacity-50" onClick={enviarDatos} >ENVIAR</button>
            </div>
        </div>
        {mensajeEnviado==false && 
        <div>Otro administrador le esta realizando consulta</div>}
    </div>
}
export default ChatArea;