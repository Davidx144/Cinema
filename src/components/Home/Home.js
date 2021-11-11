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
    setButtonName(showListView ? "Cuadricula"  : "Listado")
    console.log("Cualquier texto", buttonName)
  }
  return (


    <body>


      <div>
        <div>
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
                showListView ? showMoreElements() :  showListedElements()
              }
            </div>


          </div>
        </div>
      </div>
{/*       <footer className="Home-Footer" >
        <div className="row justify-content-center">
          <Pagination count={10} color="primary" />
        </div>
      </footer> */}
    </body>

    
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
      <Listcards img={houses} lugar="Loma de los bernal" tipo="casa" precio="350'000.000" fuente="Fincaraiz.com" />
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