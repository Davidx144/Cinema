/* eslint-disable jsx-a11y/alt-text */
import "./info.css"
import BeatLoader from "react-spinners/BeatLoader"
import { Container, Row } from "react-bootstrap";
import { Col } from 'reactstrap';
import Swal from 'sweetalert2'
import React, { useState } from 'react'
import clsx from 'clsx'
import { Boton } from '../reguistro/elementos/Formularios'
import emailjs from '@emailjs/browser';
import image from '../../assert/503-Error.png'

const Infopeli = () => {
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
        var videoEmbe = ("https://www.youtube.com/embed/" + (peliculaActual[0].trailer).slice(-11))
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
                            <div className="infoPeli">
                                <div>
                                    <h5> <span className="badge bg-secondary">Duracion:</span>  <span className="badge rounded-pill bg-light text-dark">{peliculaActual[0].duration} Minutos </span>  </h5>
                                </div>
                                <div>
                                    <h5><span className="badge bg-secondary">Valor:</span> <span className="badge rounded-pill bg-light text-dark">{peliculaActual[0].value}$ Pesos</span> </h5>
                                </div>
                                <div>
                                    <h5><span className="badge bg-secondary">Genero:</span> <span className="badge rounded-pill bg-light text-dark">{peliculaActual[0].gender}</span> </h5>
                                </div>
                                <div>
                                    <h5><span className="badge bg-secondary">Formato:</span> <span className="badge rounded-pill bg-light text-dark">{peliculaActual[0].format}  </span> </h5>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6}>
                            <Salas></Salas>

                        </Col>
                    </Row>
                    <br></br>
                            <div className="embed-responsive videoY ">
                                <iframe className='videoYoutube' src={videoEmbe} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                                </iframe>
                            </div>

                </div>
            </Container>
        )
    }
}

var URLactual = (window.location);
var url = (URLactual.pathname)
var ids = url.slice(6)
var idss = url.slice(0, 6)
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

    localStorage.setItem('nombre_peli', peliculaActual[0].title);
    localStorage.setItem('valor_peli', peliculaActual[0].value);
    localStorage.setItem('hora_peli', peliculaActual[0].hour);
    localStorage.setItem('Id_peli', peliculaActual[0]._id);
}

if (idss === "/info/") {
    var peliculasParaReserva = (`/api/bookingsMovie/${ids}`)
}

let reservasActual = []

let Aux12 = []
let horario12 = []

let Aux3 = []
let horario3 = []

let Aux6 = []
let horario6 = []

let Aux9 = []
let horario9 = []

infoReservas()
async function infoReservas(props) {
    const respuestas = await fetch(peliculasParaReserva, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    reservasActual = await respuestas.json()
    for (var i = 0; i < (reservasActual.length); i++) {
        if (reservasActual[i].hour === "12:00 PM") {
            Aux12 = horario12.concat(reservasActual[i].chairs)
            horario12 = (Aux12)

        } else if (reservasActual[i].hour === "3:00 PM") {
            Aux3 = horario3.concat(reservasActual[i].chairs)
            horario3 = (Aux3)

        } else if (reservasActual[i].hour === "6:00 PM") {
            Aux6 = horario6.concat(reservasActual[i].chairs)
            horario6 = (Aux6)

        } else if (reservasActual[i].hour === "9:00 PM") {
            Aux9 = horario9.concat(reservasActual[i].chairs)
            horario9 = (Aux9)
        }
    }
    localStorage.setItem('horario12', horario12);
    localStorage.setItem('horario3', horario3);
    localStorage.setItem('horario6', horario6);
    localStorage.setItem('horario9', horario9);


}

//la sala visual

var movies = [
    {
        price: 0,
        occupied: [],
        hora: "12:00 PM",
    },
    {
        price: 0,
        occupied: [],
        hora: "3:00 PM",
    },
    {
        price: 0,
        occupied: [],
        hora: "6:00 PM",
    },
    {
        price: 0,
        occupied: [],
        hora: "9:00 PM",
    },

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

const LocalStorageHorario12 = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem("horario12", value);
    }, [value]);

    return [value, setValue];
};

const LocalStorageHorario3 = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem("horario3", value);
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

const LocalStorageHorario9 = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem("horario9", value);
    }, [value]);

    return [value, setValue];
};


function Salas() {

    const [id_Pelicula] = LocalStorageMovie(
        'Id_peli'
    );

    const [id_Usuario] = LocalStorageUser(
        'id_usuario'
    );

    const [nombre_Pelicula] = LocalStorageNombrePeli(
        'nombre_peli'
    );

    const [valor_Pelicula] = LocalStorageValor(
        'valor_peli'
    );



    const [nombreUsuario] = LocalStorageNombre(
        'nombre_usuario'
    );

    const [emailusuario] = LocalStorageEmail(
        'email_usuario'
    );


    const handleSubmit2 = (e) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parece que no has iniciado sección',
            footer: '<a href="/registro">¿Aún no tienes cuenta? ¡Registrate!</a>'
        })
    }

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
                var reservaPelicula = {
                    id_movie: id_Pelicula,
                    id_user: id_Usuario,
                    chairs: selectedSeats,
                    movieValue: valor_Pelicula,
                    hour: selectedMovie.hora,
                    title: nombre_Pelicula,
                    bookingValue: valor_Pelicula * selectedSeats.length
                };


                var body_email = {
                    chairs: selectedSeats,
                    name: nombreUsuario,
                    email: emailusuario,
                    hour: selectedMovie.hora,
                    bookingValue: valor_Pelicula * selectedSeats.length,
                    title: nombre_Pelicula,
                }
                sendEmail()
                function sendEmail() {
                    emailjs.send('service_hswwe19',
                        'template_249901c',
                        body_email,
                        'user_uUWNJ9j8dy0YAL3sq1nV7'
                    ).then(res => {
                        console.log("Esto fue" + res);
                    }).catch(err => console.log("Esto fueee" + err))
                }
                const caragarReserva = JSON.stringify(reservaPelicula);



                reguistarReserva();
                async function reguistarReserva() {
                    /* sendEmail(caragarReserva) */
                    /* const respuesta = await  */fetch('/api/registerBooking', {
                        method: "POST",
                        body: caragarReserva,
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });
                    /* const exitoso = await respuesta.json(); */
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


    const [selectedMovie, setSelectedMovie] = useState(movies[0])
    const [selectedSeats, setSelectedSeats] = useState([])

    if (peliculaActual[0].cartelera === "SI") {
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
                        {nombreUsuario === "Usuario" &&
                            <Boton onClick={handleSubmit2} >Inicio</Boton>
                        }
                        {nombreUsuario !== "Usuario" &&
                            <Boton onClick={handleSubmit} >Reservar</Boton>
                        }
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="Salas">
                <div className="App">
                    <div className='NotFund'>
                        <h3><strong>Parece que la película no se encuentra disponible.</strong></h3>
                        <img className="card-img-top" src={image} alt="Card cap" href="/" />
                        <br></br>
                        <a href={"/"} className="btn btn-primary botonR" >Volver al inicio</a>
                    </div>

                </div>
            </div>
        )
    }

}


function Movies({ movie, onChange }) {



    const [hararioalas12] = LocalStorageHorario12(
        'horario12'
    );

    const [hararioalas3] = LocalStorageHorario3(
        'horario3'
    );

    const [hararioalas6] = LocalStorageHorario6(
        'horario6'
    );

    const [hararioalas9] = LocalStorageHorario9(
        'horario9'
    );

    const [valor_Pelicula] = LocalStorageValor(
        'valor_peli'
    );

    var aux = hararioalas6
    movies[0].occupied = hararioalas12
    movies[0].price = valor_Pelicula
    movies[1].occupied = hararioalas3
    movies[1].price = valor_Pelicula

    movies[2].occupied = aux
    movies[2].price = valor_Pelicula

    movies[3].occupied = hararioalas9
    movies[3].price = valor_Pelicula


   
    return (
        <div className="Movies">
            <label htmlFor="movie"><strong>Selecciona el horario</strong></label>
            <select
                id="movie"
                value={movie.hora}
                onChange={e => {
                    onChange(movies.find(movie => movie.hora === e.target.value))
                }}
            >
                {movies.map(movie => (
                    <option key={movie.hora} value={movie.hora}>
                        {movie.hora} 
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


            <div className="Cinema">
                <div className="screen" />

                <div className="seats">
                    {seats.map(seat => {
                        const isSelected = selectedSeats.includes(seat)
                        const isOccupied = movie.occupied.split(",").map((item) => parseInt(item)).includes(seat)
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
}

export default Infopeli;