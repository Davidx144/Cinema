import './Home'
const Gridcards = props => {
    return (       
        <div className="col-sm-3">
            <div className="grid h-100 cardZ">
                <img className="card-img-top grid-img" src={props.img} alt="Card cap" />
                <div className="card-body gridColor ">
                    <div className='grid-size' >
                    <h6 className="card-text text-align-left aaa"><strong>{props.Titulo}</strong></h6>
                    <p className="card-text text-align-left aaa"><span className="badge bg-secondary">Duracion:</span> <span className="badge  bg-info text-dark">{props.Duracion} minutos</span></p>
                    <p className="card-text text-align-left aaa"><span className="badge bg-secondary">Genero     :  </span> <span className="badge  bg-light text-dark">  {props.Genero}</span></p> 
                    <p className="card-text text-align-left aaa"><span className="badge bg-secondary">Formato:</span> <span className="badge  bg-light text-dark">{props.Formato}</span> </p>
                    </div>
                    <a href={"/info/"+(props.id)} className="btn btn-primary botonR" >Reservar</a>
                </div>
            </div>
            <br></br>
        </div>

    )
}

export default Gridcards;



