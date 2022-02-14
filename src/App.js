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
import AdministrarPelicula from './components/administrarPeliculas/administrarPelicula';
import EditarPelicula from './components/editarPelicula/editarPelicula';
import ReservadasUsuario from './components/reservadas/reservadas';
import EditarReserva from './components/editarReserva/editarReserva';
import React, { useState } from "react";
import NotFound from './components/notFound/notFound';

//export const browserHistory = createBrowserHistory({ basename: "/inicio" });

export const browserHistory = createBrowserHistory({ basename: "/" });
function App() {

  const [tipoUsuario, setTipoUsuario] = useState({
    tipo: "",
  })

  perfil();
  async function perfil(props) {
    const respuesta = await fetch('/api/profile', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const perfilUsuario = await respuesta.json();
    if (perfilUsuario.error === true) {
      console.log("Aun no ingresa")
    } else {
      var variable = (perfilUsuario.type)
      setTipoUsuario(variable)


    }
  }
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
              {/* Todos */}
              <Route exact path="/" component={Inicio} />
              <Route exact path="/registro" component={Reguistro} />
              <Route exact path="/info/:id" component={Info} />
              {/* usuarios */}
              {(tipoUsuario === "usuario") &&
                <Route exact path="/bookingsUser/:id" component={ReservadasUsuario} />
              }
              {(tipoUsuario === "usuario") &&
                <Route exact path="/editarReserva/:id/:id" component={EditarReserva} />
              }
              {(tipoUsuario === "Admin") &&
                <Route exact path="/bookingsUser/:id" component={ReservadasUsuario} />
              }
              {(tipoUsuario === "Admin") &&
                <Route exact path="/editarReserva/:id/:id" component={EditarReserva} />
              }

              {/* Admin */}
              {(tipoUsuario === "Admin") &&
                <Route exact path="/agregar" component={AgregarPelicula} />
              }
              {(tipoUsuario === "Admin") &&
                <Route exact path="/editar/:id" component={EditarPelicula} />
              }
              {(tipoUsuario === "Admin") &&
                <Route exact path="/administrarPelicula" component={AdministrarPelicula} />
              }

              <Route path='*' component={NotFound} />

              {/* <Route exact path="/salida" component={Reguistro} /> */}
              {/* <Route exact path="/historial" component={Salas} /> */}
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
