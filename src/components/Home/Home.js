import peli1 from '../../assert/peliculas/peli1.jpg';
import peli2 from '../../assert/peliculas/peli2.jpg';
import peli3 from '../../assert/peliculas/peli3.jpg';
import peli4 from '../../assert/peliculas/peli4.jpg';
import peli5 from '../../assert/peliculas/peli5.jpg';
import peli6 from '../../assert/peliculas/peli6.jpg';
import peli7 from '../../assert/peliculas/peli7.jpg';
import peli8 from '../../assert/peliculas/peli8.jpg';
import peli9 from '../../assert/peliculas/peli9.jpg';

import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Gridcards from './Gridcards';
import Listcards from './Listcards';
import { MDBRange } from 'mdb-react-ui-kit';

function Home() {


  const [buttonName, setButtonName] = useState("Cuadricula");
  const [showListView, setShowListView] = useState(true);

  function changeView() {
    setShowListView(!showListView)
    setButtonName(showListView ? "Listado" : "Cuadricula")
  }


  const [range, setRange] = useState(2);

  const onChange = (e) => {
    setRange(e.target.value);
  }
  return (




    <div id="carteleraHome" >
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




//Función para mostrar los peliculas en forma de listado
function showListedElements() {
  /* titulo genero imagen duracion sinopcis formato horario valor */
  return (
    <div className="row form-group">
      <Listcards img={peli1} Titulo="Eternals" Genero="Acción, Aventura, Marvel" Duracion="157min" Formato="3D" Sinopcis="Eternals de Marvel Studios, sigue a un grupo de héroes más allá de las estrellas que han protegido a la Tierra desde el principio de los tiempos. Cuando unas criaturas monstruosas llamadas los Deviants, que se pensaba estaban perdidas, regresan misteriosamente y los Eternals se ven forzados a reunirse para defender a la humanidad una vez más." Horario="8:00PM" Valor="9.000 Mil" />
      <Listcards img={peli2} Titulo="Venom Carnage Liberado" Genero="Acción, Marvel, Suspenso" Duracion="90min" Formato="2D-3D" Sinopcis="Eddie y Venom están luchando por coexistir cuando el simbionte más grande y malo se une con Cletus Kasady, un asesino en serie psicótico, desatando Carnage. Tom Hardy regresa a la pantalla grande como el protector letal Venom, uno de los personajes más grandes y complejos de MARVEL." Horario="10:00PM" Valor="10.000 Mil" />
      <Listcards img={peli3} Titulo="Duna" Genero="Acción, Aventura, Ciencia Ficción, Drama" Duracion="156min" Formato="2D" Sinopcis="Arrakis, el planeta del desierto, feudo de la familia Harkonnen desde hace generaciones, queda en manos de la Casa de los Atreides después de que el emperador ceda a la casa la explotación de las reservas de especia, una de las materias primas más valiosas de la galaxia y también una droga capaz de amplificar la conciencia y extender la vida. " Horario="4:00PM" Valor="7.000 Mil" />
      <Listcards img={peli4} Titulo="El Misterio De Soho" Genero="Thriller" Duracion="116min" Formato="D2" Sinopcis="El Misterio De Soho es el nuevo thriller psicológico de Edgar Wright, que cuenta la historia sobre una joven apasionada por la moda que, misteriosamente, es capaz de trasladarse a la década de los años 60’s, donde se encuentra con su ídolo, una deslumbrante aspirante a cantante. Pero el Londres de la época no es lo que parece, y el tiempo parece desmoronarse con oscuras consecuencias." Horario="1:00 PM" Valor="5.000 Mil" />
      <Listcards img={peli5} Titulo="Riesgo Bajo Cero" Genero="Acción, Drama" Duracion="109min" Formato="2D-3D" Sinopcis="Luego del colapso de una remota mina de diamantes, en el extremo norte de Canadá, un conductor de tractomula será el líder de la compleja misión de rescate. Su objetivo será salvar las vidas de estos mineros atrapados en ese enorme y gélido paraje, mientras crece el peligro de descongelamiento y se enfrenta a una amenaza que no veía venir." Horario="10:00AM" Valor="6.000 Mil" />
      <Listcards img={peli6} Titulo="Coda, Señales del Corazón" Genero="Drama" Duracion="111min" Formato="2D" Sinopcis="Ruby Rossi es una niña CODA, hija de padres sordos (Children Of Deaf Adult). Es la intérprete esencial de sus padres y hermano todos los días. También tiene un talento sobresaliente: cantar. Alentada por su profesor de música (Eugenio Derbez), decide prepararse para la audición de una prestigiosa Academia de Música." Horario="3:00AM" Valor="2.000 Mil" />
      <Listcards img={peli7} Titulo="Peter: El Demonio" Genero="Terror" Duracion="95min" Formato="2D" Sinopcis="A principios de 1908, en Messina, vivía Peter, un niño de 13 años que viene de una familia de comerciantes inglesa y muy adinerada, conocido por su crueldad con los animales y sus allegados. Una noche, se despierta en un ataúd en el cementerio de la ciudad, fruto de la venganza de un sirviente. Cuando un terremoto destruye toda Messina, Peter se queda atrapado y es olvidado." Horario="3:00AM" Valor="3.000 Mil" />
      <Listcards img={peli8} Titulo="La Familia Monster 2" Genero="Animación, Comedia" Duracion="102min" Formato="2D-3D" Sinopcis="Para rescatar a Baba Yaga y Renfield de las garras de la cazadora de monstruos Mila Starr, la familia Wishbone se transforma una vez más en un vampiro, Frankenstein, la momia y el hombre lobo. Con la ayuda de sus tres murciélagos mascota, nuestra Familia Monstruo vuelve a recorrer el mundo para salvar a sus amigos." Horario="10:00AM" Valor="6.000 Mil" />
      <Listcards img={peli9} Titulo="Perfumes" Genero="Drama" Duracion="100min" Formato="2D" Sinopcis="Anne Walberg es una estrella del mundo de los perfumes. Crea fragancias y vende su increíble talento a todo tipo de empresas. Vive como una diva, egoísta y con mucho temperamento. Guillaume es su nuevo chófer y la única persona de su alrededor que no tiene miedo a enfrentarla. Y esa es sin duda la razón por la que ella no le despide. " Horario="2:00PM" Valor="1.500 Mil" />
    </div>

  )
}

//Función para mostrar los peliculas en forma de cuadricula
function showMoreElements() {
  return (
    /* Titulo genero imagen duracion  */
    <div >
      <div className="row form-group">
        <Gridcards img={peli1} Titulo="Eternals" Genero="Acción, Aventura, Marvel" Duracion="157min" Formato="3D" />
        <Gridcards img={peli2} Titulo="Venom: Carnage Liberado" Genero="Acción, Marvel, Suspenso" Duracion="90min" Formato="-2D-3D" />
        <Gridcards img={peli3} Titulo="Duna" Genero="Acción, Aventura, Ciencia Ficción, Drama" Duracion="156min" Formato="2D" />
        <Gridcards img={peli4} Titulo="El Misterio De Soho" Genero="Thriller" Duracion="116min" Formato="D2" />
        <Gridcards img={peli5} Titulo="Riesgo Bajo Cero" Genero="Acción, Drama" Duracion="109min" Formato="2D-3D" />
        <Gridcards img={peli6} Titulo="Coda, Señales del Corazón" Genero="Drama" Duracion="111min" Formato="2D" />
        <Gridcards img={peli7} Titulo="Peter: El Demonio" Genero="Terror" Duracion="95min" Formato="2D" />
        <Gridcards img={peli8} Titulo="La Familia Monster 2" Genero="Animación, Comedia" Duracion="102min" Formato="2D-3D" />
        <Gridcards img={peli9} Titulo="Perfumes" Genero="Drama" Duracion="100min" Formato="2D" />

      </div>
    </div>

  );
}

export default Home;