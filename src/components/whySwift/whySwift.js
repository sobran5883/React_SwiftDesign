import './whySwift.css';
import React from 'react';
import Truck from '../../assets/truck.png'
const WhySwift=()=>{
    return(
        <div class='whySwift-container'>
            <div class='text'>
              <h1>A fleet capable of much more than you’d think</h1>
              <p>With a diverse range of utes, trucks, and semi-trailers, Swift Transport is capable of much more than you'd think. Combine our versatile fleet with our industry-leading technology and 'can-do' attitude for a winning logistics partnership with your organization.</p>
              <a href="https://google.com">WHY SWIFT</a>
            </div>
            <div class='truck-img'>
                <img src={Truck} alt='TruckImg' />
            </div>
            <div className='bg-color'></div>

      </div>
    )
}

export default WhySwift;
