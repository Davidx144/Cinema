import { Col, Container, Row } from 'react-bootstrap';
import './editarReserva.css'
import BeatLoader from "react-spinners/BeatLoader"
import React, { useState } from 'react'


var URLactualReserva = (window.location);
var urlReserva = (URLactualReserva.pathname)
var idsReserva = urlReserva.slice(15,39)
var idsReserva2 = urlReserva.slice(40)

/* var idssReserva = urlReserva.slice(0, 15) */
console.log(idsReserva)
console.log(idsReserva2)

/* if (idssReserva === "/editarReserva/") {
    var reservaInfo = (`/api/booking/${idsReserva}`)
} */

/* var reserva = [] */
/* var peliculadeReserva = [] */

/* reservasEditar()
async function reservasEditar(props) {
    const respuestas = await fetch(reservaInfo, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    reserva = await respuestas.json()
    
} */




/* const LocalStorageMovie = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem("Id_peli", value);
    }, [value]);

    return [value, setValue];
}; */


/* console.log(peliculadeReserva) */

const EditarReserva = () => {
/*     const [id_Pelicula, setValue] = LocalStorageMovie(
        'Id_peli'
    ); */

/*     peliculaDeReserva()
    var buscarPeli = `/api/info/${id_Pelicula}`
    console.log(reserva)
    console.log(buscarPeli)

    async function peliculaDeReserva(props) {
        const respuestas = await fetch(buscarPeli, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        peliculadeReserva = await respuestas.json()
        console.log("csdkcjklsjjcksdkc")

        console.log(peliculadeReserva)
    } */




    const [loading, setLoading] = useState(true)
    const cambiarEstado = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
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
        return (
            <Container>
                <div className='editarReserva'>
                    <p>ssadsdsd</p>
                    {/* <h1>{reserva[0].title}</h1> */}
                    <Row>
                        <Col sm={4}>
                            <p>uno</p>
                        </Col>
                        <Col sm={6}>
                            <p>dos</p>
                        </Col>
                        <Col sm={2}>
                            <p>tres</p>
                        </Col>
                    </Row>
                </div>

            </Container>
        );
    }

}

export default EditarReserva