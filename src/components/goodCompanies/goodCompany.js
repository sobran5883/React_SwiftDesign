import './goodCompay.css'
import React from 'react';
import Truck from '../../assets/busImg.png'
import Bluescope from '../../assets/blueScopeImg.png'
import Onesteel from '../../assets/onesteelImg.png'
import Chep from '../../assets/chepImg.png'
import Coates from '../../assets/coateshireImg.png'
import Kennards from '../../assets/kennardsImg.png'
import Dhl from '../../assets/dhlImg.png'
import Abc from '../../assets/abcImg.png'
import Car from '../../assets/carImg.png'
const GoodCompany=()=>{
    return(
        <div className='goodCompany-container'>
            <div className='red-one'>
                <div className='truck'>
                    
                    <h2>You’ll be in good company</h2>
                    <img  src={Truck} alt='Img'/>
                </div>
                <div className='companies-container'>
                    <div className='left-row'>
                        <img className='company' src={Bluescope} alt='Img'/>
                        <img className='company' src={Onesteel} alt='Img'/>
                        <img className='company' src={Chep} alt='Img'/>
                        <img className='company' src={Coates} alt='Img'/>
                    </div>
                    <div className='right-row'>
                        <img className='company' src={Kennards} alt='Img'/>
                        <img className='company' src={Dhl} alt='Img'/>
                    </div>
                </div>
        </div>
            <div className='blue-one'>
                <div className='car'>
                    <img src={Car} alt='Img'/>
                </div>
                <div className='abc'>
                    <h5>We deliver, no matter how hard the challenge. </h5>
                    <img src={Abc} alt='Img' />
                    <h4>Kennards Hire Case Study</h4>
                </div>
            </div>
        </div>
    )
}

export default GoodCompany;