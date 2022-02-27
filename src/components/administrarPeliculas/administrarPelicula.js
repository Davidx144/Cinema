import React, { useState, Fragment } from "react";
import "./administrarPelicula.css";
/* import data from "./mock-data.json"; */
import ListarPeliculas from "./listarPeliculas";
/* import EditableRow from "./EditableRow"; */
import { Container } from "react-bootstrap";
import Swal from 'sweetalert2'
import BeatLoader from "react-spinners/BeatLoader"
/* import { BiAlarm } from "react-icons/bi"; */


const EliminarPelicula = () => {
    /* listaPeliculaas(); */
    const [loading, setLoading] = useState(true)
    const cambiarEstado = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }


    console.log('listaDePeliculas')
    console.log(listaDePeliculaas)

    /* const [contacts, setContacts] = useState(listaDePeliculaas); */

    const handleEditClick = (peliID) => {
        console.log(peliID)
        /* alert('gg') */
        window.location.assign(`/editar/` + (peliID))
    }

    const handleDeleteClick = (peliID) => {
        var reservasActual = []
        console.log(peliID)
        var reservasPeli = (`/api/bookingsMovie/${peliID}`)

        /*  */
        infoReservas()
        async function infoReservas(props) {
            const respuestas = await fetch(reservasPeli, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            reservasActual = await respuestas.json()

            if (reservasActual.length === 0) {
                console.log("AQUI NO HAY RESERVAS")
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-success',
                        cancelButton: 'btn btn-danger'
                    },
                    /* buttonsStyling: false */
                })

                swalWithBootstrapButtons.fire({
                    title: '¿Desea eliminar la película?',
                    text: "¡La película se borrará completamente de la base de datos!",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Si, borrar.',
                    cancelButtonText: 'No, cancelar.',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        swalWithBootstrapButtons.fire(
                            'Película borrada',
                            'Todos los registros han sido eliminados.',
                            'success'
                        ).then(function () {
                            fetch('api/delete/' + peliID, {
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
            } else {
                console.log("NO SE PUEDE BORRAR")
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '¡No se pueden borrar películas con reservas activas! :(',
                    /* footer: '<a href="">Why do I have this issue?</a>' */
                  })
            }
        }

        /*  */


        /*  */

    };
    console.log(listaDePeliculaas)


    if (listaDePeliculaas === [] || loading) {
        cambiarEstado()
        console.log('esto es ' + listaDePeliculaas)
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
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Destacada</th>
                                    <th scope="col">En Cartelera</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaDePeliculaas.map((i) => (
                                    <Fragment>
                                        <ListarPeliculas
                                            /* contact={i.title,i.gender} */
                                            title={i.title}
                                            relevant={i.relevant}
                                            cartelera={i.cartelera}
                                            id={i._id}
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

listaPeliculaas();
let listaDePeliculaas = []
async function listaPeliculaas(props) {
    const respuesta = await fetch('/api/movies', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    listaDePeliculaas = await respuesta.json()
}

export default EliminarPelicula;