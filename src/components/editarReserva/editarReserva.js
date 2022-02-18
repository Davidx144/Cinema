import { Col, Container, Row } from 'react-bootstrap';
import './editarReserva.css'
import BeatLoader from "react-spinners/BeatLoader"
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    FormGroup,
    FormControlLabel,
    ButtonGroup,
} from "@mui/material/";
import Checkbox from "@mui/material/Checkbox";


var URLactualReserva = (window.location);
var urlReserva = (URLactualReserva.pathname)
var UrlReservaActual = urlReserva.slice(0, 15)
var idsReserva = urlReserva.slice(15, 39)
var idsPeliReserva = urlReserva.slice(40)

/* var idssReserva = urlReserva.slice(0, 15) */
/* console.log(idsReserva)
console.log(idsPeliReserva) */

if (UrlReservaActual === "/editarReserva/") {
    var reservaInfo = (`/api/booking/${idsReserva}`)
    var peliInfo = (`/api/info/${idsPeliReserva}`)
}

var reserva = []
reservasEditar()
async function reservasEditar(props) {
    const respuestas = await fetch(reservaInfo, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    reserva = await respuestas.json()
    /*     console.log("Reserva de la reserva :v")
        console.log(reserva) */
}

var peliculadeReserva = []
peliculaDeReserva()
/* var buscarPeli = `/api/info/${peliInfo}`
console.log(reserva)
console.log(buscarPeli) */
//var sillasReserva = []
async function peliculaDeReserva(props) {
    const respuestas = await fetch(peliInfo, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    peliculadeReserva = await respuestas.json()
    /*     console.log("Pelicula de la reserva")
        console.log(peliculadeReserva) */

}


const EditarReserva = () => {

    const [checked, setChecked] = React.useState(true);
    const [seatsRemove, setSeatsRemove] = React.useState([]);


    /*     var sillasReserva = reserva[0].chairs
        console.log(sillasReserva) */

    /*   var detelete = [reserva[0].chairs] */
    const removeItem = (array, item) => {
        const index = array.indexOf(item);
        if (index > -1) {
            array.splice(index, 1);
        }
    };

    const handleChange = (e) => {
        const seatsCopy = seatsRemove.slice();
        if (e.target.checked) {
            seatsCopy.push(e.target.value);
        } else {
            removeItem(seatsCopy, e.target.value);
        }
        setSeatsRemove(seatsCopy);
        /* console.log(seatsRemove); */
    }
     const imprimeFuera = () =>{
         console.log(seatsRemove)
     }


    var videoEmbe = ("https://www.youtube.com/embed/" + (peliculadeReserva[0].trailer).slice(-11))
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
            <Container>
                <div className='editarReserva'>
                    <h2><strong>Editar reserva</strong></h2>
                    {/* <h1>{peliculadeReserva[0].title}</h1> */}
                    <Row>
                        <Col sm={6}>
                            <h1>{reserva[0].title}</h1>
                            <img src={peliculadeReserva[0].img} className='imag' />
                            <h5><strong>Trailer:</strong></h5>
                            <div className="embed-responsive">
                                <iframe className='videoYoutube' src={videoEmbe} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                                </iframe>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='infoReservaActual'>
                                {/* <br></br> */}
                                <h3 className='h3aling'><strong>Descripcion</strong></h3>
                                <h5>{peliculadeReserva[0].synopsis}</h5>
                                <h4><strong>Hora de la funcion: </strong>{reserva[0].hour}</h4>
                                <h4><strong>Valor de la funcion: </strong>{reserva[0].bookingValue}</h4>
                                {/* <h4><strong>Sillas seleccionadas </strong>{(reserva[0].chairs).sort()}</h4> */}
                                <h5><strong>Selecciona las sillas que quieres liberar </strong></h5>
                                {reserva[0].chairs.sort().map((seat, i) => (
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                /* checked={checked} */
                                                key={seat + i}
                                                value={seat}
                                                className="chkseats"
                                                onChange={handleChange}
                                            /* inputProps={{ 'aria-label': 'controlled' }} */
                                            /* defaultChecked */
                                            />
                                        }
                                        label={seat}
                                    />
                                ))}
                                <div className='h3aling'>
                                    <button type="button" className="btn btn-danger deleteBoton " onClick={imprimeFuera}/* onClick={() => handleDeleteClick(id)} */>
                                        liberar
                                    </button>
                                </div>
                            </div>
                        </Col>
                        {/*                         <Col sm={2}>
                            <p>tres</p>
                        </Col> */}
                    </Row>
                </div>

            </Container>
        );
    }

}

export default EditarReserva