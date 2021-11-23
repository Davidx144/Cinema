import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Modal, Button, Form } from 'react-bootstrap';
import icono from "../../assert/logoP.png";
import { BiLogIn } from 'react-icons/bi';
import '../reguistro/reguistro.css';
import 'bootstrap/dist/js/bootstrap.min.js';
/* import React from 'react'; */
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Label } from 'reactstrap';

function NavbarP() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    /*     let [Fullname, setFullname] = useState({
            fname: '',
            lname: ''
        }) */

    /*     const handleChange = (event) => {
            let value = event.target.value;
            let name = event.target.name;
    
            setFullname((prevalue) => {
                return {
                    ...prevalue,   // Spread Operator               
                    [name]: value
                }
            })
            console.log(value);
        } */

    const onSubmit = (e) => {
        e.preventDefault();

        /* console.log(correo.campo); */

        console.log(e);
        var co = e.correo;
        var pass = e.contresena;

        var user = {
            email: co,
            password: pass,
        };
        console.log(user);


        /*             const caragarUsuario = JSON.stringify(user);
                    console.log(caragarUsuario);
                    const v = fetch('/api/login', {
                        //const v = fetch('http://localhost:3002/api/register', { 
        
                        method: "POST",
                        body: caragarUsuario,
                        headers:
                            { "Content-Type": "application/json" },
                    }); */




    }




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
                        <Nav.Link href="/#carteleraHome" >Cartelera </Nav.Link>
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
                                    <Modal.Title > Inicia Sección o Registrate </Modal.Title> </Modal.Header>
                                <Modal.Body >
                                    {/* <Form.Label>Tipo de documento</Form.Label>
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
                                        </Form.Group> */}
                                    <Form onSubmit={onSubmit}>

                                        <Form.Group className="mb-3" controlId="correo">
                                            <Form.Label value="correo" class="correo" controlId="correo">Correo electronico:</Form.Label>
                                            <Form.Control type="email" placeholder="Ingresa tu email" />

                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="contresena">
                                            <Form.Label>Contraseña:</Form.Label>
                                            <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                                            <Form.Text className="text-muted">
                                                La contraseña debe tener mayúsculas, minúsculas y números.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Recuerdame" />
                                        </Form.Group>
                                        <Form.Group className="d-grid gap-2 col-6 mx-auto" controlId="formBasicButton">
                                            <Button variant="secondary" onClick={handleClose} >
                                                Cancelar </Button>
                                            <Button variant="primary" onClick={onSubmit} type="submit">
                                                Ingresar </Button>
                                        </Form.Group>



                                        {/*                                         <div className="form-group">
                                            <label>Enter Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Enter Email</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Create User" className="btn btn-success btn-block" />
                                        </div> */}



                                    </Form>

                                </Modal.Body >
                                <Modal.Footer >
                                    <Label >¿Nuevo en la plataforma? </Label>
                                    <Button variant="warning" href="/registro">!Reguistrate!</Button>
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