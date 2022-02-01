import './editarPelicula.css'
import { Container, Row } from "react-bootstrap";
import { /*Button, FormGroup, Form, Label,   FormText  Input,*/ Col } from 'reactstrap';
import { useForm } from "react-hook-form";
/* import { select } from 'react-bootstrap'; */
import Swal from 'sweetalert2'
import BeatLoader from "react-spinners/BeatLoader"
import { useState } from "react"


var URLeditactual = (window.location);
var urlEditar = (URLeditactual.pathname)

var idsEditable = urlEditar.slice(0, 6)
console.log(urlEditar)
if (idsEditable === "/editar/") {
    var idActualEdit = (`/api/info/${idsEditable}`)
    var idActualToEdit = (`/api/editar/${idsEditable}`)
}
infoPeliculaEdit()
let peliculaActualEdit = [{ title: "Peli a editar" }]
async function infoPeliculaEdit(props) {
    const respuestas = await fetch(idActualEdit, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    peliculaActualEdit = await respuestas.json()
    console.log(peliculaActualEdit[0])
}

const EditarPelicula = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        /* data.preventDefault(); */
        /* alert(JSON.stringify(data)); */
        console.log(data.title);
        const newPelicula = (JSON.stringify(data));
        console.log(newPelicula)

        updateMovie();
        async function updateMovie() {
            const respuesta = await fetch(idActualToEdit, {
                method: "POST",
                body: newPelicula,
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const exitoso = await respuesta.json();
            if (exitoso.update === true) {
                console.log("Guardado")
                console.log(exitoso)
                Swal.fire({
                    icon: 'success',
                    title: 'Bien',
                    text: 'Pelicula modificada correctamente',
                    footer: '<a href="/#deets">Inicia seccion</a>'
                }).then(function () {
                    window.location = "/";
                });
            } else {
                console.log("No guardado")
                console.log(exitoso)
                Swal.fire({
                    href: "/",
                    icon: 'error',
                    title: 'Oops...',
                    text: 'paso algo raro',
                    footer: '<a href="/#deets">Inicia seccion</a>'
                })
            }
        }
    };

    console.log(peliculaActualEdit)

    const [loading, setLoading] = useState(true)
    const cambiarEstado = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }

    if ( loading /*|| peliculaActual === []*//* peliCargada === false */) {
        cambiarEstado()
        return (
            <div>

                <Container className='loading'>
                    <BeatLoader
                        size={15}
                    />
                </Container>
            </div>
        )

    } else {
        return (
            <Container>
                <div className='agregarPeli'>
                    <h3>Editar Pelicula</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">
                            <Row>
                                <Col sm={6}>
                                    <div>
                                        <label for="">Titulo</label >
                                        <input {...register("title")} type="text" /* className="form-control"  */ id="validationCustom01" placeholder="Titulo de la pelicula" className='select form-control' defaultValue={peliculaActualEdit[0].title} required />
                                    </div>
                                </Col>
    
                                <Col sm={4}>
                                    <div>
                                        <label >Genero</label>
                                        <select {...register("gender")} className='select'>
                                            <option value="Aventura">
                                                Aventura
                                            </option>
                                            <option value="Terror">
                                                Terror
                                            </option>
                                            <option value="Drama">
                                                Drama
                                            </option>
                                            <option value="Comedia">
                                                Comedia
                                            </option>
                                            <option value="Acción">
                                                Acción
                                            </option>
                                            <option value="Suspenso">
                                                Suspenso
                                            </option>
                                            <option value="Ficción">
                                                Ficción
                                            </option>
                                            <option value="Ciencia">
                                                Ciencia
                                            </option>
                                            <option value="Animacion">
                                                Animacion
                                            </option>
                                        </select>
                                    </div>
                                </Col>
    
                                <Col sm={2}>
                                    <div>
                                        <label for="">Hora</label>
                                        <input {...register("hour")} type="time" /* className="form-control" */ id="validationCustom01" placeholder="Titulo de la pelicula" className='select form-control"' required />
                                    </div>
                                </Col>
    
                                <Col sm={4}>
                                    <div>
                                        <label >Formato</label>
                                        <select {...register("format")} className='select' >
                                            <option value="2D">
                                                2D
                                            </option>
                                            <option value="3D">
                                                3D
                                            </option>
                                            <option value="Surround">
                                                Surround
                                            </option>
                                        </select>
                                    </div>
                                </Col>
    
                                <Col sm={4}>
                                    <div>
                                        <label for="">Precio</label>
                                        <input {...register("value")} type="number" /* className="form-control"  */ id="" placeholder="Precio" className='select form-control' required />
                                    </div>
                                </Col>
    
                                <Col sm={4}>
                                    <div>
                                        <label for="">Duraccion</label>
                                        <input {...register("duration")} type="number" /* className="form-control"  */ id="" placeholder="Duraccion en minutos" className='select form-control' required />
                                    </div>
                                </Col>
    
                                <Col sm={6}>
                                    <div>
                                        <label for="">Imagen</label>
                                        <textarea {...register("img")} type="textarea" /* className="form-control" */ className='form-control' id="" placeholder="Link de la Imagen" rows="2" required />
                                    </div>
                                </Col>
    
                                <Col sm={6}>
                                    <div>
                                        <label for="">Trailer</label>
                                        <textarea {...register("trailer")} type="textarea" /* className="form-control" */ className='form-control' id="" placeholder="Link del trailer" rows="2" required />
                                    </div>
                                </Col>
    
                                <Col sm={12}>
                                    <div>
                                        <label for="">Descripcion</label>
                                        <textarea {...register("synopsis")} type="textarea" /* className="form-control"  */ className='form-control' id="" placeholder="Descripcion de la pelicula" rows="4" required />
                                    </div>
                                </Col>
                            </Row>
    
                        </div>
    
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" for="invalidCheck">
                                    ¿He leído y verificado que todo esté bien?
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Agregar</button>
                    </form>
                </div>
            </Container>
        );
    }

}

export default EditarPelicula;