import '../reguistro/inicio.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import entra from '../images/logo.png';


export default class Inicio extends React.Component {
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
}


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