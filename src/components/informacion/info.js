//agregar la reserva
/*     const onSubmit = (data) => {
        console.log(data.title);
        console.log(data);
        const newPelicula = (JSON.stringify(data));
        console.log(newPelicula)
 
        registerMovie();
        async function registerMovie() {
            const respuesta = await fetch('/api/registerMovie', {
                method: "POST",
                body: newPelicula,
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const exitoso = await respuesta.json();
            if (exitoso.succes === true) {
                console.log("Guardado")
                console.log(exitoso)
                Swal.fire({
                    icon: 'success',
                    title: 'Bien',
                    text: 'Pelicula registrada correctamente',
                    footer: '<a href="/#deets">Inicia seccion</a>'
                }).then(function () {
                    window.location = "/";
                });
            } else {
                console.log("No guardado")
                console.log(exitoso)
                Swal.fire({
                    href: "/",
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Parase que la pelicula ya existe',
                    footer: '<a href="/#deets">Inicia seccion</a>'
                })
            }
        }
    }; */
import "./info.css"
import BeatLoader from "react-spinners/BeatLoader"
import { Container, Row } from "react-bootstrap";
import { Col } from 'reactstrap';
import Swal from 'sweetalert2'
import React, { useState } from 'react'
import clsx from 'clsx'
import { Boton } from '../reguistro/elementos/Formularios'


const Infopeli = () => {

    const [loading, setLoading] = useState(true)
    const cambiarEstado = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }
    if (loading /*|| peliculaActual === []*//* peliCargada === false */) {
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
        var videoEmbe = ("https://www.youtube.com/embed/" + (peliculaActual[0].trailer).slice(-11))
        console.log(videoEmbe)
        return (
            <Container >
                <div className='infoPelic'>
                    <Row>
                        <Col sm={6}>
                            <h2><strong size="20">{peliculaActual[0].title}</strong></h2>
                            <div >
                                <img src={peliculaActual[0].img} className='imag' />
                            </div>
                            <div>
                                <p>
                                    {peliculaActual[0].synopsis}
                                </p>
                            </div>
                            <div>
                                <h5> <strong>Genero:</strong> {peliculaActual[0].gender}  <strong>Duracion:</strong>  {peliculaActual[0].duration}  </h5>
                            </div>
                            <div>
                                <h5>{/* <strong> Hora:</strong> {peliculaActual[0].hour}  */}<strong>Formato:</strong>{peliculaActual[0].format}  <strong> Valor:</strong>  {peliculaActual[0].value}</h5>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <Salas></Salas>

                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <div className="embed-responsive">
                            <iframe className='videoYoutube' src={videoEmbe} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                            </iframe>
                        </div>
                    </Row>

                </div>
            </Container>
        )
    }
}

var URLactual = (window.location);
var url = (URLactual.pathname)
var ids = url.slice(6)
var idss = url.slice(0, 6)
console.log(url)
if (idss === "/info/") {
    var apiInfo = (`/api/info/${ids}`)
}

infoPelicula()
let peliculaActual = []
async function infoPelicula(props) {
    const respuestas = await fetch(apiInfo, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    peliculaActual = await respuestas.json()


    console.log(peliculaActual[0])

    localStorage.setItem('nombre_peli', peliculaActual[0].title);
    localStorage.setItem('valor_peli', peliculaActual[0].value);
    localStorage.setItem('hora_peli', peliculaActual[0].hour);
    localStorage.setItem('Id_peli', peliculaActual[0]._id);

}

if (idss === "/info/") {
    var peliculasParaReserva = (`/api/bookingsMovie/${ids}`)
}

let reservasActual = []
let horariode6 = []
let Aux6 = []
let horario6 = []

infoReservas()
// eslint-disable-next-line react-hooks/rules-of-hooks
/* const [horario6, setSelectedAux6] = useState([]) */
async function infoReservas(props) {
    const respuestas = await fetch(peliculasParaReserva, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    reservasActual = await respuestas.json()

    /* .then(function () { */
    for (var i = 0; i < (reservasActual.length); i++) {
        /* console.log(i) */
        if (reservasActual[i].hour === "6:00 PM") {
            Aux6 = horario6.concat(reservasActual[i].chairs)
            horario6 = (Aux6)

            /* horariode6.concat(reservasActual.chairs) */

            console.log("las sillas de las 6 son:" + horario6)
        }
    }
    localStorage.setItem('horario6', horario6);

    /* }) */
    /* const eli = (reservasActual.length)
    console.log(reservasActual.length) */
}
/* reservasActual.map(reserva => (
    dividirHora(reserva)
)) */

/* function dividirHora(reser) {
    if (reser.hour === "6:00 PM") {
        Aux6 = horario6.concat(reser.chairs)
        horario6 = (Aux6)
        console.log(horario6)
    }
} */




/* const horario6 = reservasActual.map */



//la sala visual

const movies = [
    {
        name: 'Avenger',
        price: 10,
        occupied: [20, 21, 30, 1, 2, 8],
        lista: [['Juan', [1, 4, 5]], ['nelson', [7, 40]], ['sara', [2]]],
        hora: "12:00 AM",
    },
    {
        name: 'Joker',
        price: 12,
        occupied: [9, 41, 35, 11, 65, 26],
        hora: "3:00 PM",
    },
    {
        name: 'Toy story',
        price: 8,
        occupied: [44],
        hora: "6:00 PM",
    },
    {
        name: 'the lion king',
        price: 9,
        occupied: [10, 12, 50, 33, 28, 47],
        hora: "9:00 PM",
    },
    /*     {
            id_pelicula: "ddd",
            id_user: "dd",
            precio: "33",
            hora: "10:00 PM",
            listaReservas: [['Juan', [1, 4, 5]], ['nelson', [7, 40]], ['sara', [2]]],
            occupied: [20, 21, 30, 1, 2, 8],
    
        } */
]

const seats = Array.from({ length: 8 * 6 }, (_, i) => i)

const LocalStorageMovie = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem("Id_peli", value);
    }, [value]);

    return [value, setValue];
};

const LocalStorageUser = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem("id_usuario", value);
    }, [value]);

    return [value, setValue];
};

const LocalStorageNombrePeli = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem("nombre_peli", value);
    }, [value]);

    return [value, setValue];
};

const LocalStorageValor = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem("valor_peli", value);
    }, [value]);

    return [value, setValue];
};

const LocalStorageHora = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem("hora_peli", value);
    }, [value]);

    return [value, setValue];
};

const LocalStorageHorario6 = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem("horario6", value);
    }, [value]);

    return [value, setValue];
};

function Salas() {




    const reservasPorHoras = [
        {
            name: 'Avenger',
            price: 10,
            occupied: [20, 21, 30, 1, 2, 8],
            lista: [['Juan', [1, 4, 5]], ['nelson', [7, 40]], ['sara', [2]]],
            hora: "12:01 AM",
        },
        {
            name: 'Joker',
            price: 12,
            occupied: [9, 41, 35, 11, 65, 26],
            hora: "3:00 PM",
        },
        {
            name: 'Toy story',
            price: 8,
            occupied: [37, 25, 44, 13, 2, 3, 0],
            hora: "6:00 Pm",
        },
        {
            name: 'the lion king',
            price: 9,
            occupied: [10, 12, 50, 33, 28, 47],
            hora: "9:00 PM",
        },
        /*     {
                id_pelicula: "ddd",
                id_user: "dd",
                precio: "33",
                hora: "10:00 PM",
                listaReservas: [['Juan', [1, 4, 5]], ['nelson', [7, 40]], ['sara', [2]]],
                occupied: [20, 21, 30, 1, 2, 8],
        
            } */
    ]

    /*     localStorage.setItem('nombre_peli', peliculaActual[0].title);
        localStorage.setItem('valor_peli', peliculaActual[0].value);
        localStorage.setItem('hora_peli', peliculaActual[0].hour);
        localStorage.setItem('Id_peli', peliculaActual[0]._id); */


    const [id_Pelicula, setValue] = LocalStorageMovie(
        'Id_peli'
    );

    const [id_Usuario, setValueUser] = LocalStorageUser(
        'id_usuario'
    );

    const [nombre_Pelicula, setValueNombrePelicula] = LocalStorageUser(
        'nombre_peli'
    );

    const [valor_Pelicula, setValueValorPelicula] = LocalStorageNombrePeli(
        'valor_peli'
    );

    const [hora_Pelicula, setValueHoraPeli] = LocalStorageValor(
        'hora_peli'
    );

    console.log("Este es el id de la peli : " + id_Pelicula)
    console.log("Este es el id del usuario : " + id_Usuario)

    const handleSubmit = (e) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },

        })

        swalWithBootstrapButtons.fire({
            title: '¿Seguro quiere reservar?',
            text: "Después de aceptar se harán las reservas correspondientes",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, Reserva!',
            cancelButtonText: 'No, cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(selectedList)
                let ocupadas = []
                /*           var Aux = []
                          movies[0].lista.map(movie => (
                            console.log(movie[1]),
                            Aux = ocupadas.concat(movie[1]),
                            ocupadas = Aux
                            
                            )) */
                movies[0].occupied.concat(ocupadas)

                console.log("El id de la peli es: " + id_Pelicula)
                console.log("El id del usuario es: " + id_Usuario)
                console.log("El nombre de la peli es: " + nombre_Pelicula)
                console.log("El valor de la peli es: " + valor_Pelicula)
                console.log("la hora de la peli es: " + selectedMovie.hora)
                console.log("las sillas seleccionadas son: " + selectedSeats)

                console.log(selectedSeats)

                var reservaPelicula = {
                    id_movie: id_Pelicula,
                    id_user: id_Usuario,
                    chairs: selectedSeats,
                    movieValue: valor_Pelicula,
                    hour: selectedMovie.hora,
                    title: nombre_Pelicula,
                    bookingValue: valor_Pelicula * selectedSeats.length
                };


                const caragarReserva = JSON.stringify(reservaPelicula);

                reguistarReserva();
                async function reguistarReserva() {
                    const respuesta = await fetch('/api/registerBooking', {
                        method: "POST",
                        body: caragarReserva,
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });
                    const exitoso = await respuesta.json();
                }

                swalWithBootstrapButtons.fire(
                    'Reservado!',
                    'Tus boletas se han reservado.',
                    'success'
                ).then(function () {
                    window.location = "/";
                });
            } else if (

                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'No se realizó la reserva',
                    'error'
                )
            }
        })
    }

    const [selectedList, setSelectedList] = useState(movies[0].lista)

    const [selectedMovie, setSelectedMovie] = useState(movies[0])
    const [selectedSeats, setSelectedSeats] = useState([])

    return (
        <div className="Salas">
            <div className="App">
                <Movies
                    movie={selectedMovie}
                    onChange={movie => {
                        setSelectedSeats([])
                        setSelectedMovie(movie)
                    }}
                />
                <ShowCase />
                <Cinema
                    movie={selectedMovie}
                    selectedSeats={selectedSeats}
                    onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
                />

                <p className="info">
                    Tienes seleccionado <span className="count">{selectedSeats.length}</span>{' '}
                    puestos, por un precio de{' '}
                    <span className="total">
                        {selectedSeats.length * selectedMovie.price}$
                    </span>
                </p>
                <div>
                    <Boton onClick={handleSubmit} >Reservar</Boton>
                </div>
            </div>
        </div>
    )
}

function Movies({ movie, onChange }) {
    const [hararioalas6, setValue] = LocalStorageHorario6(
        'horario6'
    );
    const movies4 = [
        {
            name: 'Avenger',
            price: 10,
            occupied: [20, 21, 30, 1, 2, 8],
            lista: [['Juan', [1, 4, 5]], ['nelson', [7, 40]], ['sara', [2]]],
            hora: "12:00 AM",
        },
        {
            name: 'Joker',
            price: 12,
            occupied: [9, 41, 35, 11, 65, 26],
            hora: "3:00 PM",
        },
        {
            name: 'Toy story',
            price: 8,
            occupied: hararioalas6,
            hora: "6:00 PM",
        },
        {
            name: 'the lion king',
            price: 9,
            occupied: [10, 12, 50, 33, 28, 47],
            hora: "9:00 PM",
        },
        /*     {
                id_pelicula: "ddd",
                id_user: "dd",
                precio: "33",
                hora: "10:00 PM",
                listaReservas: [['Juan', [1, 4, 5]], ['nelson', [7, 40]], ['sara', [2]]],
                occupied: [20, 21, 30, 1, 2, 8],
        
            } */
    ]
    return (
        <div className="Movies">
            <label htmlFor="movie"><strong>Selecciona el horario</strong></label>
            <select
                id="movie"
                value={movie.hora}
                onChange={e => {
                    onChange(movies4.find(movie => movie.hora === e.target.value))
                }}
            >
                {movies4.map(movie => (
                    <option key={movie.hora} value={movie.hora}>
                        {movie.hora} {/* (${movie.price}) */}
                    </option>
                ))}
            </select>
        </div>
    )
}

function ShowCase() {
    return (
        <ul className="ShowCase">
            <li>
                <span className="seat" /> <small>N/A</small>
            </li>
            <li>
                <span className="seat selected" /> <small>Seleccionadas</small>
            </li>
            <li>
                <span className="seat occupied" /> <small>Ocupadas</small>
            </li>
        </ul>
    )
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
    function handleSelectedState(seat) {
        const isSelected = selectedSeats.includes(seat)
        if (isSelected) {
            onSelectedSeatsChange(
                selectedSeats.filter(selectedSeat => selectedSeat !== seat),
            )
        } else {
            onSelectedSeatsChange([...selectedSeats, seat])
        }
    }

    return (

        <div className="Cinema">
            <div className="screen" />

            <div className="seats">
                {seats.map(seat => {
                    const isSelected = selectedSeats.includes(seat)
                    const isOccupied = movie.occupied.includes(seat)
                    return (
                        <span
                            tabIndex="0"
                            key={seat}
                            className={clsx(
                                'seat',
                                isSelected && 'selected',
                                isOccupied && 'occupied',
                            )}
                            onClick={isOccupied ? null : () => handleSelectedState(seat)}
                            onKeyPress={
                                isOccupied
                                    ? null
                                    : e => {
                                        if (e.key === 'Enter') {
                                            handleSelectedState(seat)
                                        }
                                    }
                            }
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Infopeli;