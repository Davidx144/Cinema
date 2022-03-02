import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState} from 'react';
import Gridcards from './Gridcards';
import Listcards from './Listcards';
import BeatLoader from "react-spinners/BeatLoader"
import { Container } from 'react-bootstrap';

const LocalStorageUser = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || 'Usuario'
  );

  React.useEffect(() => {
    localStorage.setItem("nombre_usuario", value);
  }, [value]);

  return [value, setValue];
};

function Home() {

  const [nombreUsuario] = LocalStorageUser(
    'nombre_usuario'
  );

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

  if (loading) {
    cambiarEstado()
    return (
      <div>
        <Container className='loading'>
          <BeatLoader
            size={15}
          />
        </Container>
      </div>

    )
  } else {
    return (
      <div id="carteleraHome" >
        {/* {listaPeliculas()} */}
        <div className="custom-shape-divider-top-1636681532">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>

        <p className='saludo'>
          <h5><span className="badge rounded-pill bg-light text-dark"> Hola {nombreUsuario} </span></h5>
        </p>
        {/* Filtro */}
        {/* <div className="container ">
          <form >
            <div className="terms col-4 mb-6 d-lg-block " >
              <span className="space">  </span>
              <div>
                <label className="mb-2"><strong>Busca por palabra clave:</strong></label>
                <input placeholder="..." type="text" className="form-control eje" for="ejemplo"/>
              </div>

              <span className="space">  </span>
              <select className="form-select" aria-label="Default select example" defaultValue="0">
                <option value="0">Formato</option>
                <option value="2D">2D</option>
                <option value="3D">3D</option>
                <option value="Surround">Surround</option>
              </select>
              <span className="space">  </span>

              <select className="form-select" aria-label="Default select example" defaultValue="0">
                <option value="0">Genero</option>
                <option value="1">Drama</option>
                <option value="2">Terror</option>
                <option value="3">Comedia</option>
                <option value="4">Acción</option>
                <option value="5">Suspenso</option>
                <option value="6">Aventura</option>
                <option value="7">Ficción</option>
                <option value="8">Ciencis </option>
                <option value="9">Marvel</option>
              </select>
              <br></br>
              <button type="submit" className=" form btn btn-primary format" onClick={filtrar}> Aplicar Filtros</button>
            </div>
          </form>
        </div> */}


        <br></br>
        <div className="container mb-3 d-none d-lg-block">
          <label className='formato'><h4><strong>Formato: </strong></h4></label>
          <span className="space">  </span>

          <button type="submit" className="btn btn-primary format" onClick={() => changeView()}>
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

listaPeliculas();
let listaDePeliculas = []
async function listaPeliculas(props) {
  const respuesta = await fetch('/api/movies', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
  listaDePeliculas = await respuesta.json()
}


//Función para mostrar los peliculas en forma de listado
function showListedElements() {
  return (
    <div className="row form-group">
      {
        listaDePeliculas.map((i, f) => (
          i.cartelera === "SI" &&
          <Listcards key={i._id} img={i.img} Titulo={i.title} Genero={i.gender} Duracion={i.duration} Formato={i.format} Sinopcis={i.synopsis} Horario={i.hour} Valor={i.value} id={i._id} />
        ))
      }
    </div>
  )
}

function showMoreElements() {
  return (    
    <div className="row ">
      {
        listaDePeliculas.map((i, f) => (
          i.cartelera === "SI" &&
          <Gridcards key={i._id} img={i.img} Titulo={i.title} Genero={i.gender} Duracion={i.duration} Formato={i.format} id={i._id} />
        ))
      }
    </div>
  );
}

export default Home;