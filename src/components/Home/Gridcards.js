import './Home'
const Gridcards = props => {
    return (
        /* col-sm-12 col-lg-6 */
        
        <div className="col-sm-3">
            <div className="grid h-100">
                <img className="card-img-top" src={props.img} alt="Card cap" />
                <div className="card-body bg-dark">
                    <h5 className="card-text text-align-left"><strong>Titulo:</strong> {props.Titulo}</h5>
                    <p className="card-text text-align-left"><strong>Genero:</strong> {props.Genero}</p>
                    <p className="card-text text-align-left"><strong>Duracion:</strong> {props.Duracion} minutos</p>
                    <p className="card-text text-align-left"><strong>Formato:</strong> {props.Formato}</p>
                    <a href={"/info/"+(props.id)} className="btn btn-primary" >Reservar</a>
                </div>
            </div>
            <br></br>
        </div>

    )
}

export default Gridcards;



