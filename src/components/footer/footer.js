import './footer.css'
import React from 'react';
import support from '../../assets/support.png'
import email from '../../assets/email.png'
import rate from '../../assets/rate.png'
import warehouse1 from '../../assets/warehouse1.png'
import email1 from '../../assets/email 1.png'
import bg from '../../assets/footer_bg.png'
const Footer=()=>{
    return(
        <div className='container'>
            <div className='support'>
                <div className='support-type'>
                    <img src={support} alt='support'/>
                    <p>Call us at anytime on 1210 779 434</p>
                </div>
                <div className='support-type'>
                    <img src={email} alt='support'/>
                    <p>See why more
 companies prefer
 Swift</p>
                </div>
                <div className='support-type'>
                    <img src={rate} alt='support'/>
                    <p>Email the Team at
 Swift Transport
 Courier Division</p>
                </div>
                <div className='support-type'>
                    <img src={warehouse1} alt='support'/>
                    <p>Email the Team at
 Swift Transport
 Courier Division</p>
                </div>
                <div className='support-type'>
                    <img src={email1} alt='support'/>
                    <p>Visit our 
warehousing and 
distribution center</p>
                </div>
            </div>
            <div className='bg-img'><img src={bg} alt='bg_img'/></div>
            <div className='information'>
                <div className='info'>
                    <h3>INFORMATION</h3>
                    <p>About us Careers Driver safety Contact us Terms of use Privacy Policy</p>
                </div>
                <div className='info'>
                    <h3>CONTAINER TRANSPORT</h3>
                    <p> Convenience Location Live Unloads Side Loader Drops Imports and Exports 50T Onsite Forklift Oversize, Overweight Dangerous Goods 24/7 Operations Company Owned Fleet</p>
                </div>
                <div className='info'>
                    <h3>COMPLETE WAREHOUSING SOLUTION</h3>
                    <p>Short & Long Term Indoor & Outdoor Storage Racked, Dry & Floor Stacked Distribution Import, Unpack, Pack, Ship Sub-Leasing Secure Facilities Barcode Scanning</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;