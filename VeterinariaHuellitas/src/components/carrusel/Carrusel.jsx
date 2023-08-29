import { Carousel, Image } from "react-bootstrap";
import "./Carrusel.css"
const Carrusel = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Image className="imagenCarousel" src="src/images/carrusel/imagen9.jpg" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="imagenCarousel" src="src/images/carrusel/imagen1.png" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="imagenCarousel" src="src/images/carrusel/imagen7.jpg" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Carrusel;