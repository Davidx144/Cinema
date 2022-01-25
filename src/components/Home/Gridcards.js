import './Home'
const Gridcards = props => {
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
                    <a href={"/info/"+(props.id)} class="btn btn-primary" >Reservar</a>
                </div>
            </div>
            <br></br>
        </div>

    )
}

export default Gridcards;



