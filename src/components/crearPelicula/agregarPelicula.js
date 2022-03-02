import './agregarPelicula.css'
import { Container, Row } from "react-bootstrap";
import { Col } from 'reactstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const AgregarPelicula = () => {
  
    const { register, handleSubmit } = useForm([{ horarios: ['11:00', '9:00'] }]);
    const onSubmit = (data) => {
        const data2 = { hours: ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"] }

        const data3 = Object.assign({}, data, data2)
        const newPelicula = (JSON.stringify(data3));

        registerMovie();
        async function registerMovie() {
            const respuesta = await fetch('/api/registerMovie', {
                method: "POST",
                body: newPelicula,
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const exitoso = await respuesta.json();
            if (exitoso.succes === true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Bien',
                    text: 'Pelicula registrada correctamente',
                }).then(function () {
                    window.location = "/";
                });
            } else {
                Swal.fire({
                    href: "/",
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Parase que la pelicula ya existe',
                })
            }
        }
    };



    return (
        <Container>
            <div className='agregarPeli'>
                <h3>Crear Peliculas</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <Row>
                            <Col sm={7}>
                                <div>
                                    <label for="">Titulo</label >
                                    <input {...register("title")} type="text"  id="validationCustom01" placeholder="Titulo de la pelicula" className='select form-control' required />
                                </div>
                            </Col>


                            <Col sm={5}>
                                <div>
                                    <label >Genero</label>
                                    <select {...register("gender")} className='select'
                                    >
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
                                    <input {...register("value")} type="number" id="" placeholder="Precio" className='select form-control' required />
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div>
                                    <label for="">Duraccion</label>
                                    <input {...register("duration")} type="number" id="" placeholder="Duraccion en minutos" className='select form-control' required />
                                </div>
                            </Col>

                            <Col sm={6}>
                                <div>
                                    <label for="">Imagen</label>
                                    <textarea {...register("img")} type="textarea" className='form-control' id="" placeholder="Link de la Imagen" rows="2" required />
                                </div>
                            </Col>

                            <Col sm={6}>
                                <div>
                                    <label for="">Trailer</label>
                                    <textarea {...register("trailer")} type="textarea"  className='form-control' id="" placeholder="Link del trailer" rows="2" required />
                                </div>
                            </Col>

                            <Col sm={12}>
                                <div>
                                    <label for="">Descripcion</label>
                                    <textarea {...register("synopsis")} type="textarea" className='form-control' id="" placeholder="Descripcion de la pelicula" rows="4" required />
                                </div>
                            </Col>
                            <div className="row justify-content-around">
                                <Col sm={2}>
                                    <div>
                                        <label >¿En cartelera?</label>
                                        <select {...register("cartelera")} className='select'>
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
                                        <label >¿Destacada?</label>
                                        <select {...register("relevant")} className='select'>
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

export default AgregarPelicula;