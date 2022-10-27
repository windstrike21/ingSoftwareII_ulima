import React from "react";
import MenuDesp from '../../Components/menuDesp';
import { CardBody } from "reactstrap";
import '../../css/editDatos.css'



const AgendarCita = () => {
    return(
        <body>
            <div>
                <div class = "cajita rounded-4">
                    <div class = "cajita3 rounded-4">
                        <div class="row">
                            <h2 class ="texto">Agendar una cita</h2>
                            <div class ="datosdiag col-5 rounded-3">
                            </div>
                                <button class="botoncito rounded-1">COMPRAR </button>
                        </div>
                    </div>
                </div>      
            </div>
        </body>
    );
}
export default AgendarCita