import React from 'react';
import { useNavigate } from 'react-router-dom';
const InicioAlChatPersonal = (props) => {
    const navigate = useNavigate();
    return (
        <div className="col-10 " id="oval">
            <center className="container">
                <div className="row mt-2">
                    <div className="col-5">
                        <label>Nombre: {props.nombre}</label><br></br>
                    </div>
                    <div className="col-5 mt-2 ">
                        <button onClick={() => navigate("CanalSoporte",{state:{id:props.id,idUsuario:props.idUsuario,tipo:props.tipo}})}>chatArea</button>
                    </div>
                </div>
            </center>

        </div>
    )
}
export default InicioAlChatPersonal;