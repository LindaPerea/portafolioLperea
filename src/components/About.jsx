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
                            xx
                        </p>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default About;