import './service.css';
import React from 'react';
import img1 from '../../assets/container.png'
import img2 from '../../assets/train-cargo.png'
import img3 from '../../assets/petrol.png'
import img4 from '../../assets/truck1.png'
import img5 from '../../assets/warehouse.png'
import arrow1 from '../../assets/redArrow.png'
import arrow2 from '../../assets/whiteArrow.png'
const Service=()=>{
    return(
        <div className='container'>
            <div className='headings'>
                <h3>Service</h3>
                <h2>A <span> smarter </span> container transport business</h2>
                <h5>AN ON-DEMAND CONTAINER TRANSPORT SOLUTION THAT WORKS, UTILISING THE LATEST IN GPS, GEO-MAPPING SOFTWARE AND TECHNOLOGY.</h5>
            </div>
            <div className='blocks'>
                <div className='block'>
                    <h3>Transport - Container, Tautliner,  Bulk</h3>
                    <img src={img4} alt='img'/>
                    <p>Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…</p>
                    <img className='arrow' src={arrow1} alt='arrow'/>
                </div>
                <div className='block'>
                    <h3>Transport - Container, Tautliner,  Bulk</h3>
                    <img src={img2} alt='img'/>
                    <p>Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…</p>
                    <img className='arrow' src={arrow1} alt='arrow'/>
                </div>
                <div className='block'>
                    <h3>Transport - Container, Tautliner,  Bulk</h3>
                    <img src={img1} alt='img'/>
                    <p>Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…</p>
                    <img className='arrow' src={arrow1} alt='arrow'/>
                </div>
                <div className='block'>
                    <h3>Transport - Container, Tautliner,  Bulk</h3>
                    <img src={img5} alt='img'/>
                    <p>Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…</p>
                    <img className='arrow' src={arrow1} alt='arrow'/>
                </div>
                <div className='block' id='red-block'>
                    <h3>Transport - Container, Tautliner,  Bulk</h3>
                    <img src={img3} alt='img'/>
                    <p>Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…</p>
                    <img className='arrow' src={arrow2} alt='arrow'/>
                </div>
            </div>
        </div>
    )
}

export default Service;