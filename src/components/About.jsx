import React from 'react';
import { Link } from 'react-router-dom';
import foto1 from "../assets/img/foto1.png"
import wasi from "../assets/img/wasi.png"
import Articles from './Articles';
import NavBar from './NavBar';

const About = () => {

    return (
        <div className='front-about'>
            <NavBar />
            <div className='back-about'>
            <Articles />
                <div className='foto-about '>
                    <img className='' src={foto1} alt="" />
                </div>
                <div className='text-about' >
                    <div className=' ' >
                        <h3>Contacto</h3>
                        <div className='links-about'>
                        <a href="https://wa.me/message/74UFOE7GRBTPN1"><i className="fa-brands fa-square-whatsapp">51+99064-5017</i></a>
    
                        </div>
                        <div>
                        <a href="mailto:linda.hp@hotmail.com"><i className="fa-solid fa-square-envelope">linda.hp@hotmail.com</i></a>
                        </div>
                    </div>
                    <div>
                        <h3>Hola soy Linda Hellyn Perea</h3>
                        <p>
                            Desarrollador FullStack, y egresada de la carrera de Administración de Empresas con 13 años de experiencia en el sector financiero en diferentes areas a lo largo de mi carrera, 4 años con experiencia en empresas de saneamiento como lo es el agua potable en las areas de planificación y el area de reclamos, encargada 1 mes del sistema de facturación de usuarios de la oficina principal

                            Me gusta los desafios, acostumbrada a ha realizar de manera organizada varias tareas si la situación lo requiere, la programación para mi es plasmar las ideas de los clientes en aplicativos faciles de usar y agradables a la vista para que sea una experiencia de usuario inolvidable.
                        </p>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default About;