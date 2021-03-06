import './editarPelicula.css'
import { Container, Row } from "react-bootstrap";
import { Col } from 'reactstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import BeatLoader from "react-spinners/BeatLoader"
import { useState } from "react"


var URLeditactual = (window.location);
var urlEditar = (URLeditactual.pathname)

var idsEditable = urlEditar.slice(0, 8)
var idsParam = urlEditar.slice(8)
if (idsEditable === "/editar/") {
    var idActualEdit = (`/api/info/${idsParam}`)
    var idActualToEdit = (`/api/update/${idsParam}`)
}
infoPeliculaEdit()
let peliculaActualEdit = []
async function infoPeliculaEdit(props) {
    const respuestas = await fetch(idActualEdit, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    peliculaActualEdit = await respuestas.json()
}

const EditarPelicula = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const newPelicula = (JSON.stringify(data));

        updateMovie();
        async function updateMovie() {
            const respuesta = await fetch(idActualToEdit, {
                method: "PUT",
                body: newPelicula,
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const exitoso = await respuesta.json();
            if (exitoso.update === true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Bien',
                    text: 'Pelicula modificada correctamente',
                }).then(function () {
                    window.location = "/";
                });
            } else {
                Swal.fire({
                    href: "/",
                    icon: 'error',
                    title: 'Oops...',
                    text: 'paso algo raro',
                })
            }
        }
    };

    const [loading, setLoading] = useState(true)
    const cambiarEstado = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }

    if (loading) {
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
                                <Col sm={7}>
                                    <div>
                                        <label for="">Titulo</label >
                                        <input {...register("title")} type="text" id="validationCustom01" placeholder="Titulo de la pelicula" className='select form-control' defaultValue={peliculaActualEdit[0].title} required />
                                    </div>
                                </Col>

                                <Col sm={5}>
                                    <div>
                                        <label >Genero</label>
                                        <select {...register("gender")} className='select' defaultValue={peliculaActualEdit[0].gender} >
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
                                            <option value="Acci??n">
                                                Acci??n
                                            </option>
                                            <option value="Suspenso">
                                                Suspenso
                                            </option>
                                            <option value="Ficci??n">
                                                Ficci??n
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


                                <Col sm={4}>
                                    <div>
                                        <label >Formato</label>
                                        <select {...register("format")} className='select' defaultValue={peliculaActualEdit[0].format}  >
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
                                        <input {...register("value")} type="number" id="" placeholder="Precio" className='select form-control' defaultValue={peliculaActualEdit[0].value} required />
                                    </div>
                                </Col>

                                <Col sm={4}>
                                    <div>
                                        <label for="">Duraccion</label>
                                        <input {...register("duration")} type="number" id="" placeholder="Duraccion en minutos" className='select form-control' defaultValue={peliculaActualEdit[0].duration} required />
                                    </div>
                                </Col>

                                <Col sm={6}>
                                    <div>
                                        <label for="">Imagen</label>
                                        <textarea {...register("img")} type="textarea"  className='form-control' id="" placeholder="Link de la Imagen" rows="2" defaultValue={peliculaActualEdit[0].img} required />
                                    </div>
                                </Col>

                                <Col sm={6}>
                                    <div>
                                        <label for="">Trailer</label>
                                        <textarea {...register("trailer")} type="textarea"  className='form-control' id="" placeholder="Link del trailer" rows="2" defaultValue={peliculaActualEdit[0].trailer} required />
                                    </div>
                                </Col>

                                <Col sm={12}>
                                    <div>
                                        <label for="">Descripcion</label>
                                        <textarea {...register("synopsis")} type="textarea"  className='form-control' id="" placeholder="Descripcion de la pelicula" rows="4" defaultValue={peliculaActualEdit[0].synopsis} required />
                                    </div>
                                </Col>
                                <div className="row justify-content-around">
                                    <Col sm={2}>
                                        <div>
                                            <label >??En cartelera?</label>
                                            <select {...register("cartelera")} className='select' defaultValue={peliculaActualEdit[0].cartelera}>
                                                <option value="SI">
                                                    Si
                                                </option>
                                                <option value="NO">
                                                    No
                                                </option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col sm={2}>
                                    <div>
                                        <label >??Destacada?</label>
                                        <select {...register("relevant")} className='select' defaultValue={peliculaActualEdit[0].relevant}>
                                            <option value="NO">
                                                No
                                            </option>
                                            <option value="SI">
                                                Si
                                            </option>
                                        </select>
                                    </div>
                                </Col>
                                </div>
                            </Row>

                        </div>

                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" for="invalidCheck">
                                    ??He le??do y verificado que todo est?? bien?
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Editar</button>
                    </form>
                </div>
            </Container>
        );
    }

}

export default EditarPelicula;