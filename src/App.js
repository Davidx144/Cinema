import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
  /* BrowserRouter as */ Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Reguistro from './components/reguistro/reguistro';
import Footer from "./components/footer/footer";
import NavbarP from './components/navbar/navbar';
import Inicio from './components/carrucel/carrusel';
import Home from './components/Home/Home';
import Reservas from './components/reservas/reservas'
/* import Salas from './components/salas/salas' */
import AgregarPelicula from './components/crearPelicula/agregarPelicula';
import Info from "./components/informacion/info"
import EliminarPeliculas from './components/eliminarPelicula/eliminarPelicula';


//export const browserHistory = createBrowserHistory({ basename: "/inicio" });

export const browserHistory = createBrowserHistory({ basename: "/" });

function App() {
  localStorage.setItem("key", "value")
  return (
    <div className="App" >
      <header className="header">
        <div>
          <NavbarP></NavbarP>
        </div>
        <div>
          <nav className="navbar-dark navbar-expand-sm navbar App-navbar sticky-top bg-dark" id="nav" />
          <Router history={browserHistory} basename={'/'}>
            <Switch>
              <Route exact path="/" component={Inicio} />
              <Route exact path="/registro" component={Reguistro} />
              <Route exact path="/salida" component={Reguistro} />
              <Route exact path="/reservas" component={Reservas} />
              <Route exact path="/eliminarPeliculas" component={EliminarPeliculas} />

              {/* <Route exact path="/historial" component={Salas} /> */}
              <Route exact path="/info/:id" component={Info} />
              <Route exact path="/agregar" component={AgregarPelicula} />
            </Switch>
          </Router>
        </div>
      </header>
      {/* <div className='body'> */}
      <body >
        {/* <br></br> */}
        <Router history={browserHistory} basename={'/'}>
          <Switch>
            <Route exact path="/" component={Home} />

          </Switch>
        </Router>
        <br></br>
      </body>
      <footer className="text-center text-lg-start bg-light text-muted" >
        <Footer></Footer>
      </footer>
    </div>
  );
}
/* export exitoso; */
export default App;
