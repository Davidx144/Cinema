import './Home'

const Listcards = props => {
    return (
        <div class="cartas">
            <div class="grid h-100">
                <img class="card-img-top" src={props.img} alt="Card cap"/>
                <div class="card-body bg-dark">
                    <h5 class="card-text text-align-left"><strong>Titulo:</strong> <strong>{props.Titulo}</strong></h5>
                    <p class="card-text text-align-left"><strong>Genero:</strong> {props.Genero}</p>
                    <p class="card-text text-align-left"><strong>Duracion:</strong> {props.Duracion}</p>
                    <p class="card-text text-align-left"><strong>Sinopcis:</strong> {props.Sinopcis}</p>
                    <p class="card-text text-align-left"><strong>Formato:</strong> {props.Formato}</p>
                    <p class="card-text text-align-left"><strong>Horario:</strong> {props.Horario}</p>
                    <p class="card-text text-align-left"><strong>Valor:</strong> {props.Valor}</p>
                    
                    <a href="/" class="btn btn-primary">Reservar</a>
                </div>
            </div>
            <br></br>
        </div>
        
    )
  }

  export default Listcards;