import React from "react";
import '../../css/estilosMenu.css';




const MenuDesp = () => {

    return(
                <body>
            <nav class="nav">
                <ul class="list">

                    <li class="list__item">
                        <div class="list__button">
                            <img src="assets/dashboard.svg" class="list__img"/>
                            <a href="#" class="nav__link">Editar Datos</a>
                        </div>
                    </li>


                    <li class="list__item">
                        <div class="list__button">
                            <img src="assets/stats.svg" class="list__img"/>
                            <a href="#" class="nav__link">Perfil clinico</a>
                        </div>
                    </li>


                    <li class="list__item">
                        <div class="list__button">
                            <img src="assets/message.svg" class="list__img"/>
                            <a href="#" class="nav__link">Receta medica</a>
                        </div>
                    </li>

                </ul>
            </nav>
            
            <script src="main.js"></script>
        </body>
    );
}

export default MenuDesp