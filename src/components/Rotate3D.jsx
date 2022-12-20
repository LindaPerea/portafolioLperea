import React from 'react';
import img1 from "../assets/img/html_S.png"
import img2 from "../assets/img/javascript_S.png"
import img3 from "../assets/img/css_S.png"
import img4 from "../assets/img/react_S.png"
import img5 from "../assets/img/redux_S.png"
import img6 from "../assets/img/router_S.png"


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