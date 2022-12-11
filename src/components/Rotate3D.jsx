import React from 'react';
import img1 from "../assets/img/html1Gif.gif"
import img2 from "../assets/img/jsGif.gif"
import img3 from "../assets/img/cssGif.gif"
import img4 from "../assets/img/reactGif.gif"
import img5 from "../assets/img/reactGif.gif"
import img6 from "../assets/img/jsGif.gif"


const Rotate3D = () => {
    return (
        <div className='contenedor'>

            <div className='caja'>
                <div className='cara cara1'>
                    <img src={img1} alt="" />
                </div>
                <div className='cara cara2'>
                    <img src={img2} alt="" />    
                </div>
                <div className='cara cara3'>
                    <img src={img3} alt="" />
                </div>
                <div className='cara cara4'>
                    <img src={img4} alt="" />
                </div>
                <div className='cara cara5'>
                    <img src={img5} alt="" />
                </div>
                <div className='cara cara6'>
                    <img src={img6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Rotate3D;