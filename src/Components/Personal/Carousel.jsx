import img1 from "../../Imagenes/Personal/carousel_1.jpg";
import img2 from "../../Imagenes/Personal/carousel_2.jpg";
import img3 from "../../Imagenes/Personal/carousel_3.jpg";

const Carousel = () => {
    return <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">                
                <img src={img1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Etiqueta de la primera diapositiva</h5>
                        <p>Algún contenido placeholder representativo para la primera diapositiva.</p>
                    </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src={img2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Etiqueta de la segunda diapositiva</h5>
                        <p>Algún contenido placeholder representativo para la segunda diapositiva.</p>
                    </div>
            </div>
            <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Etiqueta de la tercera diapositiva</h5>
                        <p>Algún contenido placeholder representativo para la tercera diapositiva.</p>
                    </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
        </button>
    </div>
}
export default Carousel;