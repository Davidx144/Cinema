import './Home'
const Gridcards = props => {
    return (
        /* col-sm-12 col-lg-6 */
        
        <div className="col-sm-3">
            <div className="grid h-100 cardZ">
                <img className="card-img-top grid-img" src={props.img} alt="Card cap" />
                <div className="card-body bg-dark ">
                    <div className='grid-size'>
                    <h6 className="card-text text-align-center">{/* <span class="badge bg-secondary">Titulo:</span><strong>Titulo:</strong>  */}{props.Titulo}</h6>
                    {/* <p className="card-text text-align-left"><strong>Genero:</strong> {props.Genero}</p> <span class="badge bg-secondary">Secondary</span> */}
                    <p className="card-text text-align-left"><span class="badge bg-secondary">Duracion:</span> <span class="badge rounded-pill bg-info text-dark">{props.Duracion} minutos</span></p>
                    <p className="card-text text-align-left"><span class="badge bg-secondary">Genero     :  </span> <span class="badge rounded-pill bg-light text-dark">  {props.Genero}</span></p> 
                    <p className="card-text text-align-left"><span class="badge bg-secondary">Formato:</span> <span class="badge rounded-pill bg-light text-dark">{props.Formato}</span> </p>
                    </div>
                    <a href={"/info/"+(props.id)} className="btn btn-primary botonR" >Reservar</a>
                </div>
            </div>
            <br></br>
        </div>

    )
}

export default Gridcards;



