import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Modal, Button, /* Row, Col, */ Form, /* input */ } from 'react-bootstrap';
import './App.css';
import React, { useState/* , useEffect  */ } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import icono from './components/images/logo.png';
import { DiGithubBadge, DiReact, DiBootstrap } from 'react-icons/di';
import { AiFillFacebook, AiFillPhone, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FaWhatsapp, FaVuejs } from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Inicio from './components/reguistro/inicio';
export const browserHistory = createBrowserHistory({ basename: "/iniciooo" });
function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <div className="App" >

      <header class="header" >
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container >
              <Navbar.Brand href="/" >
                <img alt=""
                  src={icono}
                  width="60"
                  height="60"
                  className="d-inline-block align-top" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" >
                  <Nav.Link href="/cartelera" >Cartelera </Nav.Link>
                  <Nav.Link href="/reservas" > Lista de reservas </Nav.Link>
                  <NavDropdown title="Administra peliculas" id="collasible-nav-dropdown" >
                    <NavDropdown.Item href="/agregar" > Agregar películas
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/eliminar" > Eliminar películas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/historial" > Historial </NavDropdown.Item>
                  </NavDropdown >
                </Nav>
                <Nav>
                  <Nav.Link href="#deets" onClick={handleShow} > <BiLogIn /> Registrarse </Nav.Link>
                  <>
                    <Modal show={show}
                      onHide={handleClose} >

                      <Modal.Header closeButton >
                        <Modal.Title > Registro </Modal.Title> </Modal.Header>
                      <Modal.Body >
                        <Form>
                          <Form.Label>Tipo de documento</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Selecciona tu tipo de documento</option>
                            <option value="cc">Cédula de Ciudadanía</option>
                            <option value="ps">Pasaporte</option>
                            <option value="ti">Tarjeta de identidad</option>
                          </Form.Select>
                          <br></br>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Número de documento:</Form.Label>
                            <Form.Control type="number" placeholder="Ingresa tú número de documento" />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electronico:</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu email" />

                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                            <Form.Text className="text-muted">
                              La contraseña debe tener mayúsculas, minúsculas y números.
                            </Form.Text>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Quiero recibir correos" />
                          </Form.Group>
                        </Form>
                      </Modal.Body >
                      <Modal.Footer >
                        <Button variant="secondary" onClick={handleClose} >
                          Cancelar </Button>
                        <Button variant="primary" onClick={handleClose} type="submit">
                          Ingresar </Button>
                      </Modal.Footer >
                    </Modal>
                  </>
                </Nav>
              </Navbar.Collapse >
            </Container>
          </Navbar >
        </div>
        <div>
          <nav className="navbar-dark navbar-expand-sm navbar App-navbar sticky-top bg-dark" id="nav" />
          <Router history={browserHistory} basename={'/'}>
            <Switch>
              <Route exact path="/" component={Inicio} />
              <Route exact path="/registro" component={Inicio} />
              <Route exact path="/salida" component={Inicio} />
              <Route exact path="/parqueados" component={Inicio} />
              <Route exact path="/buscar" component={Inicio} />
            </Switch>
          </Router>
        </div>
      </header>
      <body >


      </body>
      <footer class="text-center text-lg-start bg-light text-muted" >
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
          <div class="me-5 d-none d-lg-block" >
            <span > En caso de tener algún inconveniente:
            </span>
          </div>
        </section>
        <section class="" >
          <div class="container text-center text-md-start mt-5" >
            <div class="row mt-3" >
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" >
                <h6 class="text-uppercase fw-bold mb-4" >
                  <i class="fas fa-gem me-3" >
                  </i>Nelson Aristizabal </h6>
                <p>Si necesita ayuda, guías, quejas o reclamos puede comunicarse por los siguientes medios.
                </p> </div >
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" >

                <h6 class="text-uppercase fw-bold mb-4" >
                  Contacto </h6>
                <p >
                  < i class="fas fa-home me-3" > </i> Medellin - Antioquia</p>
                <p >
                  <i class="fas fa-envelope me-3" >
                  </i>david .14420 @gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3" > </i>
                  <FaWhatsapp /> +57 350 729 3892 </p>
                <p > <i class="fas fa-print me-3" ></i>
                  <AiFillPhone /> 2222253</p></div >
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" >
                <h6 class="text-uppercase fw-bold mb-4" >
                  Productos </h6> <p>
                  <a href="#!" class="text-reset" >
                    < DiReact /> React </a>
                </p >
                <p >
                  <a href="#!" class="text-reset" > <FaVuejs />Vue
                  </a></p> <p>
                  <a href="#!" class="text-reset" > < DiBootstrap /> Bootstrap </a>
                </p >
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" >
                <h6 class="text-uppercase fw-bold mb-4" >
                  Redes Sociales
                </h6>
                <p>
                  <a href="https://www.linkedin.com/in/nelson-david-aristiz%C3%A1bal-amaya-9788a91ba/" class="text-reset" > < AiFillLinkedin /> Linkedin </a>
                </p >
                <p >
                  <a href="https://github.com/Davidx144" class="text-reset" > < DiGithubBadge /> Git Hub </a> </p >
                <p>
                  <a href="https://www.facebook.com/david144205/" class="text-reset" > < AiFillFacebook /> Facebook </a>
                </p >
                <p ><a href="https://www.instagram.com/n.david.a/?fbclid=IwAR0xTYwLfUGtnvo6EgSqQbXJ0DL651OJSHvCEIjmgK0byfSdDAPMwWi8R4A" class="text-reset" > < AiFillInstagram /> Intagram </a> </p >
              </div>
            </div>
          </div>
        </section >
      </footer>
    </div>
  );
}
export default App;
