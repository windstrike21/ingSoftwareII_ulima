import ChatArea from '../../Componentes/ChatArea';
import React from 'react';
import { useLocation } from 'react-router-dom';

const CanalSoporte = (props) => {
    const location=useLocation();
    return <div className="px-4 py-3">
        <div className="row py-2 bg-light">
            <h3 className="text-center mt-2 mb-3"><b>Chatea con soporte técnico</b></h3>
            <div className="col-2"></div>
            <div className="col-8 bg-white rounded-4 border border-secondary shadow">
                <ChatArea id={location.state.id} idUsuario={location.state.idUsuario} tipo={location.state.tipo} />
            </div>
            <div className="col-2"></div>
        </div>
    </div>
}
export default CanalSoporte;