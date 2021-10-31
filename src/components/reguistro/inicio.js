import '../reguistro/inicio.css';
import 'bootstrap/dist/js/bootstrap.min.js';
/* import React from 'react'; */
import React, { Component, useState, state } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import entra from '../images/logo.png';

const App = () => {
    let [Fullname, setFullname] = useState({
      fname: '',
      lname: ''
    })
    
    const handleChange = (event) => {
      let value = event.target.value;
      let name = event.target.name;
    
      setFullname((prevalue) => {
        return {
          ...prevalue,   // Spread Operator               
          [name]: value
        }
      })
      console.log(value);
    }

    return (
        <>
            <Container>
                <Row Col-8 className="cards">
                    <Card className="cards"
                        style={{ width: '18rem' }} >
                        <Card.Img variant="top"
                            src={entra} />
                        <Card.Body >
                            <Card.Title > Ingresar
                            </Card.Title>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control type="email" placeholder="Ingresa tu correo" name="correo" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Contreseña" name="contrasena" onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Recuerdame" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Ingresar
                                </Button>
                            </Form>
                        </Card.Body >
                    </Card>

                </Row></Container >
{/*             <form>
                <div>
                    <h1>Hello <span style={{ color: 'red' }}>{Fullname.fname}</span>
                        <span style={{ color: 'green' }}>{Fullname.lname}</span></h1>
                    <input type='text' placeholder='Enter Your FirstName'
                        onChange={handleChange} name='fname' />
                    <input type='text' placeholder='Enter Your LastName'
                        onChange={handleChange} name='lname' />
                </div>
            </form> */}
        </>
    )
}

export default App;


/* class Inicio extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }

    render() {
        return (
            <main>
                <Container>
                    <Row Col-8 className="cards">
                        <Card className="cards"
                            style={{ width: '18rem' }} >
                            <Card.Img variant="top"
                                src={entra} />
                            <Card.Body >
                                <Card.Title > Ingresar
                                </Card.Title>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Correo</Form.Label>
                                        <Form.Control type="email" placeholder="Ingresa tu correo" name="correo"  onChange={handleChange}  />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="Contreseña" name="contrasena"  onChange={handleChange}   />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Recuerdame" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Ingresar
                                    </Button>
                                </Form>
                            </Card.Body >
                        </Card>

                    </Row></Container >

                <form>
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"
                    />
                    <br />

                    <input
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                    />
                    <br />

                    <input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"
                    />
                    <br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>

                    <br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>

                    <br />

                    <select
                        value={this.state.destination}
                        name="destination"
                        onChange={this.handleChange}
                    >
                        <option value="">-- Please Choose a destination --</option>
                        <option value="germany">Germany</option>
                        <option value="norway">Norway</option>
                        <option value="north pole">North Pole</option>
                        <option value="south pole">South Pole</option>
                    </select>

                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        /> Vegan?
                    </label>
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher}
                        /> Kosher?
                    </label>
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree}
                        /> Lactose Free?
                    </label>
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:</p>

                <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>

            </main>
        )
    }
}

export default Inicio;
 */



/* export default class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
} */


/* export default class inicio extends Component {
    render() {
        var state = {
            form: {
                correo: '',
                contrasena: ''
            }
        }
        var handleChange = (e) => {
            state({
                form: {
                    ...this.state.form,
                    [e.target.name]: e.target.value
                }
            })
        }
    }
    return(
            <div>

            </div >
        )
    }
} */

/*
function Inicio() {
    var state = {
        form: {
            correo: '',
            contrasena: ''
        }
    }

    var handleChange = (e) => {
        state({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    var handleChange=(e)=>{
        console.log(e);
        this.props.setMonth(e.target.id, e.target.value); // here the method is not found, causing error.
        }
         const handleChange=async e=>{
        await this.state({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    return (
        <Container>
            <Row Col-8 className="cards">
                <Card className="cards"
                    style={{ width: '18rem' }} >
                    <Card.Img variant="top"
                        src={entra} />
                    <Card.Body >
                        <Card.Title > Ingresar
                        </Card.Title>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu correo" name="correo" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contreseña" name="contrasena" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Recuerdame" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Ingresar
                            </Button>
                        </Form>
                    </Card.Body >
                </Card>

            </Row></Container >

    )
}

export default Inicio;
 */