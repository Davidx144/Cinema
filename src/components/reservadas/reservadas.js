import React, { useState, Fragment } from "react";
import "./reservadas.css";
/* import data from "./mock-data.json"; */
import ListaReservadas from "./listaReservadas";
/* import EditableRow from "./EditableRow"; */
import { Container } from "react-bootstrap";
import Swal from 'sweetalert2'
import BeatLoader from "react-spinners/BeatLoader"
/* import { BiAlarm } from "react-icons/bi"; */


const ReservadasUsuario = () => {
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

    const handleEditClick = (reservaId) => {
        console.log(reservaId)
        /* alert('gg') */
        window.location.assign(`/editarReserva/`+(reservaId))
    }

    const handleDeleteClick = (reservaId) => {
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
                swalWithBootstrapButtons.fire(
                    'Reserva borrada',
                    'Todos los registros han sido eliminados.',
                    'success'
                ).then(function () {
                    fetch('/api/deleteBooking/'+reservaId, {
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
                <div className="app-container-delete">
                    <form /* onSubmit={handleEditFormSubmit} */>
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
                                            /* contact={i.title,i.gender} */
                                            title={i.title}
                                            chairs={i.chairs}
                                            id={i._id}
                                            hour={i.hour}
                                            bookingValue={i.bookingValue}
                                            handleDeleteClick={handleDeleteClick}
                                            handleEditClick={handleEditClick}

                                        />
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    </form>
                </div>
            </Container>
        );
    }
};

var URLactual = (window.location);
var urlreserva = (URLactual.pathname)
var idsUserReservas = urlreserva.slice(14)
var idsUser = urlreserva.slice(0, 14)

console.log("este"+idsUser)
if (idsUser === "/bookingsUser/") {
    var apiReservas = (`/api/bookingsUser/${idsUserReservas}`)
}
console.log("hola"+apiReservas)

var reservasDelUsuario =[/* {title:"El Closet",hour:"3:00 PM",chairs:[0,1,6],bookingValue:"23400"},{title:"Scream La Película",hour:"12:00 PM",chairs:[1,3],bookingValue:"7800"} */]
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