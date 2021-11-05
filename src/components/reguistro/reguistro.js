import '../reguistro/reguistro.css';
import 'bootstrap/dist/js/bootstrap.min.js';
/* import styled from 'styled-components'; */
import React, { useState } from 'react';
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';
/* import { Navbar, Nav, Container, NavDropdown, Modal, Button, Row, Col, Form,  input } from 'react-bootstrap'; */


const App = () => {
    const [usuario, cambiarUsuario] = useState({ campo: '', valido: null });
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [password, cambiarPassword] = useState({ campo: '', valido: null });
    const [password2, cambiarPassword2] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [documento, cambiarDocumento] = useState({ campo: '', valido: null });
    const [terminos, cambiarTerminos] = useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const [apellido, cambiarApellido] = useState({ campo: '', valido: null });



    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{5,50}$/, // 5 a 50 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        documento: /^\d{1,20}$/ // 1 a 20 numeros.
    }

    const validarPassword2 = () => {
        if (password.campo.length > 0) {
            if (password.campo !== password2.campo) {
                cambiarPassword2((prevState) => {
                    return { ...prevState, valido: 'false' }
                });
            } else {
                cambiarPassword2((prevState) => {
                    return { ...prevState, valido: 'true' }
                });
            }
        }
    }

    const onChangeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (
            /* usuario.valido === 'true' && */
            apellido.valido === 'true' &&
            nombre.valido === 'true' &&
            password.valido === 'true' &&
            password2.valido === 'true' &&
            correo.valido === 'true' &&
            documento.valido === 'true' &&
            terminos
        ) {
            cambiarFormularioValido(true);
            cambiarUsuario({ campo: '', valido: '' });
            cambiarNombre({ campo: '', valido: null });
            cambiarApellido({ campo: '', valido: null });
            cambiarPassword({ campo: '', valido: null });
            cambiarPassword2({ campo: '', valido: 'null' });
            cambiarCorreo({ campo: '', valido: null });
            cambiarDocumento({ campo: '', valido: null });

            // ... 
        } else {
            cambiarFormularioValido(false);
        }

    }

    return (
        <main>

            <Formulario action="" onSubmit={onSubmit}>
                {/*                 <div>
                    <div col-12>
                        <Form.Group className="mb-3" controlId="formBasicTipoDoc" Required>
                            <Form.Label className="aaa">Tipo de documento</Form.Label>
                            <Form.Select aria-label="Default select example" >
                                <option>Selecciona tu tipo de documento</option>
                                <option value="cc">Cédula de Ciudadanía</option>
                                <option value="ps">Pasaporte</option>
                                <option value="ti">Tarjeta de identidad</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>
                <div>
                    <div col-12 estado={apellido} expresionRegular={expresiones.nombre} Required>
                        <Form.Group className="mb-3" controlId="formBasicDoc" >
                            <Form.Label className="aaa">Número de documento:</Form.Label>
                            <Form.Control type="number" placeholder="Ingresa tú número de documento" estado={apellido} expresionRegular={expresiones.nombre} Required />
                        </Form.Group>
                    </div>
                </div> */}

                <div >
                    <Label  >Tipo de documento
                        <div className="doc">
                            <select
                                placeholder="Tipo de documento"
                                type="select"
                                name="select"
                                id="select"
                                className="select"
                                /* checked={terminos} */
                                /* onChange={onChangeTerminos} */
                            >
                                <option>Selecciona tu tipo de documento</option>
                                <option value="cc">Cédula de Ciudadanía</option>
                                <option value="ps">Pasaporte</option>
                                <option value="ti">Tarjeta de identidad</option>

                            </select>
                        </div>
                    </Label>
                </div>

                <Input
                    estado={documento}
                    cambiarEstado={cambiarDocumento}
                    tipo="text"
                    label="Número de documento"
                    placeholder="Coloca tu numero de documento"
                    name="documento"
                    leyendaError="El documento solo puede contener numeros."
                    expresionRegular={expresiones.documento}
                />


                <Input
                    estado={nombre}
                    cambiarEstado={cambiarNombre}
                    tipo="text"
                    label="Nombres"
                    placeholder="Coloque su nombre"
                    name="nombre"
                    leyendaError="El nombre solo puede contener letras y espacios."
                    expresionRegular={expresiones.nombre}
                />

                <Input
                    estado={apellido}
                    cambiarEstado={cambiarApellido}
                    tipo="text"
                    label="Apellidos"
                    placeholder="Coloque su apellido"
                    name="apellido"
                    leyendaError="El apellido solo puede contener letras y espacios."
                    expresionRegular={expresiones.nombre}
                />



                {/*                 <div>
                    <Label htmlFor="">prueba</Label>
                    <div>
                        <select className="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div> */}

                <Input
                    estado={correo}
                    cambiarEstado={cambiarCorreo}
                    tipo="correo"
                    label="Correo Electrónico"
                    placeholder="john@correo.com"
                    name="correo"
                    leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                    expresionRegular={expresiones.correo}
                />

{/*                 <Input
                    estado={usuario}
                    cambiarEstado={cambiarUsuario}
                    tipo="text"
                    label="Usuario"
                    placeholder="john123"
                    name="usuario"
                    leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
                    expresionRegular={expresiones.usuario}
                /> */}




                <Input
                    estado={password}
                    cambiarEstado={cambiarPassword}
                    tipo="password"
                    label="Contraseña"
                    name="passwordU"
                    leyendaError="La contraseña tiene que ser minimo de 5 caracteres    "
                    expresionRegular={expresiones.password}
                />
                <Input
                    estado={password2}
                    cambiarEstado={cambiarPassword2}
                    tipo="password"
                    label="Repetir Contraseña"
                    name="password2"
                    leyendaError="Ambas contraseñas deben ser iguales."
                    funcion={validarPassword2}
                />





                <ContenedorTerminos>
                    <Label>
                        <input
                            type="checkbox"
                            name="terminos"
                            id="terminos"
                            checked={terminos}
                            onChange={onChangeTerminos}
                        />
                        Acepto los Terminos y Condiciones
                    </Label>
                </ContenedorTerminos>
                {formularioValido === false && <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <b>Error:</b> Por favor rellena el formulario correctamente.
                    </p>
                </MensajeError>}
                <ContenedorBotonCentrado>
                    <Boton type="submit">Enviar</Boton>
                    {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
                </ContenedorBotonCentrado>
            </Formulario>
        </main>
    );
}

export default App;

