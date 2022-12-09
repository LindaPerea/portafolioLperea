
import React from 'react';
import ecomerce from "../assets/img/ecomerce.jpg"
import Articles from './Articles';

const Proyects = () => {
    return (
        <div className='body'  >
            <div className='card'>
                <div className='face front'>
                    <img src={ecomerce} alt="" />
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
                    <img src={ecomerce} alt="" />
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
                    <img className='img-cover' src={ecomerce} alt="" />
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

            <div className='card'>
                <div className='face front'>
                    <img src={ecomerce} alt="" />
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
                    <img src={ecomerce} alt="" />
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
                    <img className='img-cover' src={ecomerce} alt="" />
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


    );
};

export default Proyects;