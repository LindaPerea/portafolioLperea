import React from 'react';
import { Link } from 'react-router-dom';
// import img1 from "../assets/img/img1.jpg"
// import img2 from "../assets/img/img2.jpg"
// import img3 from "../assets/img/img3.jpg"
// import img4 from "../assets/img/img4.jpg"
// import img5 from "../assets/img/img5.jpg"
// import img6 from "../assets/img/img6.jpg"
import Articles from './Articles';
import NavBar from './NavBar';

const Proyects = () => {
    return (
        <div className='background-button'>
            <NavBar />
            {/* <div className='button-en-proyects'>
                <Link to={"/"}>
                    <button className='button2'>Home</button>
                </Link>
            </div> */}
            <div className='body-proyects'  >
                <div className='card'>
                    <div className='face front'>
                        <img src={img1} alt="" />
                        <h3>Frases</h3>
                    </div>
                    <div className='face back'>
                        <h3></h3>
                        <p>Frases aleatorias en Ingles, que sincronizadamente cambian de color el fondo, el texto y el mismo bóton</p>
                        <div className='link'>
                            <p>Ir al Proyecto</p>
                            <a href="https://app.netlify.com/sites/englishphrases/overview"></a>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='face front'>
                        <img src={img2} alt="" />
                        <h3>Api del Clima</h3>
                    </div>
                    <div className='face back'>
                        <h3></h3>
                        <p>Api del clima que te devuelve la temperatura según tu ubicación. Desarrollado en React, HTMl y Css</p>
                        <div className='link'>
                            <p>Ir al Proyecto</p>
                            <a href="https://app.netlify.com/sites/weatherlinda/overview"></a>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='face front'>
                        <img className='img-cover' src={img3} alt="" />
                        <h3>Api de Pokemones</h3>
                    </div>
                    <div className='face back'>
                        <h3>React</h3>
                        <p>Divertida api para que conozcas a todos los Pokemons según sus características</p>
                        <div className='link'>
                            <p>Ir al Proyecto</p>
                            <a href="https://app.netlify.com/sites/ecommercewhithreact/overview"></a>
                        </div>
                    </div>
                </div>

                {/* <div className='card'>
                <div className='face front'>
                    <img src={img4} alt="" />
                    <h3>Ecommerce</h3>
                </div>
                <div className='face back'>
                    <Articles/>
                    <h3></h3>
                    <p>Aplicación de usuarios que actualiza los datos, los elimina y limpia los campos</p>
                    <div className='link'>
                    <p>Ir al Proyecto</p>
                        <a href="#Details"></a>
                    </div>
                </div>
            </div> */}

                <div className='card'>
                    <div className='face front'>
                        <a href="https://app.netlify.com/sites/ecommercewhithreact/overview"><img src={img5} alt="" /></a>
                        <h3>Ecommerce</h3>
                    </div>
                    <div className='face back'>
                        <h3></h3>
                        <p>Ecommerce-Tienda virtual realizado en React y Bootstrap utilizando React-Router, Redux, Hooks</p>
                        <div className='link'>
                            <p>Ir al Proyecto</p>
                            <a href="https://app.netlify.com/sites/ecommercewhithreact/overview"></a>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='face front'>
                        <img className='img-cover' src={img6} alt="" />
                        <h3>Api de Rick and Morty</h3>
                    </div>
                    <div className='face back'>
                        <h3>React</h3>
                        <p>Conoce el mundo de Rick and Morty con esta api desarrollada en React, usando hooks y consumiendo la api.</p>
                        <div className='link'>
                            <p>Ir al Proyecto</p>
                            <a href="https://app.netlify.com/sites/rickandmortylp/overview"></a>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    );
};

export default Proyects;