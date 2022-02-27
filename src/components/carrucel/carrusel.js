import './carrusel.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState/* , Component  */ } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel'
import peli1 from "../../assert/peli1.jpg";
import peli2 from "../../assert/peli2.jpg";
import peli3 from "../../assert/peli3.jpg";
import BeatLoader from "react-spinners/BeatLoader"

listaPeliculas();
let listaDePeliculas = []
async function listaPeliculas(props) {
    const respuesta = await fetch('/api/movies', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    listaDePeliculas = await respuesta.json()
}
const Carrusel = () => {
    const [loading, setLoading] = useState(true)
    const cambiarEstado = () => {
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }

    if (loading){
        cambiarEstado()
        return(
          <div>
          <Container className='loading'>
            <BeatLoader 
              size={15}
            />
          </Container>
          </div>
          
        )
      }else{
          return (
              <Container>
                  <Row /* col-8  */ className="corru">
                      <Carousel>
                          {/*  */}
      
                          {
                              listaDePeliculas.map((i, f) => (
                                  i.cartelera === "SI" && i.relevant === "SI" && 
                                  <Carousel.Item interval={4000}>
                                      
                                      <img
                                          className="d-block w-100"
                                          src={i.img}
                                      />
                                      <Carousel.Caption>
                                          <h3>{i.title}</h3>
                                          <p>{i.synopsis.substring(0, 145)+"..."}</p>
                                      </Carousel.Caption>
                                  </Carousel.Item>
                              ))
                          }
      
      
      
                          {/*  */}
                          {/* <Carousel.Item interval={4000}>
                              <img
                                  className="d-block w-100"
                                  src={peli1}
                              
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
                              
                              />
                              <Carousel.Caption>
                                  <h3>Dune</h3>
                                  <p>Arrakis, el planeta del desierto, feudo de la familia Harkonnen desde hace generaciones, queda en manos de la Casa de los Atreides</p>
                              </Carousel.Caption>
                          </Carousel.Item> */}
      
                      </Carousel>
                  </Row></Container >
          );
      }
}

export default Carrusel;