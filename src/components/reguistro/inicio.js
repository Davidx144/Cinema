import '../reguistro/inicio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import entra from '../images/logo.png';
import { /* Navbar, Nav, NavDropdown, Modal, */ /* Row, Col, */ Form, /* input */ } from 'react-bootstrap';
/* import sale from '../images/logo.png';
import consul from '../images/logo.png';
import parque from '../images/logo.png'; */
function Inicio() {
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
                                <Form.Control type="email" placeholder="Ingresa tu correo" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contreseña" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Recuerdame" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body >
                </Card>

            </Row></Container >


    )
}
export default Inicio;
