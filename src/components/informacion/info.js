import React from 'react';
import { Container } from 'react-bootstrap';
import "./info.css"

const Infopeli = props => {

    var URLactual = (window.location);
    console.log(URLactual.pathname)
    var url = (URLactual.pathname)
    var ids = url.slice(6)
    return (
        <Container >
            <div className='infoPeli'>
                <h1>aaaaaasas</h1>
                <p>{url}</p>
                <p>{ids}</p>

            </div>




        </Container>
    )
}
export default Infopeli;