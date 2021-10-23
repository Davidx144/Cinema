import '../reguistro/inicio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import entra from '../images/logo.png';
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
                        <Card.Title > Registrar Ingreso
                        </Card.Title>
                        <Card.Text >
                            Aquí puedes registrar los vehículos que ingresan, teniendo en cuenta tan solo el número de su placa.
                        </Card.Text>
                        <Button variant="primary" href="../registro">
                            Ingreso
                        </Button></Card.Body >
                </Card>

            </Row></Container >

            
    )
}
export default Inicio;
