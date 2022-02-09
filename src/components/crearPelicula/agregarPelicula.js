import './agregarPelicula.css'
import { Container, Row } from "react-bootstrap";
import { /*Button, FormGroup, Form, Label,   FormText  Input,*/ Col } from 'reactstrap';
import { useForm } from "react-hook-form";
/* import { select } from 'react-bootstrap'; */
import Swal from 'sweetalert2'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

/* export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  } */

const AgregarPelicula = () => {


    const animatedComponents = makeAnimated();
    const colourOptions = [
        { value: 'ocean', label: 'Ocean', name: 'ose', color: '#00B8D9', isFixed: true },
        { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true, name: 'osea' },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630', isFixed: true, name: 'oses' },
        { value: 'orange', label: 'Orange', color: '#FF8B00', name: 'osed' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400', name: 'osef' },
        { value: 'green', label: 'Green', color: '#36B37E', name: 'oseg' },
        { value: 'forest', label: 'Forest', color: '#00875A', name: 'osez' },
        { value: 'slate', label: 'Slate', color: '#253858', name: 'osex' },
        { value: 'silver', label: 'Silver', color: '#666666', name: 'osec' },
    ];

    const handleColor = (da) => {
        console.log(da)
    }

    console.log(colourOptions)
    const { register, handleSubmit } = useForm([{horarios:['11:00','9:00']}]);
    const onSubmit = (data) => {
        /* data.preventDefault(); */
        /* alert(JSON.stringify(data)); */
        const data2 = {hours:["12:00 PM","3:00 PM","6:00 PM", "9:00 PM"]}

        const data3 = Object.assign({}, data, data2)
        console.log(data.title);
        /* console.log(data.horarios); */
        console.log(data3);
        const newPelicula = (JSON.stringify(data3));
        console.log(newPelicula)

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
                {/* <form onSubmit={handleColor()}>
                    <div className="form-row">
                        <Row>
                            <Col sm={6}>
                                <label for="">Color</label >
                                <Select className='select form-control'
                                    {...register("color")}
                                    id="validationCustom0133"
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    defaultValue={[colourOptions[4], colourOptions[5]]}
                                    isMulti
                                    options={[{value:'aa',label:'bb',name:'ss'},{value:'aas',label:'bbd',name:'ssd'}]}
                                />
                            </Col>
                        </Row>
                    </div>
                </form> */}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <Row>
                            <Col sm={6}>
                                <div>
                                    <label for="">Titulo</label >
                                    <input {...register("title")} type="text" /* className="form-control"  */ id="validationCustom01" placeholder="Titulo de la pelicula" className='select form-control' /* defaultValue={"3D"} */ required />
                                </div>
                            </Col>


                            <Col sm={4}>
                                <div>

                                    {/* <label class="form-label select-label">Example label</label> */}

                                    <div
                                        /* ref="d" */
                                        className="checkboxes border-gray-200 border border-solid"
                                    >
                                        <label htmlFor="one" className="block ">
                                            <input
                                                type="checkbox"
                                                id="one"
                                                
                                                value="Instagram"
                                                className="m-3"
                                            />
                                            Instagram
                                        </label>
                                        <label htmlFor="two" className="block">
                                            <input
                                                type="checkbox"
                                                id="two"
                                                
                                                value="LinkedIn"
                                                className="m-3"
                                            />
                                            LinkedIn
                                        </label>
                                    </div>


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

                            <Col sm={2}>
                                <div>
                                    <label for="">Hora</label>
                                    <input {...register("hour")} type="time" id="validationCustom01" placeholder="Titulo de la pelicula" className='select form-control"' required />
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

export default AgregarPelicula;