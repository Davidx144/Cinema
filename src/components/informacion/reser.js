var URLactual = (window.location);
var url = (URLactual.pathname)
var ids = url.slice(6)
var idss = url.slice(0, 6)
console.log(url)
if (idss === "/info/") {
    var apiInfo = (`/api/info/${ids}`)
}
if (idss === "/info/") {
    var peliculasParaReserva = (`/api/bookingsMovie/${ids}`)
}

infoReservas()
let reservasActual = []
var Aux6 = []
var horario6 = []

async function infoReservas(props) {
    const respuestas = await fetch(peliculasParaReserva, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    reservasActual = await respuestas.json()
    console.log(reservasActual)
    reservasActual.map( reserva =>(
        /* console.log("eso") */
        dividirHora(reserva)
    ))
}

function dividirHora (reser){
    if(reser.hour === "6:00 PM"){
        /*           var Aux = []
                          movies[0].lista.map(movie => (
                            console.log(movie[1]),
                            Aux = ocupadas.concat(movie[1]),
                            ocupadas = Aux
                            
                            )) */
        Aux6 = horario6.concat(reser.chairs) 
        horario6 = Aux6
        console.log(horario6)
    }
}


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
        occupied: horario6,
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