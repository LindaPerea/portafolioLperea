import React from 'react';
import { Link } from 'react-router-dom';
import foto1 from "../assets/img/foto1.png"
import wasi from "../assets/img/wasi.png"

const About = () => {

    return (
        <div>
            
            <div className='back-about'>
            <Link to={"/"}>
                <button className='button2'>Home</button>
            </Link>
                <div className='foto-about '>
                    <img className='' src={foto1} alt="" />
                </div>
                <div className='text-about' >
                    <div className=' ' >
                        <h3>Contacts</h3>
                        <div>
                            <i className="fa-brands fa-whatsapp">+51 99064-5017</i>
                        </div>
                        <div>
                            <i class="fa-solid fa-envelope">linda.hp@hotmail.com</i>
                        </div>
                    </div>
                    <div>
                        <h3>Linda Hellyn Perea</h3>
                        <p>
                            Desarrollador Fron-End, y egresada de Administración de Empresas con 13 años de experiencia en el sector financiero en diferentes areas a lo largo de mi carrera, 4 años con experiencia en empresas de saneamiento como lo es el agua potable en las areas de planificación y el area de reclamos, encargada 1 mes del sistema de facturación de usuarios de la oficina principal

                            Me gusta los desafios, acostumbrada a ha realizar de manera organizada varias tareas si la situación lo requiere, la programación para mi es plasmar las ideas de los clientes en aplicativos faciles de usar y agradables a la vista para disfrutar.
                        </p>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default About;