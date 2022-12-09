import React from 'react';
import wasi from "../assets/img/wasi.png"
// import linke from "../assets/img/linkedin.png"
import insta from "../assets/img/insta.png"
import email from "../assets/img/email.png"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className='container' >
                <div className='navbar'>
                    
                    <ul className='ul-navbar'>
                        <li className='img-linke' >
                            <i className="fa-brands fa-linkedin"><a href="www.linkedin.com/in/linda-perea"></a></i>

                        </li>
                        <li className='img-email'>
                            <i className="fa-solid fa-square-envelope"><a href="https://www.instagram.com/lindahellynperea/"></a></i>
                        </li>
                        <li className='img-pdf'>
                            <a href=""></a><i className="fa-solid fa-file-pdf"></i>
                        </li>
                        <li className='img-wasi'>
                            <i className="fa-brands fa-square-whatsapp"><a href="https://api.whatsapp.com/message/74UFOE7GRBTPN1?autoload=1&app_absent=0"></a></i>
                        </li>
                    </ul>
                    <div className='moon' id="dark-mode" >
                        <i className=" toggle fa-solid fa-moon"></i>
                    </div>

                </div>
            </nav>
            

        </div>
    );
};

export default NavBar;