import React from "react";
import MenuDesp from '../../Components/menuDesp';
import { CardBody } from "reactstrap";
import '../../css/editDatos.css'



const RecetaMedica = () => {
    return(
        <body>
            <div>
                <MenuDesp></MenuDesp>
                <div class = "cajita rounded-4">
                    <div class = "cajita3 rounded-4">
                        <div class="row">
                            <h2 class ="texto">Fecha:</h2>
                            <h2 class ="texto">Diagnostico</h2>

                            <div class ="datosdiag col-5 rounded-3">
                                <a>Nombres</a>
                            </div>
                            <br></br>

                            <h2 class ="texto">Receta medica</h2>

                            <div class ="datosdiag col-5 rounded-3">
                                <a>Nombres</a>
                            </div>
                                <button class="botoncito rounded-1">COMPRAR </button>
                        </div>
                    </div>
                </div>      
            </div>
        </body>
    );
}
export default RecetaMedica