import React from 'react';
import wasi from "../assets/img/wasi.png"
// import linke from "../assets/img/linkedin.png"
import insta from "../assets/img/insta.png"
import email from "../assets/img/email.png"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (

        <nav className='container' >
            <div className='navbar'>
                <div className='home-navbar'>
                <Link to={"/"}>Home</Link></div>
                <ul className='ul-navbar'>
                    <li className='img-linke' >
                        <a href="www.linkedin.com/in/linda-perea"><i className="fa-brands fa-linkedin"></i></a>

                    </li>
                    <li className='img-email'>
                        <a href="mailto:linda.hp@hotmail.com"><i className="fa-solid fa-square-envelope"></i></a>
                    </li>
                    <li className='img-pdf'>
                        <a href="https://docs.google.com/document/d/1UUQmeXDkoR_CVwTq-dAid3Ghc0Tf28Pc7Hr0vjbqXlc/edit?usp=sharing"><i className="fa-solid fa-file-pdf"></i></a>
                    </li>
                    <li className='img-wasi'>
                        <a href="https://wa.me/message/74UFOE7GRBTPN1"><i className="fa-brands fa-square-whatsapp"></i></a>
                    </li>
                </ul>
                {/* <div className='moon' id="dark-mode" > */}
                    {/* <i className=" toggle fa-solid fa-moon"></i> */}
                {/* </div> */}

            </div>
        </nav>



    );
};

export default NavBar;