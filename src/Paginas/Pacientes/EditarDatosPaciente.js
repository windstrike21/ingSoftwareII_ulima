import React from "react";
import MenuDesp from '../../Components/menuDesp';
import { CardBody } from "reactstrap";
import '../../css/editDatos.css'



const EditarDatosPaciente = () => {
    return(
        <body>
            <div>
                <MenuDesp></MenuDesp>
                <div class = "cajita rounded-4" id="cajita">
                    <div class = "col d-lg-block col-md-5">
                        <p class=" text-center"> 
                                editar datos paciente
                        </p>
                    </div>
                </div>
            </div>
        </body>
    );
}
export default EditarDatosPaciente