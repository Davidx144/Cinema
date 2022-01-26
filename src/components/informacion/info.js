/* eslint-disable jsx-a11y/alt-text */
/* import React, { useState , Component   } from 'react'; */
import "./info.css"
import BeatLoader from "react-spinners/BeatLoader"
/* import Sillas from "../reservas/reservas" */
import App from "../salas/salas"
import { Container, Row } from "react-bootstrap";
import { /*Button, FormGroup, Form, Label,   FormText  Input,*/ Col } from 'reactstrap';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

/* constructor(props){
    super(props);
} */
/* const params = useParams();
console.log("ejem: " + params.id)

const { match: {params} } = this.props;
console.log(params.id) */


const Infopeli = () => {
    //function Infopeli() {
    const params = useParams();
    console.log("Esto es el useP:" + params.id)
    var URLactual = (window.location);
    //console.log(URLactual.pathname)
    var url = (URLactual.pathname)
    var ids = url.slice(6)
    var ss = (`/api/info/${ids}`)
    var sss = (`/api/info/` + (params.id))

    const [peliCargada, setCarga] = useState(false)

    console.log(peliCargada)
    infoPelicula();
    let peliculaActual = []
    async function infoPelicula(props) {
        //const respuesta = await fetch('/api/info/61e0a6ddc4ffa27245fc2196', {
        //const respuesta = await fetch(`/api/info/` + (params.id), {
        //const respuesta = await fetch(`/api/info/${params.id}`, {

        const respuesta = await fetch('/api/info/61e0a6ddc4ffa27245fc2196', {

            //const respuesta = await fetch(`/api/info/${ids}`, {
            //const respuesta = await fetch(params.id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        peliculaActual = await respuesta.json()
        if (peliculaActual === []) {
            console.log("Aun no llega")
            
        } else {
            /* var variable = (perfilUsuario.type) */
            setCarga(true)
            console.log(peliCargada)
        }

        console.log(peliculaActual[0])
        

        console.log(peliCargada)

    }

    







    /* var videoEmbe='dsdsd' */
    const [loading, setLoading] = useState(true)
    const cambiarEstado = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }
    if (/* loading || peliculaActual === []*/peliCargada === false) {
        cambiarEstado()
        return (
            <div>

                <Container className='loading'>
                    <BeatLoader
                        size={15}
                    />
                </Container>
            </div>
        )
    } else {
        //var videoEmbe = ("https://www.youtube.com/embed/" + (peliculaActual[0].trailer).slice(-11))
        var videoEmbe = ("https://www.youtube.com/embed/")

        console.log(videoEmbe)
        return (
            <Container >
            {setCarga(true)}
                <div className='infoPelic'>
                    <Row>
                        <Col sm={6}>
                            <h2><strong size="20">{peliculaActual[0].title}</strong></h2>
                            <div >
                                <img src={peliculaActual[0].img} className='imag' />
                            </div>
                            <div>
                                <p>
                                    {peliculaActual[0].synopsis}
                                </p>
                            </div>
                            <div>
                                <p> <strong>Genero:</strong> {peliculaActual[0].gender}  <strong>Duracion:</strong>  {peliculaActual[0].duration}  <strong>Formato:</strong>{peliculaActual[0].format}</p>
                            </div>
                            <div>
                                <p><strong> Hora:</strong> {peliculaActual[0].hour}  <strong> Valor:</strong>  {peliculaActual[0].value}</p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <App></App>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <div className="embed-responsive">
                            <iframe className='videoYoutube' /* src={exitoso[0].trailer}  */ src={videoEmbe} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                            </iframe>
                        </div>
                    </Row>
                    <h1>aaaaaasas</h1>
                    <p>{url}</p>
                    <p>{ids}</p>
                    <p>{peliculaActual[0].title}</p>
                </div>
            </Container>
        )
    }
}


export default Infopeli;