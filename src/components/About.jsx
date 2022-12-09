import React from 'react';
import foto1 from "../assets/img/foto1.png"
import wasi from "../assets/img/wasi.png"

const About = () => {

    return (
        <div>

            <div className=''>
                <div className=' '>
                    <img className='' src={foto1} alt="" />
                </div>
                <div >

                    <img src={foto1} alt="" />

                </div>


                <div className='' >
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
                            Soy como un lienzo en blanco, adaptable y moldeable de acuerdo a su requerimiento, aplico las tecnologías aprendidas con el objetivo plasmar tu idea y necesidades al alcance de tus manos.
                        </p>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default About;