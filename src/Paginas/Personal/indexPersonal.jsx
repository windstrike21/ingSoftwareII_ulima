import Carousel from "../../Componentes/Carousel"
import ContenidoInferior from "../../Componentes/ContenidoInferior"
import React from "react"

const IndexPersonal = () => {
    return  ( 
        
    <div className="px-4 py-3">
        <div className="row py-2 bg-light">
            <div className="col-2"></div>
            <div className="col-8">
                <h1 className="text-center mt-2 mb-4">Bienvenido @getusername</h1>
                <Carousel />
                <br />
                <h2 className="text-center mt-3 mb-4">Texto de relleno para la página principal...</h2>
                <ContenidoInferior />
            </div>
            <div className="col-2"></div>
        </div>
    </div>
    )
}
export default IndexPersonal;