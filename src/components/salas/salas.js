import './salas.css'
import React, { useState } from 'react'
import clsx from 'clsx'
import { Boton } from '../reguistro/elementos/Formularios'
import Swal from 'sweetalert2'

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

const movies = [
  {
    name: 'Avenger',
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
    lista:[['Juan',[1,4,5]],['nelson',[7,40]],['sara',[2]]],
    hora: "10:00 AM",
  },
  {
    name: 'Joker',
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
    hora: "2:00 PM",
  },
  {
    name: 'Toy story',
    price: 8,
    occupied: [37, 25, 44, 13, 2, 31, 0],
    hora: "6:00: PM",
  },
  {
    name: 'the lion king',
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
    hora: "8:00 PM",
  },
  {
    id_pelicula: "ddd",
    id_user: "dd",
    precio: "33",
    hora: "10:00 PM",
    listaReservas: [['Juan',[1,4,5]],['nelson',[7,40]],['sara',[2]]],
    occupied: [20, 21, 30, 1, 2, 8],

  }
]

const seats = Array.from({ length: 8 * 6 }, (_, i) => i)

export default function App() {

  const [id_Pelicula, setValue] = LocalStorageMovie(
    'Id_peli'
  );

  const [id_Usuario, setValueUser] = LocalStorageUser(
    'id_usuario'
  );

  console.log("Este es el id de la peli : "+id_Pelicula)
  console.log("Este es el id del usuario : "+id_Usuario)

 /*  const handleSubmit = (e) => {
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
        var Aux = []
        movies[0].lista.map(movie => (
          console.log(movie[1]),
          Aux = ocupadas.concat(movie[1]),
          ocupadas = Aux
          
          ))
        movies[0].occupied.concat(ocupadas)
        console.log(ocupadas)

        console.log(selectedSeats)
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
  } */

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
          <Boton /* onClick={handleSubmit}  */>Reservar</Boton>
        </div>
      </div>
    </div>
  )
}

function Movies({ movie, onChange }) {
  return (
    <div className="Movies">
      <label htmlFor="movie">Selecciona pelicula</label>
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