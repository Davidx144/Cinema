import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Modal, Button } from 'react-bootstrap';
import icono from "../../assert/logoP.png";
import { BiLogIn } from 'react-icons/bi';
import '../reguistro/reguistro.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swal from 'sweetalert2'
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Label } from 'reactstrap';

const LocalStorageUser = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem("id_usuario", value);
    }, [value]);

    return [value, setValue];
};

function NavbarP() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        var emailUser = user.email;
        var passwordUser = user.password;
        var LoginUser = {
            email: emailUser,
            password: passwordUser,
        };
        const loginUser = JSON.stringify(LoginUser);

        logear();
        async function logear() {
            const respuesta = await fetch('/api/login', {
                method: "POST",
                body: loginUser,
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const exitoso = await respuesta.json();
            if (exitoso.isAuth === true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido',
                    text: 'Disfruta de las mejores peliculas',
                }).then(function () {
                    localStorage.setItem('id_usuario', exitoso.id);
                    window.location = "/";
                });

            } else {
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
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
/*     const [usuario, setUsuario] = useState({
        name: "",
    }) */
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

        } else {
            var variable = (perfilUsuario.type)
            setTipoUsuario(variable)
            /* var variable2 = (perfilUsuario.name) */
            /* setUsuario(variable2) */
            localStorage.setItem('nombre_usuario', perfilUsuario.name);
            localStorage.setItem('id_usuario', perfilUsuario.id);
            localStorage.setItem('email_usuario', perfilUsuario.email);
        }
    }
    async function logout() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
        })

        swalWithBootstrapButtons.fire({
            title: '??Desea salir?',
            text: "??Se cerrar?? la sesi??n actual!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si, cerrar.',
            cancelButtonText: 'No, cancelar.',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Sesi??n cerrada',
                    'Esperamos verte de nuevo.',
                    'success'
                ).then(function () {
                    fetch('api/logout', {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });
                    localStorage.clear();
                    window.location = "/";
                });

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Sigue disfrutando de las mejores pel??culas ;)',
                    'info'
                )
            }
        })

    }
    const [id_Usuario] = LocalStorageUser(
        'id_usuario'
    );

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" position="fixed" >
            <Container >
                <Navbar.Brand href="/" >
                    <img alt=""
                        src={icono}
                        width="60"
                        height="60"
                        className="d-inline-block align-top" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto " >
                        {/* Todos */}
                        <Nav.Link href="/#carteleraHome" className='botonesNav' >Cartelera </Nav.Link>
                        {/* Usuario */}
                        {(tipoUsuario === "usuario") &&

                            <Nav.Link href={"/bookingsUser/" + (id_Usuario)} className='botonesNav' > Lista de reservas </Nav.Link>
                        }
                        {(tipoUsuario === "Admin") &&
                            <Nav.Link href={"/bookingsUser/" + (id_Usuario)} className='botonesNav'> Lista de reservas </Nav.Link>
                        }
                        {/* Admin */}
                        {tipoUsuario === "Admin" &&
                            <NavDropdown title="Administra peliculas" id="collasible-nav-dropdown" className='botonesNav'>
                                <NavDropdown.Item href="/administrarPelicula" > Editar / Eliminar</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/agregar" > Agregar pel??culas
                                </NavDropdown.Item>

                            </NavDropdown >
                        }
                    </Nav>
                    <Nav>
                        {/* Sin iniciar */}
                        {tipoUsuario.tipo === "" &&
                            <Nav.Link href="#deets" onClick={handleShow} className='botonesNav'> <BiLogIn /> Iniciar </Nav.Link>
                        }
                        {/* para usuario */}
                        {tipoUsuario === "usuario" &&
                            <Nav.Link onClick={logout} className='botonesNav'> <BiLogIn />  Salir </Nav.Link>
                        }
                        {/* Para admin */}
                        {tipoUsuario === "Admin" &&
                            <Nav.Link onClick={logout} className='botonesNav'> <BiLogIn />  Salir </Nav.Link>
                        }
                        <>
                            <Modal show={show}
                                onHide={handleClose} >
                                <Modal.Header closeButton >
                                    <Modal.Title > Inicia secci??n o registrate </Modal.Title> </Modal.Header>
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
                                        <div className="mb-2">
                                            <input
                                                required
                                                onChange={handleChange}
                                                value={user.password}
                                                className="form-control"
                                                placeholder="Introduzca la contrase??a"
                                                name="password"
                                                type="password"
                                            />
                                        </div>
                                        <div className="mb-2 mt-4">
                                            <button className="btn btn-outline-success w-100" type="submit">
                                                Ingresar
                                            </button>
                                        </div>
                                    </form>
                                    <button onClick={handleClose} className="btn btn-outline-danger w-100" >
                                        Cancelar
                                    </button>
                                </Modal.Body >
                                <Modal.Footer >
                                    <Label >??Nuevo en la plataforma? </Label>
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