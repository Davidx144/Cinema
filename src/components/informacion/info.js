import "./info.css"
import BeatLoader from "react-spinners/BeatLoader"
import { Container, Row } from "react-bootstrap";
import { Col } from 'reactstrap';
import Swal from 'sweetalert2'
import React, { useState } from 'react'
import clsx from 'clsx'
import { Boton } from '../reguistro/elementos/Formularios'
import { SMTPClient } from 'emailjs';
import emailjs from '@emailjs/browser';

/* const LocalStorageUser = localStorageKey => {
    const [value, setValue] = React.useState(
      localStorage.getItem(localStorageKey) || 'Usuario'
    );
  
    React.useEffect(() => {
      localStorage.setItem("nombre_usuario", value);
    }, [value]);
  
    return [value, setValue];
  }; */

const Infopeli = () => {

/*     const [nombreUsuario, setValue] = LocalStorageUser(
        'nombre_usuario'
      );
 */
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
        /* console.log(videoEmbe) */
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
{/*                             <div>
                                <h5> <strong>Genero:</strong> {peliculaActual[0].gender}  <strong>Duracion:</strong>  {peliculaActual[0].duration}  </h5>
                            </div> */}
                            <div className="infoPeli">
<div>
                                <h5><span class="badge bg-secondary">Genero:</span> <span class="badge rounded-pill bg-light text-dark">{peliculaActual[0].gender}</span>  {/* <span class="badge bg-secondary">Duracion:</span>  <span class="badge rounded-pill bg-light text-dark">{peliculaActual[0].duration} Minutos </span>  */} </h5>
                            </div>
                            <div>
                                <h5>{/* <span class="badge bg-secondary">Genero:</span> <span class="badge rounded-pill bg-light text-dark">{peliculaActual[0].gender}</span>  */} <span class="badge bg-secondary">Duracion:</span>  <span class="badge rounded-pill bg-light text-dark">{peliculaActual[0].duration} Minutos </span>  </h5>
                            </div>
                            <div>
                                <h5><span class="badge bg-secondary">Formato:</span> <span class="badge rounded-pill bg-light text-dark">{peliculaActual[0].format}  </span> {/* <span class="badge bg-secondary">Valor:</span> <span class="badge rounded-pill bg-light text-dark">{peliculaActual[0].value}$ Pesos</span>  */}</h5>
                            </div>
                            <div>
                                <h5><span class="badge bg-secondary">Valor:</span> <span class="badge rounded-pill bg-light text-dark">{peliculaActual[0].value}$ Pesos</span> </h5>
                            </div>
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
{/*                 <div>
                    <form onSubmit={sendEmail}>
                        <label>nombre</label>
                        <input type='text' name='name' classname='form-control' />
                        <label>correo</label>
                        <input type='text' name='user_email' classname='form-control' />
                        <input type="submit" value="Send" />

                    </form>
                </div> */}
            </Container>
        )
    }
}

var URLactual = (window.location);
var url = (URLactual.pathname)
var ids = url.slice(6)
var idss = url.slice(0, 6)
/* console.log(url) */
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


    /* console.log(peliculaActual[0]) */

    localStorage.setItem('nombre_peli', peliculaActual[0].title);
    localStorage.setItem('valor_peli', peliculaActual[0].value);
    localStorage.setItem('hora_peli', peliculaActual[0].hour);
    localStorage.setItem('Id_peli', peliculaActual[0]._id);

}

if (idss === "/info/") {
    var peliculasParaReserva = (`/api/bookingsMovie/${ids}`)
}

let reservasActual = []
/* let horariode6 = [] */

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

    /* .then(function () { */
    for (var i = 0; i < (reservasActual.length); i++) {
        /* console.log(i) */
        if (reservasActual[i].hour === "12:00 PM") {
            Aux12 = horario12.concat(reservasActual[i].chairs)
            horario12 = (Aux12)
            /* console.log("las sillas de las 12 son:" + horario12) */

        } else if (reservasActual[i].hour === "3:00 PM") {
            Aux3 = horario3.concat(reservasActual[i].chairs)
            horario3 = (Aux3)
            /* console.log("las sillas de las 3 son:" + horario3) */

        } else if (reservasActual[i].hour === "6:00 PM") {
            Aux6 = horario6.concat(reservasActual[i].chairs)
            horario6 = (Aux6)
            /* console.log("las sillas de las 6 son:" + horario6) */

        } else if (reservasActual[i].hour === "9:00 PM") {
            Aux9 = horario9.concat(reservasActual[i].chairs)
            horario9 = (Aux9)
            /* console.log("las sillas de las 9 son:" + horario9) */
        }
    }
    localStorage.setItem('horario12', horario12);
    localStorage.setItem('horario3', horario3);
    localStorage.setItem('horario6', horario6);
    localStorage.setItem('horario9', horario9);

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

const LocalStorageHora = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem("hora_peli", value);
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

/* sendEmail(nombre_Pelicula) 
function sendEmail(e){
    emailjs.sendForm('service_hswwe19',
    'template_249901c',
    e.target,
    'user_uUWNJ9j8dy0YAL3sq1nV7'
    ).then(res=>{
        console.log("Esto fue"+ res);
    }).catch(err=> console.log("Esto fue"+err))
    
} */

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

    const [id_Pelicula, setValue] = LocalStorageMovie(
        'Id_peli'
    );

    const [id_Usuario, setValueUser] = LocalStorageUser(
        'id_usuario'
    );

    const [nombre_Pelicula, setValueNombrePelicula] = LocalStorageNombrePeli(
        'nombre_peli'
    );

    const [valor_Pelicula, setValueValorPelicula] = LocalStorageValor(
        'valor_peli'
    );

    const [hora_Pelicula, setValueHoraPeli] = LocalStorageHora(
        'hora_peli'
    );

    const [nombreUsuario, setValueNombreUsuario] = LocalStorageNombre(
        'nombre_usuario'
    );

    const [emailusuario, setValueEmail] = LocalStorageEmail(
        'email_usuario'
    );

    /*     console.log("Este es el id de la peli : " + id_Pelicula)
        console.log("Este es el id del usuario : " + id_Usuario) */

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
                /* console.log(selectedList) */
                /* let ocupadas = [] */
                /*           var Aux = []
                          movies[0].lista.map(movie => (
                            console.log(movie[1]),
                            Aux = ocupadas.concat(movie[1]),
                            ocupadas = Aux
                            
                            )) */
                /* movies[0].occupied.concat(ocupadas) */

                /*                 console.log("El id de la peli es: " + id_Pelicula)
                                console.log("El id del usuario es: " + id_Usuario)
                                console.log("El nombre de la peli es: " + nombre_Pelicula)
                                console.log("El valor de la peli es: " + valor_Pelicula)
                                console.log("la hora de la peli es: " + selectedMovie.hora)
                                console.log("las sillas seleccionadas son: " + selectedSeats) */

                




                var reservaPelicula = {
                    id_movie: id_Pelicula,
                    id_user: id_Usuario,
                    chairs: selectedSeats,
                    movieValue: valor_Pelicula,
                    hour: selectedMovie.hora,
                    title: nombre_Pelicula,
                    bookingValue: valor_Pelicula * selectedSeats.length
                };


                var body_email= {
                    chairs: selectedSeats,
                    name: nombreUsuario,
                    email: emailusuario,
                    hour: selectedMovie.hora,
                    bookingValue: valor_Pelicula * selectedSeats.length,
                    title: nombre_Pelicula,
                }
                sendEmail()
                function sendEmail() {
                    /* e.preventDefault(); */
                    /* emailjs.sendForm(e) */
                    emailjs.send('service_hswwe19',
                        'template_249901c',
                        /* e.target, */
                        body_email,
                        /* {name: e.name,
                        user_email: e.user_email
                        }, */
                        'user_uUWNJ9j8dy0YAL3sq1nV7'
                    ).then(res => {
                        console.log("Esto fue" + res);
                    }).catch(err => console.log("Esto fueee" + err))
                }

                console.log(body_email)
                const caragarReserva = JSON.stringify(reservaPelicula);



                reguistarReserva();
                async function reguistarReserva() {
                    /* sendEmail(caragarReserva) */
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
                    {nombreUsuario==="Usuario" &&
                    <Boton onClick={handleSubmit2} >Inicio</Boton>
                    }
                    {nombreUsuario!="Usuario" &&
                    <Boton onClick={handleSubmit} >Reservar</Boton>
                    }
                </div>
            </div>
        </div>
    )
}


function Movies({ movie, onChange }) {



    const [hararioalas12, setValueHorario12] = LocalStorageHorario12(
        'horario12'
    );

    const [hararioalas3, setValueHorario3] = LocalStorageHorario3(
        'horario3'
    );

    const [hararioalas6, setValueHorario6] = LocalStorageHorario6(
        'horario6'
    );

    const [hararioalas9, setValueHorario9] = LocalStorageHorario9(
        'horario9'
    );

    const [valor_Pelicula, setValueValorPelicula] = LocalStorageValor(
        'valor_peli'
    );

    var aux = hararioalas6
    movies[0].occupied = hararioalas12
    movies[0].price = valor_Pelicula

    /* console.log(hararioalas6) */

    movies[1].occupied = hararioalas3
    movies[1].price = valor_Pelicula

    movies[2].occupied = aux
    movies[2].price = valor_Pelicula

    movies[3].occupied = hararioalas9
    movies[3].price = valor_Pelicula


    /*     const movies4 = [
            {
                price: valor_Pelicula,
                occupied: hararioalas12,
                hora: "12:00 PM",
            },
            {
                price: valor_Pelicula,
                occupied: hararioalas3,
                hora: "3:00 PM",
            },
            {
                price: valor_Pelicula,
                occupied: hararioalas6,
                hora: "6:00 PM",
            },
            {
                price: valor_Pelicula,
                occupied: hararioalas9,
                hora: "9:00 PM",
            },
        ] */

    /*     console.log('selectedMovie.occupied')
    
        console.log(movie.occupied) */
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
        /* console.log(seat) */
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


        return (


            <div className="Cinema">
                <div className="screen" />

                <div className="seats">
                    {seats.map(seat => {
                        /* var isOccupied = [] */
                        const isSelected = selectedSeats.includes(seat)
                        const isOccupied = movie.occupied.split(",").map((item) => parseInt(item)).includes(seat)

                        /* console.log(selectedSeats)
                        console.log(movie.occupied.split(",")) */

                        /* console.log(isOccupied,seat)
                        console.log(isSelected,seat) */

                        /* var aux9 = (movie.occupied.includes(seat))
                        const isOccupied = Object.assign([], aux9); */
                        /* console.log(seat) */
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