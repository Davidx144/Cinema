import './agregarPelicula.css'
import { Container, Row } from "react-bootstrap";
import { /*Button, FormGroup, Form, Label,   FormText  Input,*/ Col } from 'reactstrap';
import { useForm } from "react-hook-form";
import { select } from 'react-bootstrap';
import Swal from 'sweetalert2'


const AgregarPelicula = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        /* data.preventDefault(); */
        /* alert(JSON.stringify(data)); */
        console.log(data.title);
        const newPelicula = (JSON.stringify(data));
        console.log(newPelicula)

        conectar();
        async function conectar() {
            const respuesta = await fetch('/api/registerMovie', {
                method: "POST",
                body: newPelicula,
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const exitoso = await respuesta.json();
            if (exitoso.succes === true) {
                console.log("Guardado")
                console.log(exitoso)
                Swal.fire({
                    icon: 'success',
                    title: 'Bien',
                    text: 'Pelicula registrada correctamente',
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
                    text: 'Parase que la pelicula ya existe',
                    footer: '<a href="/#deets">Inicia seccion</a>'
                })
            }
        }
    };



    return (
        <Container>
            <div className='agregarPeli'>
                <h3>Crear Peliculas</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-row">
                        <Row>
                            <Col sm={6}>
                                <div>
                                    <label for="">Titulo</label>
                                    <input {...register("title")} type="text" class="form-control" id="validationCustom01" placeholder="Titulo de la pelicula" className='select' required />
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
                                    <input {...register("hour")} type="time" class="form-control" id="validationCustom01" placeholder="Titulo de la pelicula" className='select' required />
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div>
                                    <label >Formato</label>
                                    <select {...register("format")} className='select'>
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
                                    <input {...register("value")} type="number" class="form-control" id="" placeholder="Precio" className='select' required />
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div>
                                    <label for="">Duraccion</label>
                                    <input {...register("duration")} type="number" class="form-control" id="" placeholder="Duraccion en minutos" className='select' required />
                                </div>
                            </Col>

                            <Col sm={6}>
                                <div>
                                    <label for="">Imagen</label>
                                    <textarea {...register("img")} type="textarea" class="form-control" id="" placeholder="Link de la Imagen" rows="2" required />
                                </div>
                            </Col>

                            <Col sm={6}>
                                <div>
                                    <label for="">Trailer</label>
                                    <textarea {...register("trailer")} type="textarea" class="form-control" id="" placeholder="Link del trailer" rows="2" required />
                                </div>
                            </Col>

                            <Col sm={12}>
                                <div>
                                    <label for="">Descripcion</label>
                                    <textarea {...register("synopsis")} type="textarea" class="form-control" id="" placeholder="Descripcion de la pelicula" rows="4" required />
                                </div>
                            </Col>
                        </Row>

                    </div>

                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label class="form-check-label" for="invalidCheck">
                                ¿He leído y verificado que todo esté bien?
                            </label>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Agregar</button>
                </form>



                {/*  <Form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>First Name</label>
                        <input {...register("firstName")} />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                    </div> */}
                {/* <input {...agregarPeli("firstName")} /> */}
                {/* <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select> */}
                {/* <FormGroup >
                        <Label for="exampleEmail" size="lg" >
                            Agregar Peliculas
                        </Label>
                    </FormGroup>
                    <div class="row">
                        <Row>
                            <Col sm={7}>
                                <FormGroup>
                                    <Label>
                                        Titulo
                                    </Label>
                                    <Input
                                        {...register("Titulo")}
                                        id="Titulo"
                                        class="form-control"
                                        name="Titulo"
                                        placeholder="Titulo"
                                        type="text"
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={5}>
                                <FormGroup>
                                    <Label for="Genero">
                                        Genero
                                    </Label>
                                    <Input
                                        
                                        id="Genero"
                                        name="Genero"
                                        type="select"
                                        required
                                    >
                                        <option>
                                            Aventura
                                        </option>
                                        <option>
                                            Terror
                                        </option>
                                        <option>
                                            Drama
                                        </option>
                                        <option>
                                            Comedia
                                        </option>
                                        <option>
                                            Acción
                                        </option>
                                        <option>
                                            Suspenso
                                        </option>
                                        <option>
                                            Ficción
                                        </option>
                                        <option>
                                            Ciencia
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col> */}

                {/*                             <FormGroup>
                                <Label for="exampleDate">
                                    Date
                                </Label>
                                <Input
                                    id="exampleDate"
                                    name="date"
                                    placeholder="date placeholder"
                                    type="date"
                                />
                            </FormGroup> */}

                {/* <Col sm={4}>
                                <FormGroup>
                                    <Label for="Hora">
                                        Hora
                                    </Label>
                                    <Input
                                        id="Hora"
                                        name="Hora"
                                        placeholder="Hora de la pelicula"
                                        type="time"
                                        required
                                    />
                                </FormGroup>
                            </Col>

                            <br></br>

                            <Col sm={4}>
                                <FormGroup>
                                    <Label for="Formato">
                                        Formato
                                    </Label>
                                    <Input
                                        id="Formato"
                                        name="Formato"
                                        type="select"
                                        required
                                    >
                                        <option>
                                            2D
                                        </option>
                                        <option>
                                            3D
                                        </option>
                                        <option>
                                            Surround
                                        </option>

                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label for="Valor">
                                        Valor
                                    </Label>
                                    <Input
                                        id="Valor"
                                        name="number"
                                        placeholder="Valor de la boleta"
                                        type="number"
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={8}>
                                <FormGroup>
                                    <Label for="Descripcion">
                                        Descripción
                                    </Label>
                                    <Input
                                        id="Descripcion"
                                        name="Descripcion"
                                        type="textarea"
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label for="Imagen">
                                        Link de la imagen
                                    </Label>
                                    <Input
                                        id="Img"
                                        name="LinkImg"
                                        type="textarea"
                                        required
                                    />
                                </FormGroup>
                            </Col> */}
                {/*                             <br></br>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label for="imagen">
                                        Imagen
                                    </Label>
                                    <Input
                                        id="Imagen"
                                        name="Imagen"
                                        type="file"
                                        required
                                    />
                                    <FormText>

                                        Aqui debe seleccionar la imagen de la pelicula
                                    </FormText>
                                </FormGroup>
                            </Col> */}
                {/* </Row>
                    </div>

                    <br></br> */}
                {/* <Button color="primary">
                        Submit
                    </Button>
                </Form> */}
            </div>

        </Container>
    );
}

export default AgregarPelicula;