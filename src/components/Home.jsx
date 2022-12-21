import React from 'react';
import { Link } from 'react-router-dom';
// import moon from "../assets/img/moon.png"
import Articles from './Articles';
import foto1 from "../assets/img/foto1.png"
import react from "../assets/img/react.svg"

import NavBar from './NavBar';
import Rotate3D from './Rotate3D';

const Home = () => {

    return (
        <div>
            
            <div className=' bg  '>
                <Articles />

                <div className='buttons' >
                    <Link to={"/proyects"}>
                        <button className='button1 '><b> PROYECTOS </b></button>
                    </Link>
                    <Link to={"/about"}>
                        <button className='button2'><b> CONOCEME</b></button>
                    </Link>
                </div>

                <div className='text center'>
                    <div className='center'>
                        <h2 className='text-color'>Linda Perea <span className='typed'></span></h2>
                        <h1 className='text-front '>Developer . <span>&#160;</span></h1>
                        <div className='slide-text'>
                    <div className='country'>
                        <ul className='ul'>
                            <li className='li html'>HTML </li>
                            <li className='li js'>Js</li>
                            <li className='li react'>React</li>
                            {/* <li className='li react'>Css</li> */}
                        </ul>
                    </div>
                </div>

                    </div>
                    
                </div>
                

                
                <Rotate3D />

            </div>
        </div>
    );
};

export default Home;