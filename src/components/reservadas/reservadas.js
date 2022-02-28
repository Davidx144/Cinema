import React, { useState, Fragment } from "react";
import "./reservadas.css";
/* import data from "./mock-data.json"; */
import ListaReservadas from "./listaReservadas";
/* import EditableRow from "./EditableRow"; */
import { Container, Row, Col } from "react-bootstrap";
import Swal from 'sweetalert2'
import BeatLoader from "react-spinners/BeatLoader"
import EditarReserva from "../editarReserva/editarReserva";
/* import { BiAlarm } from "react-icons/bi"; */
import emailjs from '@emailjs/browser';



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

    const [nombreUsuario, setValueNombreUsuario] = LocalStorageNombre(
        'nombre_usuario'
    );

    const [emailusuario, setValueEmail] = LocalStorageEmail(
        'email_usuario'
    );

    /* listaPeliculaas(); */
    const [loadinga, setLoading] = useState(true)
    const cambiarEstado = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }


    console.log('listaDereservas')
    console.log(reservasDelUsuario)

    /* const [contacts, setContacts] = useState(listaDePeliculaas); */

    const handleEditClick = (reservaId, movieId) => {
        console.log(reservaId)
        /* return (<EditarReserva reserva={reservaId}></EditarReserva>) */
        /* alert('gg') */
        window.location.assign(`/editarReserva/` + (reservaId) + ("/") + (movieId))
    }

    const handleDeleteClick = (reservaId, tituloPeli, horaPeli) => {
        console.log(reservaId)

        /*  */
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            /* buttonsStyling: false */
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
                    /* window.location = "/"; */
                });

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'No ha pasado nada ;)',
                    'info'
                )
            }
        })

        /*  */

    };
    console.log(reservasDelUsuario)


    if (reservasDelUsuario === [] || loadinga) {
        cambiarEstado()
        console.log('esto es ' + reservasDelUsuario)
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
                <Row>
                    {reservasDelUsuario.map((i) => (
                        <Col sm={3}>
                            <div class="card-reserva">
                                <div class="card-header-reserva">
                                    <h5><strong>{i.title}</strong></h5>
                                </div>
                                <div class="card-body-reserva">
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
                {/* <ul className="lista1">
                    <li>
                        <div class="card-reserva">
                            <div class="card-header-reserva"></div>
                            <div class="card-body-reserva"></div>
                        </div>
                    </li>
                    <li>
                        <div class="card-reserva">
                            <div class="card-header-reserva"></div>
                            <div class="card-body-reserva"></div>
                        </div>
                    </li>
                </ul> */}


                {/* <div className="app-container-delete">
                    <form >
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">Sillas</th>
                                    <th scope="col">Hora</th>
                                    <th scope="col">Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reservasDelUsuario.map((i) => (
                                    <Fragment>
                                        <ListaReservadas
                                            
                                            title={i.title}
                                            chairs={i.chairs}
                                            id={i._id}
                                            hour={i.hour}
                                            id_movie={i.id_movie}
                                            bookingValue={i.bookingValue}
                                            handleDeleteClick={handleDeleteClick}
                                            handleEditClick={handleEditClick}

                                        />
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    </form>
                </div> */}
            </Container>
        );
    }
};

var URLactual = (window.location);
var urlreserva = (URLactual.pathname)
var idsUserReservas = urlreserva.slice(14)
var idsUser = urlreserva.slice(0, 14)

console.log("este" + idsUser)
if (idsUser === "/bookingsUser/") {
    var apiReservas = (`/api/bookingsUser/${idsUserReservas}`)
}
console.log("hola" + apiReservas)

var reservasDelUsuario = [/* {title:"El Closet",hour:"3:00 PM",chairs:[0,1,6],bookingValue:"23400"},{title:"Scream La Película",hour:"12:00 PM",chairs:[1,3],bookingValue:"7800"} */]
reservasUsuario()
async function reservasUsuario(props) {
    const respuestas = await fetch(apiReservas, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    reservasDelUsuario = await respuestas.json()
    console.log(reservasDelUsuario)

}



export default ReservadasUsuario;