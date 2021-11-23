import './Home'
/* import bootstrapMin from 'bootstrap/dist/js/bootstrap.min'; */

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


/* import './Home'
import bootstrapMin from 'bootstrap/dist/js/bootstrap.min';

const Listcards = props => {
    return (
        <div class="cartas">
            
                <div class="card col-9">
                    <img class="card-img-top" src={props.img} alt="Card cap" />
                    <div class="card-body bg-dark">
                        <h5 class="card-title"><strong>Lugar:</strong> {props.lugar}</h5>

                        <p className="card-text text-align-left"><strong>Tipo:</strong> {props.tipo}</p>
                        <p className="card-text text-align-left"><strong>Precio:</strong> {props.precio}</p>
                        <p className="card-text text-align-left"><strong>Fuente:</strong> {props.fuente}</p>
                    </div>
                </div>
            </div>
        
    )
}

export default Listcards; */


/*                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */

/*             <div className="row no-gutters">
                <div className="col-sm">
                    <img className="card-img-top" src={props.img} alt="Card cap" />
                </div>

                <div className="col-sm">
                    <div className="card-body bg-dark">
                        <p className="card-text text-align-left"><strong>Lugar:</strong> {props.lugar}</p>
                        <p className="card-text text-align-left"><strong>Tipo:</strong> {props.tipo}</p>
                        <p className="card-text text-align-left"><strong>Precio:</strong> {props.precio}</p>
                        <p className="card-text text-align-left"><strong>Fuente:</strong> {props.fuente}</p>
                    </div>
                </div>

                <div className="col-sm center bg-dark">
                    <a href="/" className="btn btn-primary button">Más información</a>
                </div>
            </div> */

/*             <div class="card mb-3">
                <img class="card-img-top" src=".../100px180/" alt="Card image cap"/>
                <div class ="card-body">
                <h5 class ="card-title">Card title</h5>
                <p class ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                <p class ="card-text"><small class ="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div> */


/*             <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <img class="card-img-bottom" src={props.img} alt="Card cap" />
            </div> */