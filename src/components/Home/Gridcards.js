import './Home'
import Info from "../informacion/info"
const Gridcards = props => {
    var scrt_var = 10; 

    const handleClick= (props) => {
        Info(props) 
    }
    return (
        /* col-sm-12 col-lg-6 */
        
        <div class="col-sm-3">
            <div class="grid h-100">
                <img class="card-img-top" src={props.img} alt="Card cap" />
                <div class="card-body bg-dark">
                    <h5 class="card-text text-align-left"><strong>Titulo:</strong> {props.Titulo}</h5>
                    <p class="card-text text-align-left"><strong>Genero:</strong> {props.Genero}</p>
                    <p class="card-text text-align-left"><strong>Duracion:</strong> {props.Duracion} minutos</p>
                    <p class="card-text text-align-left"><strong>Formato:</strong> {props.Formato}</p>
                    <a href={"info/"+(props.id)} class="btn btn-primary" >Reservar</a>
                </div>
            </div>
            <br></br>
            { /* <Gridcards img={peli1} Titulo="Eternals" Genero="Acción, Aventura, Marvel" Duracion="157min" Formato="3D" />
        <Gridcards img={peli2} Titulo="Venom: Carnage Liberado" Genero="Acción, Marvel, Suspenso" Duracion="90min" Formato="-2D-3D" />
        <Gridcards img={peli3} Titulo="Duna" Genero="Acción, Aventura, Ciencia Ficción, Drama" Duracion="156min" Formato="2D" />
        <Gridcards img={peli4} Titulo="El Misterio De Soho" Genero="Thriller" Duracion="116min" Formato="D2" />
        <Gridcards img={peli5} Titulo="Riesgo Bajo Cero" Genero="Acción, Drama" Duracion="109min" Formato="2D-3D" />
        <Gridcards img={peli6} Titulo="Coda, Señales del Corazón" Genero="Drama" Duracion="111min" Formato="2D" />
        <Gridcards img={peli7} Titulo="Peter: El Demonio" Genero="Terror" Duracion="95min" Formato="2D" />
        <Gridcards img={peli8} Titulo="La Familia Monster 2" Genero="Animación, Comedia" Duracion="102min" Formato="2D-3D" />
        <Gridcards img={peli9} Titulo="Perfumes" Genero="Drama" Duracion="100min" Formato="2D" /> */}
        </div>

    )
}

export default Gridcards;



