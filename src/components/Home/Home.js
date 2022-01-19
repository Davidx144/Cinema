/* import peli1 from '../../assert/peliculas/peli1.jpg';
import peli2 from '../../assert/peliculas/peli2.jpg';
import peli3 from '../../assert/peliculas/peli3.jpg';
import peli4 from '../../assert/peliculas/peli4.jpg';
import peli5 from '../../assert/peliculas/peli5.jpg';
import peli6 from '../../assert/peliculas/peli6.jpg';
import peli7 from '../../assert/peliculas/peli7.jpg';
import peli8 from '../../assert/peliculas/peli8.jpg';
import peli9 from '../../assert/peliculas/peli9.jpg'; */

import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState/* , Component  */ } from 'react';
import Gridcards from './Gridcards';
import Listcards from './Listcards';
import { MDBRange } from 'mdb-react-ui-kit';
import BeatLoader from "react-spinners/BeatLoader"
import { Container } from 'react-bootstrap';

function Home() {

  const [loading, setLoading] = useState(true)
  const cambiarEstado = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }

  const [buttonName, setButtonName] = useState("Cuadricula");
  const [showListView, setShowListView] = useState(true);

  function changeView() {
    setShowListView(!showListView)
    setButtonName(showListView ? "Listado" : "Cuadricula")
  }

  const [range, setRange] = useState(5000);
  const onChange = (e) => {
    setRange(e.target.value);
    /* console.log(e.target.value) */
  }
  if (loading){
    cambiarEstado()
    return(
      <div>
      <Container className='loading'>
        <BeatLoader 
          size={15}
        />
      </Container>
      </div>
      
    )
  }else{
    return (
      <div id="carteleraHome" >
        {/* {listaPeliculas()} */}
        <div class="custom-shape-divider-top-1636681532">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>
  
  
        <div className="container ">
          {/* Filtro */}
          <div class="terms col-4 mb-6 d-lg-block" >
            <span class="space">  </span>
            <div>
              <label class="mb-2"><strong>Busca por palabra clave:</strong></label>
              <input placeholder="..." type="text" class="form-control" />
            </div>
  
            <span class="space">  </span>
            <select class="form-select" aria-label="Default select example">
              <option selected>Formato</option>
              <option value="2D">2D</option>
              <option value="3D">3D</option>
              <option value="Surround">Surround</option>
            </select>
            <span class="space">  </span>
  
            <select class="form-select" aria-label="Default select example">
              <option selected>Genero</option>
              <option value="1">Drama</option>
              <option value="2">Terror</option>
              <option value="3">Comedia</option>
              <option value="4">Acción</option>
              <option value="5">Suspenso</option>
              <option value="6">Aventura</option>
              <option value="7">Ficción</option>
              <option value="8">Ciencia </option>
              <option value="9">Marvel</option>
  
  
            </select>
            <span class="space">  </span>
            <span class="space">  </span>
  
            <MDBRange
              value={range}
              min='1000'
              max='20000'
              defult-value='5000'
              step='1000'
              id='customRange3'
              label='Valor máximo de la boletería: '
              onChange={onChange}
            />
  
            <span class="space">  </span>
  
            <button type="submit" class=" form btn btn-primary"> Aplicar Filtros</button>
            <span class="space">  </span>
  
          </div>
        </div>
        <br></br>
        <div className="container mb-3 d-none d-lg-block">
          <label><h4><strong>Formato: </strong></h4></label>
          <span class="space">  </span>
  
          <button type="submit" className="btn btn-primary" onClick={() => changeView()}>
            {buttonName}
          </button>
        </div>
  
        <div>
          <div className="container ">
            <div>
              {
                showListView ? showMoreElements() : showListedElements()
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/* let datosCargados = false */

listaPeliculas();
let exitoso = []
async function listaPeliculas(props) {
  const respuesta = await fetch('/api/movies', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
  exitoso = await respuesta.json()
}


//Función para mostrar los peliculas en forma de listado
function showListedElements() {
  return (
    <div className="row form-group">
      {
        exitoso.map((i, f) => (
          <Listcards img={i.img} Titulo={i.title} Genero={i.gender} Duracion={i.duration} Formato={i.format} Sinopcis={i.synopsis} Horario={i.hour} Valor={i.value} id={i._id} />
        ))
      }
    </div>
  )
}

function showMoreElements() {
  return (
    <div className="row ">
      {
        exitoso.map((i, f) => (
          <Gridcards img={i.img} Titulo={i.title} Genero={i.gender} Duracion={i.duration} Formato={i.format} id={i._id} />
        ))
      }
    </div>
  );
}

export default Home;