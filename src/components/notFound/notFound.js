import { Container } from 'react-bootstrap';
import React, { useState } from 'react'
import BeatLoader from "react-spinners/BeatLoader"
import './notFound.css'
/* import image from '../../assert/concepto.webp' */
import image from '../../assert/2488756.jpg'


const NotFound = () => {


    const [loading, setLoading] = useState(true)
    const cambiarEstado = () => {
        setTimeout(() => {
            setLoading(false)
        }, 400);
    }
    if (loading /* || reserva === []  *//* peliCargada === false  */) {
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

    }

    return (
        <div>
            <Container>
                <div className='NotFund'>
                    <h3><strong>Parece que no hemos encontrado la página.</strong></h3>
                    <img className="card-img-top" src={image} alt="Card cap" href="/" />
                    <br></br>
                    <a href={"/"} className="btn btn-primary botonR" >Volver al inicio</a>
                </div>
            </Container>
        </div>
    )
}
export default NotFound