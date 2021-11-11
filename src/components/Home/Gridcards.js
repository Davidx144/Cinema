import './Home'
import bootstrapMin from 'bootstrap/dist/js/bootstrap.min';

const Gridcards = props => {
    return (
        <div class="col-sm-3">
            <div class="grid">
                <img class="card-img-top" src={props.img} alt="Card cap"/>
                <div class="card-body bg-dark">
                    <h4 class="card-text text-align-left"><strong>Lugar:</strong> {props.lugar}</h4>
                    <p class="card-text text-align-left"><strong>Tipo:</strong> {props.tipo}</p>
                    <p class="card-text text-align-left"><strong>Precio:</strong> {props.precio}</p>
                    <p class="card-text text-align-left"><strong>Fuente:</strong> {props.fuente}</p>
                    <a href="/" class="btn btn-primary">Más información</a>
                </div>
            </div>
            <br></br>
        </div>
        
    )
  }

  export default Gridcards;