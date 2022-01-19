import React, { useState/* , Component  */ } from 'react';
import { Container } from 'react-bootstrap';
import "./info.css"
import BeatLoader from "react-spinners/BeatLoader"

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