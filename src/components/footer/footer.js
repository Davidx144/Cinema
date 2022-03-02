import { AiFillFacebook, AiFillPhone, AiFillInstagram, AiOutlineInfoCircle, AiFillContacts, AiOutlineMail } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { BsTwitter, BsFillPatchQuestionFill } from 'react-icons/bs';
import { GoGlobe } from 'react-icons/go';
import { FiMapPin } from 'react-icons/fi';
import icono from "../../assert/logoP.png";
import "./footer.css"

function footer() {
    return (

        <footer className="text-center text-lg-start bg-light text-muted" >
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
            </section>
            <section className="" >
                <div className="container text-center text-md-start mt-5" >
                    <div className="row mt-3" >
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" >
                            <h6 className="text-uppercase fw-bold mb-4" >
                                <i className="fas fa-gem me-3" >
                                </i>Cine.Net</h6>
                            <p>En cinenet trabajamos constantemente para brindarte la mejor experiencia de usuario.<br></br>
                                ¡Si tienes alguna sugerencia no dudes en contactarnos!
                            </p>
                            <div>
                                <img className="logoIcono" src={icono} alt="" />
                            </div >
                        </div >
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" >

                            <h6 className="text-uppercase fw-bold mb-4" >
                                Contacto </h6>
                            <p >
                                < i className="fas fa-home me-3" > </i> <FiMapPin /> Medellin - Antioquia</p>
                            <p >
                                <i className="fas fa-envelope me-3" >
                                </i><AiOutlineMail /> comunicaciones@cidenet.com.co
                            </p>
                            <p>
                                <i className="fas fa-phone me-3" > </i>
                                <FaWhatsapp /> +57 350 729 3892 </p>

                            <p > <i className="fas fa-print me-3" ></i>
                                <AiFillPhone />  (+57) 4 3222567</p></div >

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" >
                            <h6 className="text-uppercase fw-bold mb-4" > De Interés </h6>
                            <p>
                                <a href="#!" className="text-reset" >< AiOutlineInfoCircle /> Información Legal </a>
                            </p >
                            <p >
                                <a href="#!" className="text-reset" > <AiFillContacts /> Acerca de Cine.Net
                                </a></p> <p>
                                <a href="#!" className="text-reset" > < BsFillPatchQuestionFill /> Preguntas Frecuentes </a>
                            </p >
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" >
                            <h6 className="text-uppercase fw-bold mb-4" >
                                Síguenos en redes sociales
                            </h6>
                            <p>
                                <a href="https://www.cidenet.com.co/" className="text-reset" > < GoGlobe /> Web Page </a>
                            </p >
                            <p >
                                <a href="https://twitter.com/Cidenet_SAS" className="text-reset" > < BsTwitter /> Twitter </a> </p >
                            <p>
                                <a href="https://www.facebook.com/Cidenet" className="text-reset" > < AiFillFacebook /> Facebook </a>
                            </p >
                            <p ><a href="https://www.instagram.com/cidenet/?hl=es" className="text-reset" > < AiFillInstagram /> Intagram </a> </p >
                        </div>
                    </div>
                </div>
            </section >
        </footer>
    )
}
export default footer;