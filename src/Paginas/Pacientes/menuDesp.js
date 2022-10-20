import React from "react";
import '../../css/estilosMenu.css';
import './assets/bell.svg';



const MenuDesp = () =>{

        let listElements = document.querySelectorAll('.list__button--click');

        listElements.forEach(listElement => {
        listElement.addEventListener('click', ()=>{
            
            listElement.classList.toggle('arrow');

            let height = 0;
            let menu = listElement.nextElementSibling;
            if(menu.clientHeight == "0"){
                height=menu.scrollHeight;
            }

            menu.style.height = `${height}px`;

        })
    });
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
                            <a href="#" class="nav__link">Estadisticas</a>
                        </div>
                    </li>

                    <li class="list__item list__item--click">
                        <div class="list__button list__button--click">
                            <img src="bell.svg" class="list__img"/>
                            <a href="#" class="nav__link">Notificaciones</a>
                            <img src="assets/arrow.svg" class="list__arrow"/>
                        </div>

                        <ul class="list__show">
                            <li class="list__inside">
                                <a href="#" class="nav__link nav__link--inside">Estoy dentro</a>
                            </li>

                            <li class="list__inside">
                                <a href="#" class="nav__link nav__link--inside">Estoy dentro</a>
                            </li>

                            <li class="list__inside">
                                <a href="#" class="nav__link nav__link--inside">Estoy dentro</a>
                            </li>
                        </ul>

                    </li>


                    <li class="list__item">
                        <div class="list__button">
                            <img src="assets/message.svg" class="list__img"/>
                            <a href="#" class="nav__link">Contacto</a>
                        </div>
                    </li>

                </ul>
            </nav>

            
            <script src="main.js"></script>
        </body>
    )
}

export default MenuDesp