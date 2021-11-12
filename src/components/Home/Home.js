import houses from '../../assert/peli1.jpg';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
/* import { Pagination } from '@material-ui/lab'; */
import Gridcards from './Gridcards';
import Listcards from './Listcards';
import { Pagination } from 'react-bootstrap';
import { Row, Div } from 'react-bootstrap';

function Home() {

  const styles = {

    styleFormFilter: {
      border: "1px solid grey",
      textAlign: "left",
      marginRight: "50px"
    },

    styleForm: {
      border: "1px solid grey",
      textAlign: "left",
    },

    styleLabel: {
      fontSize: "15px",
      textAlign: "left",
    },

    styleFormHeader: {
      backgroundColor: "blue",
    },

    styleTitle: {
      textAlign: "center",
      fontWeight: "bold",
    },
  };

  const [buttonFilter] = useState("Aplicar filtros");
  const [buttonName, setButtonName] = useState("Cuadricula");
  const [showListView, setShowListView] = useState(true);

  function applyFilters() {
    console.log("Cualquier filtro")
  }

  function changeView() {
    setShowListView(!showListView)
    setButtonName(showListView ? "Cuadricula" : "Listado")
    console.log("Cualquier texto", buttonName)
  }
  return (


    

      <div id="carteleraHome">

        <div>
          <div class="custom-shape-divider-top-1636681532">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
          </div>
          {/* Filtro */}
          <p>Hola</p>

        </div>
        <div>
          {/* contenido mt-auto */}
          <div className="container ">

            <button type="submit" className="btn btn-primary btn-block mb-3 d-none d-lg-block" onClick={() => changeView()}>
              {buttonName}
            </button>
            {/* {showMoreElements()} */}
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




//Función para mostrar los inmuebles en forma de listado
function showListedElements() {
  return (
    <div className="row form-group">
      <Listcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="33330'000.000" fuente="Fincaraiz.com" />
      <Listcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="350'000.000" fuente="Fincaraiz.com" />
      <Listcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="350'000.000" fuente="Fincaraiz.com" />
      <Listcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="350'000.000" fuente="Fincaraiz.com" />
      <Listcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="350'000.000" fuente="Eternals de Marvel Studios, sigue a un grupo de héroes más allá de las estrellas que han protegido a la Tierra desde el principio de los tiempos" />
    </div>

  )
}

//Función para mostrar los inmuebles en forma de cuadricula
function showMoreElements() {
  return (

    <div >
      <div className="row form-group">
        <Gridcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="350'000.000" fuente="Fincaraiz.com" />
        <Gridcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="3444450'000.000" fuente="Fincaraiz.com" />
        <Gridcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="350'000.000" fuente="Fincaraiz.com" />
        <Gridcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="350'000.000" fuente="Fincaraiz.com" />
        <Gridcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="350'000.000" fuente="Fincaraiz.com" />
        <Gridcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="350'000.000" fuente="Fincaraiz.com" />
        <Gridcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="350'000.000" fuente="Fincaraiz.com" />
        <Gridcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="350'000.000" fuente="Fincaraiz.com" />
        <Gridcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="350'000.000" fuente="Fincaraiz.com" />

      </div>
    </div>

  );
}

export default Home;