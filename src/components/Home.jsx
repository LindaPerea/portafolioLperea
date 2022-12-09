import React from 'react';
import { Link } from 'react-router-dom';
import moon from "../assets/img/moon.png"
import Articles from './Articles';
import foto1 from "../assets/img/foto1.png"
import react from "../assets/img/react.svg"

import NavBar from './NavBar';
import Rotate3D from './Rotate3D';

const Home = () => {

    // const typed = new Typed (".typed", {
    //     strings: [
    //         "<i classname="mascota"> React </>",
    //         "<i classname="mascota"> html </>", 
    //         "<i classname="mascota"> Css </>", 
    //         "<i classname="mascota"> Bootstrap </>",
    //         "<i classname="mascota"> NodeJs </>" ]
    //   });

    return (
        <div>
            <NavBar />
            <div className=' bg  '>
                <Articles />
                <div className='text'>
                    <div className=''>
                        <h2 className='text-color'>Linda Perea <br />con: <span className='typed'></span></h2>
                        <h1 className='text-front '>Developer Front End.<span>&#160;</span></h1>
                    </div>                                     
                </div>
                <Rotate3D/>
                <div className='slide-text'>
                        <h4>Trabajemos juntos con:</h4>
                        <div className='country'>
                            <ul className='ul'>
                                <li className='li'><i class="fa-brands fa-html5"></i> </li>
                                <li className='li'>Js</li>
                                <li className='li'><i class="fa-brands fa-react react"></i></li>
                            </ul>
                        </div>
                    </div>
                <div>
                        <div className='' >
                            <Link to={"/proyects"}>
                                <button className='button1 ' >Proyects</button>
                            </Link>
                            <Link to={"/about"}>
                                <button className='button2'>About Me</button>
                            </Link>
                        </div>
                    </div>



            </div>
        </div>
    );
};

export default Home;