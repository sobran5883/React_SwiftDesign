import './whySwift.css';
import React from 'react';
import Truck from '../../assets/truck.png'
const WhySwift=()=>{
    return(
        <div class='container'>
            <div class='upper-background'></div>
            <div class='text'>
              <h2>A fleet capable of much more than you’d think</h2>
              <p>With a diverse range of utes, trucks, and semi-trailers, Swift Transport is capable of much more than you'd think. Combine our versatile fleet with our industry-leading technology and 'can-do' attitude for a winning logistics partnership with your organization.</p>
            </div>
            <div class='truck-img'>
                <img src={Truck} alt='TruckImg' />
            </div>
      </div>
    )
}

export default WhySwift;
