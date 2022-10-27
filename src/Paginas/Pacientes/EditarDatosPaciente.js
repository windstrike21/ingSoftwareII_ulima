import React from "react";

import { CardBody } from "reactstrap";
import '../../css/editDatos.css'



const EditarDatosPaciente = () => {
    return(
        <body>
                
                
                <div class = "cajita rounded-4">
                    <div class = "cajita2 rounded-4">
                        <div class="row">
                            <h2 class ="texto">Edita tus datos</h2>
                            <div class ="cajitadato col-5 rounded-3">
                                <a>Nombres</a>
                            </div>

                            <div class ="cajitadato col-5 rounded-3">
                                <a>Apellidos</a>
                            </div>

                            <div class ="cajitadato col-5 rounded-3">
                                Correo electronico
                            </div>
                            <div class ="cajitadato col-5 rounded-3">
                                Numero telefonico
                            </div>
                            <div class =" col-5 rounded-3">
                                
                            </div>

                           
                                <button class="botoncito rounded-1">Actualizar Datos</button>
                            
                                
                            
                        </div>
                    </div>

                    
                    <br></br>
                    <br></br>

                    <div class = "cajita2 rounded-4">
                    <div class="row">
                            <h2 class ="texto">Datos adicionales</h2>
                            <div class ="cajitadato col-5 rounded-3">
                                <a>Tipo de documento</a>
                            </div>

                            <div class ="cajitadato col-5 rounded-3">
                                <a>Numero</a>
                            </div>

                            <div class ="cajitadato col-5 rounded-3">
                                Genero
                            </div>

                            
                            <div class =" col-5 rounded-3">
                                
                            </div>

                            <div class ="cajitadato col-5 rounded-3">
                                Fecha de nacimiento
                            </div>

                            <div class ="cajitadato col-5 rounded-3">
                                dd/mm/aaaa
                            </div>


                        </div>


                    </div>

                </div>      
        </body>
    );
}
export default EditarDatosPaciente