import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Reguistro from './components/reguistro/reguistro';
import Footer from "./components/footer/footer";
import NavbarP from './components/navbar/navbar';
import Inicio from './components/inicio/inicio';
export const browserHistory = createBrowserHistory({ basename: "/iniciooo" });
function App() {
  return (
    <div className="App" >
      <header class="header" >
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
              <Route exact path="/parqueados" component={Reguistro} />
              <Route exact path="/buscar" component={Reguistro} />
            </Switch>
          </Router>
        </div>
      </header>
      <body >


      </body>
      <footer class="text-center text-lg-start bg-light text-muted" >
        <Footer></Footer>
      </footer>
    </div>
  );
}
export default App;
