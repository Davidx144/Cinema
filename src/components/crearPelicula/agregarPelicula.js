//imr
import React, { useState } from 'react'
/* import {input} from 'bootstrap' */
import './agregarPelicula.css'
import { Container, Row } from "react-bootstrap";
import { Button, FormGroup, Form, Label, Input, /* FormText, */ Col } from 'reactstrap';


/* return [Titulo, ()=> {console.log("ayu", Genero)}, alert("Texto a mostrar", Hora)] */

// eslint-disable-next-line react-hooks/rules-of-hooks
/* const [nombre, cambiarNombre] = useState({ campo: '', valido: null }); */


const AgregarPelicula = () => {
    const [Titulo] = useState({ campo: '', valido: null });
    const onSubmit = ({ Titulo, Genero, Hora, Formato, Valor, Descripcion, Imagen }) => {
    /* const onSubmit = (e) => { */
        console.log(Titulo)
        alert(Titulo)
    }
    return (
        <Container>
            <div className='agregarPeli'>

                <Form onSubmit={onSubmit}>
                    <FormGroup >
                        <Label for="exampleEmail" size="lg" >
                            Agregar Peliculas
                        </Label>
                        {/*                         <Input
                            plaintext
                            value="Some plain text/ static value"
                        /> */}
                    </FormGroup>

                    <div class="row">
                        <Row>
                            <Col sm={7}>
                                <FormGroup>
                                    <Label for="Titulo">
                                        Titulo
                                    </Label>
                                    <Input
                                        /* value={Titulo} */
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
                            </Col>

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

                            <Col sm={4}>
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
                            </Col>
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
                        </Row>
                    </div>

                    <br></br>
                    <Button color="primary">
                        Submit
                    </Button>
                </Form>
            </div>

        </Container>
    );
}

export default AgregarPelicula;