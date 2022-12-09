import React from 'react';
import img1 from "../assets/img/img1.jpg"
import img2 from "../assets/img/img2.jpg"
import img3 from "../assets/img/img3.jpg"
import img4 from "../assets/img/img4.jpg"
import img5 from "../assets/img/img5.jpg"
import img6 from "../assets/img/img6.jpg"
import react from "../assets/img/react.svg"

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