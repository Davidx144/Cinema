import React, { useState} from "react";
import "./reservadas.css";
import { Container, Row, Col } from "react-bootstrap";
import Swal from 'sweetalert2'
import BeatLoader from "react-spinners/BeatLoader"
import emailjs from '@emailjs/browser';
import image from '../../assert/User-research.png'



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

const ReservadasUsuario = () => {

    const [nombreUsuario] = LocalStorageNombre(
        'nombre_usuario'
    );

    const [emailusuario] = LocalStorageEmail(
        'email_usuario'
    );
    const [loadinga, setLoading] = useState(true)
    const cambiarEstado = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }


    /* console.log('listaDereservas')
    console.log(reservasDelUsuario) */

    const handleEditClick = (reservaId, movieId) => {
        /* console.log(reservaId) */
        window.location.assign(`/editarReserva/` + (reservaId) + ("/") + (movieId))
    }

    const handleDeleteClick = (reservaId, tituloPeli, horaPeli) => {
        /* console.log(reservaId) */
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
        })

        swalWithBootstrapButtons.fire({
            title: '¿Desea eliminar la reserva?',
            text: "¡La reserva se borrará completamente de la base de datos!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si, borrar.',
            cancelButtonText: 'No, cancelar.',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                var body_email = {
                    name: nombreUsuario,
                    email: emailusuario,
                    title: tituloPeli,
                    hour: horaPeli,
                }
                sendEmail()
                function sendEmail() {
                    emailjs.send('service_p8ggm3o',
                        'template_nzb8uty',
                        body_email,
                        'user_uWUrSMAEt8LcbPa7531Oa'
                    ).then(res => {
                        console.log("Esto fue" + res);
                    }).catch(err => console.log("Esto fueee" + err))
                }

                swalWithBootstrapButtons.fire(
                    'Reserva borrada',
                    'Todos los registros han sido eliminados.',
                    'success'
                ).then(function () {


                    fetch('/api/deleteBooking/' + reservaId, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });



                    window.location.reload(true)
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

    };
    /* console.log(reservasDelUsuario) */


    if (loadinga) {
        cambiarEstado()
        /* console.log('esto es ' + reservasDelUsuario) */
        return (
            <div>
                <Container className='loading'>
                    <BeatLoader
                        size={15}
                    />
                </Container>
            </div>
        )
    } else if(reservasDelUsuario.length===0 ){
        return(
            <div>
                <Container>
                <div className='NotFundReserva'>
                    <h3><strong>Parece no tienes reservas actualmente</strong></h3>
                    <img className="card-img-top" src={image} alt="Card cap" href="/" />
                    <br></br>
                    <a href={"/"} className="btn btn-primary botonR" >Volver al inicio</a>
                </div>
            </Container>
            </div>
        )
    }
    else{
        return (
            <Container>
                <Row>
                    {reservasDelUsuario.map((i) => (
                        <Col sm={3}>
                            <div className="card-reserva">
                                <div className="card-header-reserva">
                                    <h5><strong>{i.title}</strong></h5>
                                </div>
                                <div className="card-body-reserva">
                                    <p><strong>Sillas: </strong>{i.chairs+"."}</p>
                                    <p><strong>Hora: </strong>{i.hour}</p>
                                    <p><strong>Valor: </strong>{i.bookingValue}$</p>
                                    <button href={`/editar/`}
                                        type="button" className="btn btn-warning editBoton"
                                        onClick={(event) => handleEditClick(i._id, i.id_movie)}
                                    >
                                        Editar
                                    </button>
                                    <button type="button" className="btn btn-danger deleteBoton" onClick={() => handleDeleteClick(i._id, i.title, i.hour)}>
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </Col>
                        
                    ))}
                </Row>
            </Container>
        );
    }
};

var URLactual = (window.location);
var urlreserva = (URLactual.pathname)
var idsUserReservas = urlreserva.slice(14)
var idsUser = urlreserva.slice(0, 14)

/* console.log("este" + idsUser) */
if (idsUser === "/bookingsUser/") {
    var apiReservas = (`/api/bookingsUser/${idsUserReservas}`)
}
/* console.log("hola" + apiReservas) */

var reservasDelUsuario = []
reservasUsuario()
async function reservasUsuario(props) {
    const respuestas = await fetch(apiReservas, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    reservasDelUsuario = await respuestas.json()
    /* console.log(reservasDelUsuario) */
}
export default ReservadasUsuario;