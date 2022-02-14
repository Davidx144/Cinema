import './Home'

const Listcards = props => {
    return (
        <div className="cartas">
            <div className="grid h-100 cardZ">
                <img className="card-img-top " src={props.img} alt="Card cap"/>
                <div className="card-body bg-dark">
                    <h5 className="card-text text-align-left"><strong>Titulo:</strong> <strong>{props.Titulo}</strong></h5>
                    <p className="card-text text-align-left"><strong>Genero:</strong> {props.Genero}</p>
                    <p className="card-text text-align-left"><strong>Duracion:</strong> {props.Duracion} minutos </p>
                    <p className="card-text text-align-left"><strong>Sinopcis:</strong> {props.Sinopcis}</p>
                    <p className="card-text text-align-left"><strong>Formato:</strong> {props.Formato}</p>
                    <p className="card-text text-align-left"><strong>Horario:</strong> {props.Horario}</p>
                    <p className="card-text text-align-left"><strong>Valor:</strong> {props.Valor}</p>
                     
                    <a href={`/info/`+(props.id)} className="btn btn-primary botonR">Reservar</a>
                </div>
            </div>
            <br></br>
        </div>
        
    )
  }

  export default Listcards;