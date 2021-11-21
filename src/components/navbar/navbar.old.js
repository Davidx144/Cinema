import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Modal, Button, /* Row, Col, */ Form, /* input */ } from 'react-bootstrap';
import icono from "../../assert/logoP.png";
import React, { useState } from "react";
import { BiLogIn } from 'react-icons/bi';

function NavbarP() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" position="fixed">
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
                        <Nav.Link href="#deets" onClick={handleShow} > <BiLogIn /> Iniciar </Nav.Link>
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
                                        <Button variant="secondary" onClick={handleClose} >
                                            Cancelar </Button>
                                        <Button variant="primary" /* onClick={handleClose} */ type="submit">
                                            Ingresar </Button>
                                    </Form>

                                </Modal.Body >
                                <Modal.Footer >
                                </Modal.Footer >
                            </Modal>
                        </>
                    </Nav>
                </Navbar.Collapse >
            </Container>
        </Navbar >
    )
}

export default NavbarP;