import React from 'react';
import "../assets/css/proyectsLinda.css"
import img1 from "../assets/img/poke1.jpg"
import img4 from "../assets/img/u1.jpg"
import img3 from "../assets/img/phrases1.jpg"
import img5 from "../assets/img/calc1.jpg"
import img2 from "../assets/img/rick1.jpg"
import img6 from "../assets/img/ecomm1.jpg"
import img7 from "../assets/img/weather1.jpg"


const ProyectsLinda = () => {
    return (
        <div className='hexagono-background'>
            
            <h1 className='title-galery'>PROYECTOS</h1>
            <main className='gallery'>
                <div className='gallery-item'>
                    <a href="https://pokemonslh.netlify.app/"><img src={img1} alt="" /></a>
                </div>
                <div className='gallery-item'>
                    <a href="https://datauser.netlify.app"><img src={img4} alt="" /></a>
                </div>
                <div className='gallery-item'>
                    <a href="https://englishphrases.netlify.app"><img src={img3} alt="" /></a>
                </div>
                {/* <div className='gallery-item'>
                    <img src={img5} alt="" />
                </div> */}
                <div className='gallery-item'>
                    <a href="https://rickandmortylp.netlify.app"><img src={img2} alt="" /></a>
                </div>
                <div className='gallery-item'>
                    <a href="https://ecommercewhithreact.netlify.app/"><img src={img6} alt="" /></a>
                </div>
                <div className='gallery-item'>
                    <a href="https://weatherlinda.netlify.app"><img src={img7} alt="" /></a>
                </div>             

            </main>

            
            
        </div>
    );
};

export default ProyectsLinda;