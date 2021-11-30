import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Modal, Button, /* Form */ } from 'react-bootstrap';
import icono from "../../assert/logoP.png";
import { BiLogIn } from 'react-icons/bi';
import '../reguistro/reguistro.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swal from 'sweetalert2'



/* import React from 'react'; */
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Label } from 'reactstrap';

function NavbarP() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleSubmit = (e) => {
        e.preventDefault();

        /* console.log(correo.campo); */

        console.log(user.email);
        console.log(user.password)

        var emailUser = user.email;
        var passwordUser = user.password;

        var LoginUser = {
            email: emailUser,
            password: passwordUser,
        };
        const loginUser = JSON.stringify(LoginUser);
        console.log(loginUser)

        conectar();
        async function conectar() {

            const respuesta = await fetch('/api/login', {
                method: "POST",
                body: loginUser,
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const exitoso = await respuesta.json();
            if (exitoso.isAuth === true) {
                console.log("Iniciado")
                console.log(exitoso)
                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido',
                    text: 'Disfruta de las mejores peliculas',
                    /* footer: '<a href="/registro">Registrate</a>' */
                })
                handleClose()

            } else {
                console.log("No encontrado")
                console.log(exitoso)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Parace que no estas reguistrado',
                    footer: '<a href="/registro">Registrate</a>'
                })
            }
        }

    }

    const [user, setUser] = useState({
        email: "",
        password: "",

    });
    /*       const [msg, setMsg] = useState({
            message: "",
            color: "",
            visible: "no",
          }); */

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

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


                                    <form className="form" onSubmit={handleSubmit} autoComplete="off">
                                        <div className="mb-2">
                                            <input
                                                required
                                                onChange={handleChange}
                                                value={user.email}
                                                autoFocus
                                                className="form-control"
                                                placeholder="Introduzca el correo"
                                                name="email"
                                                type="email"
                                            />
                                        </div>
                                        {/*                                         <div className="mb-2">
                                            <textarea
                                                required
                                                onChange={handleChange}
                                                value={product.description}
                                                rows="2"
                                                className="form-control"
                                                type="password"
                                                name="description"
                                                placeholder="Introduzca la descripcion"
                                            ></textarea>
                                        </div> */}
                                        <div className="mb-2">
                                            <input
                                                required
                                                onChange={handleChange}
                                                value={user.password}
                                                className="form-control"
                                                placeholder="Introduzca la contraseña"
                                                name="password"
                                                type="password"
                                            />
                                        </div>
                                        {/*                                         <div className="mb-2">
                                            <input
                                                required
                                                onChange={handleChange}
                                                value={product.price}
                                                className="form-control"
                                                placeholder="Introduzca el precio"
                                                name="price"
                                            />
                                        </div> */}
                                        <div className="mb-2 mt-4">
                                            <button className="btn btn-outline-success w-100" type="submit">
                                                Ingresar
                                            </button>
                                        </div>
                                    </form>
                                    <button onClick={handleClose} className="btn btn-outline-danger w-100" >
                                        Cancelar
                                    </button>


                                    {/*                                     <form className="field" onSubmit={onSubmit}>
                                        <div className="form-group">
                                            <label className="label" htmlFor="email">Correo:</label>
                                            <input autoFocus required placeholder="email" type="text" id="email"  onChange={this.manejarCambio}  value={this} className="input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="label" htmlFor="contresena">Correo:</label>
                                            <input autoFocus required placeholder="contresena" type="text" id="contresena"  onChange={this.manejarCambio}  value={'$contresena'} className="input" />
                                        </div>
                                        <div className="form-group">
                                            <button className="button is-success mt-2">Guardar</button>
                                            &nbsp;
                                            
                                        </div>
                                    </form> */}
                                    {/* <div className="form-control">

                                    </div> */}


                                    {/* 
                                    <Form onSubmit={onSubmit}>

                                        <Form.Group className="mb-3" controlId="correo" >
                                            <Form.Label value="correo" class="input" controlId="correo" htmlFor="correo">Correo electronico:</Form.Label>
                                            <Form.Control type="email" placeholder="Ingresa tu email" />

                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="contresena" >
                                            <Form.Label htmlFor="contresena">Contraseña:</Form.Label>
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
                                            <Button variant="primary"  onClick={this.onSubmit} type="submit">
                                                Ingresar </Button>
                                        </Form.Group>
                                    </Form> */}

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

/* <Form.Label>Tipo de documento</Form.Label>
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
    </Form.Group> */

/*<div className="form-group">
    <label>Enter Name</label>
    <input type="text" className="form-control" />
</div>
<div className="form-group">
    <label>Enter Email</label>
    <input type="text" className="form-control" />
</div>
<div className="form-group">
    <input type="submit" value="Create User" className="btn btn-success btn-block" />
</div> */
export default NavbarP;
/* export * from "../../core/authcontext" */