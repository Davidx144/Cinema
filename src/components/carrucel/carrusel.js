import './carrusel.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel'
import peli1 from "../../assert/peli1.jpg";
import peli2 from "../../assert/peli2.jpg";
import peli3 from "../../assert/peli3.jpg";

const Carrusel = () => {
    return (
        <Container>
            <Row /* col-8  */className="corru">
                <Carousel>
                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src={peli1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Eternals</h3>
                            <p>"Eternals" de Marvel Studios, sigue a un grupo de héroes más allá de las estrellas que han protegido a la Tierra desde el principio de los tiempos.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src={peli2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Venom: Let There Be Carnage</h3>
                            <p>Eddie y Venom están luchando por coexistir cuando el simbionte más grande y malo se une con Cletus Kasady</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            href="/info/87"
                            className="d-block w-100"
                            src={peli3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Dune</h3>
                            <p>Arrakis, el planeta del desierto, feudo de la familia Harkonnen desde hace generaciones, queda en manos de la Casa de los Atreides</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src={peli2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Venom: Let There Be Carnage</h3>
                            <p>Eddie y Venom están luchando por coexistir cuando el simbionte más grande y malo se une con Cletus Kasady</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}

                </Carousel>
            </Row></Container >
    );
}

export default Carrusel;