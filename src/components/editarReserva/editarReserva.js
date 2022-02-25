import { Col, Container, Row } from 'react-bootstrap';
import './editarReserva.css'
import BeatLoader from "react-spinners/BeatLoader"
import React, { useState } from 'react'
import {
    FormControlLabel,
} from "@mui/material/";
import Checkbox from "@mui/material/Checkbox";
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';


var URLactualReserva = (window.location);
var urlReserva = (URLactualReserva.pathname)
var UrlReservaActual = urlReserva.slice(0, 15)
var idsReserva = urlReserva.slice(15, 39)
var idsPeliReserva = urlReserva.slice(40)

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
async function peliculaDeReserva(props) {
    const respuestas = await fetch(peliInfo, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    peliculadeReserva = await respuestas.json()
}

const LocalStorageNombre = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem("nombre_usuario", value);
    }, [value]);

    return [value, setValue];
};

const LocalStorageEmail = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem("email_usuario", value);
    }, [value]);

    return [value, setValue];
};

const EditarReserva = () => {

    const [nombreUsuario, setValueNombreUsuario] = LocalStorageNombre(
        'nombre_usuario'
    );

    const [emailusuario, setValueEmail] = LocalStorageEmail(
        'email_usuario'
    );

    const [seatsRemove, setSeatsRemove] = React.useState([]);
    var sillasReserva = reserva[0].chairs
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

    }

    const actualizarReserva = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
        })

        if (seatsRemove.length === sillasReserva.length) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pueden eliminar todas las sillas!',
            })
        }else if(seatsRemove.length ===0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes seleccionar por lo menos una silla!',
            })
        }else {
            swalWithBootstrapButtons.fire({
                title: '¿Desea actualizar la reserva?',
                text: "¡Las sillas marcadas, serán eliminadas de su reserva!",
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Si, actualizar.',
                cancelButtonText: 'No, cancelar.',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {

                    

                    for (const i in seatsRemove) {
                        var indexSilla = parseInt(seatsRemove[i])
                        var eliminar = sillasReserva.indexOf(indexSilla)
                        sillasReserva.splice(eliminar, 1)
                    }
                    var aux1 = {
                        chairs: sillasReserva,
                        bookingValue: sillasReserva.length * peliculadeReserva[0].value
                    }

                    var newvalue = (sillasReserva.length * peliculadeReserva[0].value).toString()
                    var body_email = {
                        name: nombreUsuario,
                        email: emailusuario,
                        title: peliculadeReserva[0].title,
                        chairs: sillasReserva,
                        value: newvalue,
                        hour: reserva[0].hour
                    }
                    console.log(body_email)
                    sendEmail()
                    function sendEmail() {
                        emailjs.send('service_p8ggm3o',
                            'template_ge2qocs',
                            body_email,
                            'user_uWUrSMAEt8LcbPa7531Oa'
                        ).then(res => {
                            console.log("Esto fue" + res);
                        }).catch(err => console.log("Esto fueee" + err))
                    }

                    const updateReserva = (JSON.stringify(aux1));
                    swalWithBootstrapButtons.fire(
                        'Reserva actualizada',
                        'Todas las sillas marcadas han sido liberadas.',
                        'success'
                    ).then(function () {
                        var reservaId = reserva[0]._id
                        console.log(updateReserva)
                        fetch('/api/updateBooking/' + reservaId, {
                            method: "PUT",
                            body: updateReserva,
                            headers: {
                                "Content-Type": "application/json",
                            }
                        });
                        window.location = "/";
                    });

                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelado',
                        'No ha pasado nada ;)',
                        'info'
                    )
                }
            })
        }
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
                                <h3 className='h3aling'><strong>Descripcion</strong></h3>
                                <h5>{peliculadeReserva[0].synopsis}</h5>
                                <h4><strong>Hora de la funcion: </strong>{reserva[0].hour}</h4>
                                <h4><strong>Valor de la funcion: </strong>{reserva[0].bookingValue}</h4>
                                <h5><strong>Selecciona las sillas que quieres liberar </strong></h5>
                                {reserva[0].chairs.sort().map((seat, i) => (
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                key={seat + i}
                                                value={seat}
                                                onChange={handleChange}
                                            />
                                        }
                                        label={seat}
                                    />
                                ))}
                                <div className='h3aling'>
                                    <button type="button" className="btn btn-danger deleteBoton " onClick={actualizarReserva}/* onClick={() => handleDeleteClick(id)} */>
                                        liberar
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        );
    }
}
export default EditarReserva