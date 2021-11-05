import { DiReact, DiBootstrap } from 'react-icons/di';
import { AiFillFacebook, AiFillPhone, AiFillInstagram, AiOutlineInfoCircle, AiFillContacts, AiOutlineMail } from 'react-icons/ai';
import { FaWhatsapp, FaVuejs } from 'react-icons/fa';
import { BsTwitter, BsFillPatchQuestionFill } from 'react-icons/bs';
import { GoGlobe } from 'react-icons/go';
import { FiMapPin } from 'react-icons/fi';






import icono from "../../assert/logoP.png";
import "./footer.css"

function footer() {
    return (

        <footer class="text-center text-lg-start bg-light text-muted" >
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
                {/* <div class="me-5 d-none d-lg-block" >
                    <span > En caso de tener algún inconveniente:
                    </span>
                </div> */}
            </section>
            <section class="" >
                <div class="container text-center text-md-start mt-5" >
                    <div class="row mt-3" >
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" >
                            <h6 class="text-uppercase fw-bold mb-4" >
                                <i class="fas fa-gem me-3" >
                                </i>Cine.Net</h6>
                            <p>En cinenet trabajamos constantemente para brindarte la mejor experiencia de usuario.<br></br>
                                ¡Si tienes alguna sugerencia no dudes en contactarnos!
                            </p>
                            <div>
                                <img class="logoIcono" src={icono}></img>
                            </div >
                        </div >
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" >

                            <h6 class="text-uppercase fw-bold mb-4" >
                                Contacto </h6>
                            <p >
                                < i class="fas fa-home me-3" > </i> <FiMapPin /> Medellin - Antioquia</p>
                            <p >
                                <i class="fas fa-envelope me-3" >
                                </i><AiOutlineMail /> comunicaciones@cidenet.com.co
                            </p>
                            <p>
                                <i class="fas fa-phone me-3" > </i>
                                <FaWhatsapp /> +57 350 729 3892 </p>

                            <p > <i class="fas fa-print me-3" ></i>
                                <AiFillPhone />  (+57) 4 3222567</p></div >

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" >
                            <h6 class="text-uppercase fw-bold mb-4" > De Interés </h6>
                            <p>
                                <a href="#!" class="text-reset" >< AiOutlineInfoCircle /> Información Legal </a>
                            </p >
                            <p >
                                <a href="#!" class="text-reset" > <AiFillContacts /> Acerca de Cine.Net
                                </a></p> <p>
                                <a href="#!" class="text-reset" > < BsFillPatchQuestionFill /> Preguntas Frecuentes </a>
                            </p >
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" >
                            <h6 class="text-uppercase fw-bold mb-4" >
                                Síguenos en redes sociales
                            </h6>
                            <p>
                                <a href="https://www.cidenet.com.co/" class="text-reset" > < GoGlobe /> Web Page </a>
                            </p >
                            <p >
                                <a href="https://twitter.com/Cidenet_SAS" class="text-reset" > < BsTwitter /> Twitter </a> </p >
                            <p>
                                <a href="https://www.facebook.com/Cidenet" class="text-reset" > < AiFillFacebook /> Facebook </a>
                            </p >
                            <p ><a href="https://www.instagram.com/cidenet/?hl=es" class="text-reset" > < AiFillInstagram /> Intagram </a> </p >
                        </div>
                    </div>
                </div>
            </section >
        </footer>
    )
}
export default footer;