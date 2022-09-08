import img1 from "../Imagenes/Personal/contenidoinferior_1.jpg"
import React from "react";
const ContenidoInferior = () => {
    return <div className="row mt-5">
        <div className="col-lg-7">
            <h4 className="mb-4"><b>Sed ut perspiciatis</b></h4>
            <p className="mb-3">
                Nemo enim ipsam voluptatem 
                quia voluptas sit aspernatur 
                aut odit aut fugit, sed quia 
                consequuntur magni dolores eos 
                qui ratione voluptatem sequi nesciunt..
            </p>
            <button type="button" className="btn btn-outline-primary mb-3">Ver más</button>
        </div>        
        <div className="col-lg-5">
            <img src={img1} className="img-fluid img-thumbnail rounded-5" alt="..."/>
        </div>
    </div>
}
export default ContenidoInferior;