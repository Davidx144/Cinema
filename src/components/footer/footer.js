import { DiGithubBadge, DiReact, DiBootstrap } from 'react-icons/di';
import { AiFillFacebook, AiFillPhone, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FaWhatsapp, FaVuejs } from 'react-icons/fa';

function footer() {
    return (

        <footer class="text-center text-lg-start bg-light text-muted" >
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
                <div class="me-5 d-none d-lg-block" >
                    <span > En caso de tener algún inconveniente:
                    </span>
                </div>
            </section>
            <section class="" >
                <div class="container text-center text-md-start mt-5" >
                    <div class="row mt-3" >
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" >
                            <h6 class="text-uppercase fw-bold mb-4" >
                                <i class="fas fa-gem me-3" >
                                </i>Nelson Aristizabal </h6>
                            <p>Si necesita ayuda, guías, quejas o reclamos puede comunicarse por los siguientes medios.
                            </p> </div >
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" >

                            <h6 class="text-uppercase fw-bold mb-4" >
                                Contacto </h6>
                            <p >
                                < i class="fas fa-home me-3" > </i> Medellin - Antioquia</p>
                            <p >
                                <i class="fas fa-envelope me-3" >
                                </i>david .14420 @gmail.com
                            </p>
                            <p>
                                <i class="fas fa-phone me-3" > </i>
                                <FaWhatsapp /> +57 350 729 3892 </p>
                            <p > <i class="fas fa-print me-3" ></i>
                                <AiFillPhone /> 2222253</p></div >
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" >
                            <h6 class="text-uppercase fw-bold mb-4" >
                                Productos </h6> <p>
                                <a href="#!" class="text-reset" >
                                    < DiReact /> React </a>
                            </p >
                            <p >
                                <a href="#!" class="text-reset" > <FaVuejs />Vue
                                </a></p> <p>
                                <a href="#!" class="text-reset" > < DiBootstrap /> Bootstrap </a>
                            </p >
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" >
                            <h6 class="text-uppercase fw-bold mb-4" >
                                Redes Sociales
                            </h6>
                            <p>
                                <a href="https://www.linkedin.com/in/nelson-david-aristiz%C3%A1bal-amaya-9788a91ba/" class="text-reset" > < AiFillLinkedin /> Linkedin </a>
                            </p >
                            <p >
                                <a href="https://github.com/Davidx144" class="text-reset" > < DiGithubBadge /> Git Hub </a> </p >
                            <p>
                                <a href="https://www.facebook.com/david144205/" class="text-reset" > < AiFillFacebook /> Facebook </a>
                            </p >
                            <p ><a href="https://www.instagram.com/n.david.a/?fbclid=IwAR0xTYwLfUGtnvo6EgSqQbXJ0DL651OJSHvCEIjmgK0byfSdDAPMwWi8R4A" class="text-reset" > < AiFillInstagram /> Intagram </a> </p >
                        </div>
                    </div>
                </div>
            </section >
        </footer>
    )
}
export default footer;