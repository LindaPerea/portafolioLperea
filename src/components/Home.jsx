import React from 'react';
import { Link } from 'react-router-dom';
import moon from "../assets/img/moon.png"
import Articles from './Articles';
import foto1 from "../assets/img/foto1.png"
import react from "../assets/img/react.svg"

import NavBar from './NavBar';
import Rotate3D from './Rotate3D';

const Home = () => {

    return (
        <div>
            <NavBar />
            <div className=' bg  '>
                <Articles />
                <div>
                    <div className='buttons' >
                        <Link to={"/proyects"}>
                            <button className='button1 ' >Proyects</button>
                        </Link>
                        <Link to={"/about"}>
                            <button className='button2'>About Me</button>
                        </Link>
                    </div>
                </div>
                <div className='text'>
                    <div className=''>
                        <h2 className='text-color'>Linda Perea <span className='typed'></span></h2>
                        <h1 className='text-front '>Developer Front End<span>&#160;</span></h1>
                    </div>
                </div>

                <div className='slide-text'>
                    <h4>Habilidades en:</h4>
                    <div className='country'>
                        <ul className='ul'>
                            <li className='li html'><i class="fa-brands fa-html5"></i> </li>
                            <li className='li js'>Js</li>
                            <li className='li react'><i class="fa-brands fa-react react"></i></li>
                        </ul>
                    </div>
                    <div>
                        
                    </div>
                    <Rotate3D/>
                </div>
                



            </div>
        </div>
    );
};

export default Home;