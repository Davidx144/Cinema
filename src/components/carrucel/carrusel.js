/* eslint-disable jsx-a11y/alt-text */
import './carrusel.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel'
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
                  <Row className="corru">
                      <Carousel>
                          
      
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
                      </Carousel>
                  </Row></Container >
          );
      }
}

export default Carrusel;