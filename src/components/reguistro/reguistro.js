import '../reguistro/reguistro.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState } from 'react';
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, ContenedorCorreo } from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';



const App = () => {
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [password, cambiarPassword] = useState({ campo: '', valido: null });
    const [password2, cambiarPassword2] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [documento, cambiarDocumento] = useState({ campo: '', valido: null });
    const [tipoDocumento, cambiarTipoDocumento] = useState({ campo: '', valido: null });
    const [terminos, cambiarTerminos] = useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const [apellido, cambiarApellido] = useState({ campo: '', valido: null });

    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /(?=.*[0-9]{1})(?=.*[a-z]{1})(?=.*[A-Z]{1})[a-zA-Z0-9]{5,50}$/, // 5 a 50 digitos obligatorio minus mayus numeros.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        documento: /^\d{1,30}$/ // 1 a 30 numeros.
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
            apellido.valido === 'true' &&
            nombre.valido === 'true' &&
            password.valido === 'true' &&
            password2.valido === 'true' &&
            correo.valido === 'true' &&
            documento.valido === 'true' &&
            terminos
        ) {
            console.log('ENVIADOOO');
            var no = nombre.campo;
            var ap = apellido.campo;
            var doc = documento.campo;
            var co = correo.campo;
            var pass = password.campo;
            var pass2 = password2.campo;
            var user = {
                firstname: no,
                lastname: ap,
                email: co,
                password: pass,
                password2: pass2,
                document: doc,
                documentType: "Cedula",
                userType: "usuario",
                bookings: [],
            };


            const caragarUsuario = JSON.stringify(user);
            console.log(caragarUsuario);
            reguistarUsuario();
            async function reguistarUsuario() {
                const respuesta = await fetch('/api/register', {
                    method: "POST",
                    body: caragarUsuario,
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                const exitoso = await respuesta.json();
                if (exitoso.succes === true) {
                    console.log("Guardado")
                    console.log(exitoso)

                    var eje = exitoso
                    console.log("sadsfsfs")
                    console.log(eje.user)

                    var body_email = {
                        name: exitoso.user.firstname,
                        email: exitoso.user.email,
                    }
                    console.log(body_email)
                    sendEmail()
                    function sendEmail() {
                        /* e.preventDefault(); */
                        /* emailjs.sendForm(e) */
                        emailjs.send('service_hswwe19',
                            'template_czeuykn',
                            /* e.target, */
                            body_email,
                            /* {name: e.name,
                            user_email: e.user_email
                            }, */
                            /* Hola  */
                            'user_uUWNJ9j8dy0YAL3sq1nV7'
                        ).then(res => {
                            console.log("Esto fue" + res);
                        }).catch(err => console.log("Esto fueee" + err))
                    }

                    Swal.fire({
                        icon: 'success',
                        title: 'Bien',
                        text: 'Usuarios registrado correctamente',
                        footer: '<a href="/#deets">Inicia seccion</a>',
                    }).then(function () {
                        window.location = "/";
                    });

                } else {
                    console.log("No guardado")
                    console.log(exitoso)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Parase que el usuario ya existe',
                        footer: '<a href="/#deets">Inicia seccion</a>'
                    })
                }
            }
            cambiarFormularioValido(true);
            cambiarNombre({ campo: '', valido: null });
            cambiarApellido({ campo: '', valido: null });
            cambiarPassword({ campo: '', valido: null });
            cambiarPassword2({ campo: '', valido: 'null' });
            cambiarCorreo({ campo: '', valido: null });
            cambiarDocumento({ campo: '', valido: null });
            cambiarTipoDocumento({ campo: '', valido: null });
            validar();
        } else {
            cambiarFormularioValido(false);
        }
    }
    const validar = () => {
    }
    return (

        <main>
            <div className="container ">
                <Formulario action="" onSubmit={onSubmit}>
                    <div >
                        <Label  >Tipo de documento
                            <div className="doc">
                                <select
                                    estado={tipoDocumento}
                                    placeholder="Tipo de documento"
                                    type="select"
                                    name="select"
                                    id="select"
                                    className="select"
                                >
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
                    <ContenedorCorreo>
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
                    </ContenedorCorreo>

                    <Input
                        estado={password}
                        cambiarEstado={cambiarPassword}
                        tipo="password"
                        label="Contraseña"
                        name="passwordU"
                        leyendaError="La contraseña tiene que ser minimo de 5 caracteres, mayusculas, minusculas y numeros.    "
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
                        <Boton type="submit" >Enviar</Boton>
                        {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
                    </ContenedorBotonCentrado>
                    <br></br>
                </Formulario>
            </div>
        </main>
    );
}
export default App;

