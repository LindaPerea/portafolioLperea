import React from 'react';
import { Link } from 'react-router-dom';
import Articles from './Articles';


const Servicios = () => {

    return (
        <div className='front-about'>
            <div className='back-about'>
            <Articles />
            <div className='center-landing'>
                <div className='foto-about '>
                    <h2>MODELOS DE WEB</h2>
                    <div className='models'>
                    <a className='center-models j' href="https://landingmodel.netlify.app/" alt="imagen landing">Landing Page</a>
                    <a className='center-models' href="https://www.inmobiliariacya.com" alt="imagen landing">Inmobiliaria</a>
                    <a className='center-models' href="https://mirestaurant.netlify.app" alt="imagen landing">Restaurant</a>
                        
                    </div>
                </div>
                
            </div>
                <div className='text-about' >
                    <div className='center-contacto' >
                        <div className='links-about'>
                        <a href="https://wa.me/message/74UFOE7GRBTPN1">CONTACTAME</a>    
                        </div>
                    </div>
                    {/* <div>
                        <h3>Soy Linda Hellyn Perea</h3>
                        <p>
                            Developer FullStack, egresada de la carrera de Administración de Empresas con 13 años de experiencia en el sector financiero, 4 años con experiencia en empresas de saneamiento como lo es el agua potable.

                            disfruta de realizar proyectos para ayudar a los grandes y pequeños negocios a digitalizarse, migrar de una manera sencilla. Me gusta los desafios, acostumbrada a ha realizar de manera organizada varias tareas si la situación lo requiere, la programación para mi es plasmar las ideas de los clientes en aplicativos faciles de usar y agradables a la vista para que sea una experiencia de usuario inolvidable.
                        </p>
                    </div> */}
                </div>

            </div>

        </div>


    );
};

export default Servicios;