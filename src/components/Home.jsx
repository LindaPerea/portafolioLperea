import React from 'react';
import { Link } from 'react-router-dom';
import Articles from './Articles';



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
                    <Link to={"/servicios"}>
                        <button className='button2'><b> SERVICIOS</b></button>
                    </Link>
                </div>

                <div className="grid-img-center width">
                    <div className="wrapper">
                        <div className="static-txt">Linda Perea</div>
                        <ul className="dynamic-txts">
                            <li><span>Developer</span></li>
                            <li><span>Front end</span></li>
                            <li><span>Back end</span></li>
                            <li><span>Diseño Web</span></li>
                        </ul>
                    </div>
                </div>
                <Rotate3D />

                <div className='text center'>
                    <div className='center'>
                        <h2 className='text-color'><span className='typed'></span></h2>
                        <h1 className='text-front '><span>&#160;</span></h1>
                        <div className='slide-text'>
                            <div className='country'>
                                <ul className='ul'>
                                    <li className='li html'>HTML-CSS </li>
                                    <li className='li js'>Js-React</li>
                                    <li className='li react'>NodeJs</li>
                                    {/* <li className='li react'>Css</li> */}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                

            </div>
        </div>
    );
};

export default Home;