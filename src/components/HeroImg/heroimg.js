import './heroimg.css'
import React from 'react';
import IntroImg from '../../assets/nav-bg.jpg'
const HeroImg=()=>{
    return(
        <div className='hero'>
            <div className='mask'>
                <img className='into-img' src={IntroImg} alt='introImg'/>
            </div>
            <div className='content'>
                <p className='upper-text'>Cheaper delivery costs through innovative vehicle design</p>
                <p className='lower-text'>OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS CAN’T. YOU'LL BE PLEASANTLY SUPRISED</p>
            </div>
        </div>
    )
}

export default HeroImg;
