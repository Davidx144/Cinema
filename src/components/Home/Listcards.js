import './Home'

const Listcards = props => {
    return (
        <div class="cartas">
            <div class="grid h-100">
                <img class="card-img-top" src={props.img} alt="Card cap"/>
                <div class="card-body bg-dark">
                    <h5 class="card-text text-align-left"><strong>Titulo:</strong> <strong>{props.Titulo}</strong></h5>
                    <p class="card-text text-align-left"><strong>Genero:</strong> {props.Genero}</p>
                    <p class="card-text text-align-left"><strong>Duracion:</strong> {props.Duracion} minutos </p>
                    <p class="card-text text-align-left"><strong>Sinopcis:</strong> {props.Sinopcis}</p>
                    <p class="card-text text-align-left"><strong>Formato:</strong> {props.Formato}</p>
                    <p class="card-text text-align-left"><strong>Horario:</strong> {props.Horario}</p>
                    <p class="card-text text-align-left"><strong>Valor:</strong> {props.Valor}</p>
                    
                    <a href={"info/"+(props.id)} class="btn btn-primary">Reservar</a>
                </div>
            </div>
            <br></br>
            {/* <Listcards img={peli1} Titulo="Eternals" Genero="Acción, Aventura, Marvel" Duracion="157min" Formato="3D" Sinopcis="Eternals de Marvel Studios, sigue a un grupo de héroes más allá de las estrellas que han protegido a la Tierra desde el principio de los tiempos. Cuando unas criaturas monstruosas llamadas los Deviants, que se pensaba estaban perdidas, regresan misteriosamente y los Eternals se ven forzados a reunirse para defender a la humanidad una vez más." Horario="8:00PM" Valor="9.000 Mil" />
      <Listcards img={peli2} Titulo="Venom Carnage Liberado" Genero="Acción, Marvel, Suspenso" Duracion="90min" Formato="2D-3D" Sinopcis="Eddie y Venom están luchando por coexistir cuando el simbionte más grande y malo se une con Cletus Kasady, un asesino en serie psicótico, desatando Carnage. Tom Hardy regresa a la pantalla grande como el protector letal Venom, uno de los personajes más grandes y complejos de MARVEL." Horario="10:00PM" Valor="10.000 Mil" />
      <Listcards img={peli11} Titulo="Duna" Genero="Acción, Aventura, Ciencia Ficción, Drama" Duracion="156min" Formato="2D" Sinopcis="Arrakis, el planeta del desierto, feudo de la familia Harkonnen desde hace generaciones, queda en manos de la Casa de los Atreides después de que el emperador ceda a la casa la explotación de las reservas de especia, una de las materias primas más valiosas de la galaxia y también una droga capaz de amplificar la conciencia y extender la vida. " Horario="4:00PM" Valor="7.000 Mil" />
      <Listcards img={peli4} Titulo="El Misterio De Soho" Genero="Thriller" Duracion="116min" Formato="D2" Sinopcis="El Misterio De Soho es el nuevo thriller psicológico de Edgar Wright, que cuenta la historia sobre una joven apasionada por la moda que, misteriosamente, es capaz de trasladarse a la década de los años 60’s, donde se encuentra con su ídolo, una deslumbrante aspirante a cantante. Pero el Londres de la época no es lo que parece, y el tiempo parece desmoronarse con oscuras consecuencias." Horario="1:00 PM" Valor="5.000 Mil" />
      <Listcards img={peli5} Titulo="Riesgo Bajo Cero" Genero="Acción, Drama" Duracion="109min" Formato="2D-3D" Sinopcis="Luego del colapso de una remota mina de diamantes, en el extremo norte de Canadá, un conductor de tractomula será el líder de la compleja misión de rescate. Su objetivo será salvar las vidas de estos mineros atrapados en ese enorme y gélido paraje, mientras crece el peligro de descongelamiento y se enfrenta a una amenaza que no veía venir." Horario="10:00AM" Valor="6.000 Mil" />
      <Listcards img={peli6} Titulo="Coda, Señales del Corazón" Genero="Drama" Duracion="111min" Formato="2D" Sinopcis="Ruby Rossi es una niña CODA, hija de padres sordos (Children Of Deaf Adult). Es la intérprete esencial de sus padres y hermano todos los días. También tiene un talento sobresaliente: cantar. Alentada por su profesor de música (Eugenio Derbez), decide prepararse para la audición de una prestigiosa Academia de Música." Horario="3:00AM" Valor="2.000 Mil" />
      <Listcards img={peli7} Titulo="Peter: El Demonio" Genero="Terror" Duracion="95min" Formato="2D" Sinopcis="A principios de 1908, en Messina, vivía Peter, un niño de 13 años que viene de una familia de comerciantes inglesa y muy adinerada, conocido por su crueldad con los animales y sus allegados. Una noche, se despierta en un ataúd en el cementerio de la ciudad, fruto de la venganza de un sirviente. Cuando un terremoto destruye toda Messina, Peter se queda atrapado y es olvidado." Horario="3:00AM" Valor="3.000 Mil" />
      <Listcards img={peli8} Titulo="La Familia Monster 2" Genero="Animación, Comedia" Duracion="102min" Formato="2D-3D" Sinopcis="Para rescatar a Baba Yaga y Renfield de las garras de la cazadora de monstruos Mila Starr, la familia Wishbone se transforma una vez más en un vampiro, Frankenstein, la momia y el hombre lobo. Con la ayuda de sus tres murciélagos mascota, nuestra Familia Monstruo vuelve a recorrer el mundo para salvar a sus amigos." Horario="10:00AM" Valor="6.000 Mil" />
      <Listcards img={peli9} Titulo="Perfumes" Genero="Drama" Duracion="100min" Formato="2D" Sinopcis="Anne Walberg es una estrella del mundo de los perfumes. Crea fragancias y vende su increíble talento a todo tipo de empresas. Vive como una diva, egoísta y con mucho temperamento. Guillaume es su nuevo chófer y la única persona de su alrededor que no tiene miedo a enfrentarla. Y esa es sin duda la razón por la que ella no le despide. " Horario="2:00PM" Valor="1.500 Mil" /> */}
        </div>
        
    )
  }

  export default Listcards;