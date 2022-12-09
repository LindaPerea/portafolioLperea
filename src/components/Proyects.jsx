
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../assets/img/img1.jpg"
import img2 from "../assets/img/img2.jpg"
import img3 from "../assets/img/img3.jpg"
import img4 from "../assets/img/img4.jpg"
import img5 from "../assets/img/img5.jpg"
import img6 from "../assets/img/img6.jpg"
import Articles from './Articles';

const Proyects = () => {
    return (
        <div className='background-button'>
         <div className='button-en-proyects'>
            <Link to={"/"}>
                <button className='button2'>Home</button>
            </Link>
            </div>
        <div className='body-proyects'  >
           
            
            <div className='card'>
                <div className='face front'>
                    <img src={img1} alt="" />
                    <h3>Ecommerce</h3>
                </div>
                <div className='face back'>                    
                    <h3></h3>
                    <p>Ecommerce realizado en React y Bootstrap utilizando React-Router, Redux, Hooks</p>
                    <div className='link'>
                        <a href="#Details"></a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='face front'>
                    <img src={img2} alt="" />
                    <h3>Api de Pokemones</h3>
                </div>
                <div className='face back'>
                    <h3></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem molestias odit ratione officiis architecto ipsam, maiores, dolores libero eos eum saepe illum amet. Odit harum illo dicta sunt quisquam.</p>
                    <div className='link'>
                        <a href="#Details"></a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='face front'>
                    <img className='img-cover' src={img3} alt="" />
                    <h3>Api de Rick and Morty</h3>
                </div>
                <div className='face back'>
                    <h3>React</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem molestias odit ratione officiis architecto ipsam, maiores, dolores libero eos eum saepe illum amet. Odit harum illo dicta sunt quisquam.</p>
                    <div className='link'>
                        <a href="https://app.netlify.com/sites/ecommercewhithreact/overview"></a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='face front'>
                    <img src={img4} alt="" />
                    <h3>Ecommerce</h3>
                </div>
                <div className='face back'>
                    <Articles/>
                    <h3></h3>
                    <p>Ecommerce realizado en React y Bootstrap utilizando React-Router, Redux, Hooks</p>
                    <div className='link'>
                        <a href="#Details"></a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='face front'>
                    <img src={img5} alt="" />
                    <h3>Api de Pokemones</h3>
                </div>
                <div className='face back'>
                    <h3></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem molestias odit ratione officiis architecto ipsam, maiores, dolores libero eos eum saepe illum amet. Odit harum illo dicta sunt quisquam.</p>
                    <div className='link'>
                        <a href="#Details"></a>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem molestias odit ratione officiis architecto ipsam, maiores, dolores libero eos eum saepe illum amet. Odit harum illo dicta sunt quisquam.</p>
                    <div className='link'>
                        <a href="#Details"></a>
                    </div>
                </div>
            </div>

           
        </div>
        </div>


    );
};

export default Proyects;