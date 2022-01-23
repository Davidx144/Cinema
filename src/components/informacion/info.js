import React, { useState/* , Component  */ } from 'react';
import "./info.css"
import BeatLoader from "react-spinners/BeatLoader"
import Sillas from "../reservas/reservas"
import App from "../salas/salas"
import ejemplo from '../eje/ejemplo';
import { Container, Row } from "react-bootstrap";
import { /*Button, FormGroup, Form, Label,   FormText  Input,*/ Col } from 'reactstrap';

//const Infopeli = props => {
function Infopeli() {
    const [loading, setLoading] = useState(true)
    const cambiarEstado = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }
    if (loading) {
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
        return (
            <Container >
                <div className='infoPeli'>
                    <Row>
                        <Col sm={6}>
                        <p>{exitoso[0].title}</p>
                        <div >
                        <img src={exitoso[0].img} className='imag'/>
                        </div>
                        </Col>
                        <Col sm={6}>
                    <App></App>    
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                    <ejemplo></ejemplo>
                    <h1>aaaaaasas</h1>
                    <p>{url}</p>
                    <p>{ids}</p>
                    <p>{exitoso[0].title}</p>
                </div>
            </Container>
        )
    }
}

var URLactual = (window.location);
//console.log(URLactual.pathname)
var url = (URLactual.pathname)
var ids = url.slice(6)

infoPelicula();
let exitoso = []
async function infoPelicula(props) {
    const respuesta = await fetch('/api/info/' + ids, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    exitoso = await respuesta.json()
    
    console.log(exitoso[0])
}
export default Infopeli;