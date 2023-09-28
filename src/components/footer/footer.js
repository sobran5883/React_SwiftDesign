import './footer.css'
import React from 'react';
import support from '../../assets/support.png'
import email from '../../assets/email.png'
import rate from '../../assets/rate.png'
import redrate from '../../assets/rate-red.png'
import warehouse1 from '../../assets/warehouse1.png'
import email1 from '../../assets/email 1.png'
import bg from '../../assets/footer_bg.png'
import { FaAngleDown, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
const Footer=()=>{
    return(
        <div className='footer-container'>
            <div className='support'>
                <div className='support-type' id='support-img'>
                    <img src={support} alt='support'/>
                    <p>Call us at anytime on 1210 779 434</p>
                </div>
                <div className='support-type'>
                    <img src={email} alt='support'/>
                    <p>See why more companies prefer Swift</p>
                </div>
                <div className='support-type' id='red-rate'>
                    <img className='white-rate' src={rate} alt='support'/>
                    <img  className='red-rate' src={redrate} alt='support'/>
                    <p>Email the Team at Swift Transport Courier Division</p>
                </div>
                <div className='support-type'>
                    <img src={warehouse1} alt='support'/>
                    <p>Email the Team at Swift Transport Courier Division</p>
                </div>
                <div className='support-type' id='email-img'>
                    <img src={email1} alt='support'/>
                    <p>Visit our warehousing and distribution center</p>
                </div>
            </div>
            <div className='bg-img'><img src={bg} alt='bg_img'/></div>
            <div className='information'>
                <div className='info'>
                    <h3>INFORMATION</h3>
                    <a className='info-link' claee href='google.com'><FaAngleDown size={30} style={{color:'White',marginRight:"4rem"}}/></a>
                    {/* <a href='google.com'><FaAngleUp size={30} style={{color:'White',marginRight:"4rem"}}/></a> */}
                    <p>About us Careers Driver safety Contact us Terms of use Privacy Policy</p>
                </div>
                <div className='info' id='taxi'>
                    <h3>TAXI & COURIER TRUCKS</h3>
                    <a href='google.com'><FaAngleDown size={30} style={{color:'White',marginRight:"4rem"}}/></a>
                    {/* <a href='google.com'><FaAngleUp size={30} style={{color:'White',marginRight:"4rem"}}/></a> */}
                    <p> Convenience Location Live Unloads Side Loader Drops Imports and Exports 50T Onsite Forklift Oversize, Overweight Dangerous Goods 24/7 Operations Company Owned Fleet</p>
                </div>
                <div className='info'>
                    <h3>CONTAINER TRANSPORT</h3>
                    <a href='google.com'><FaAngleDown size={30} style={{color:'White',marginRight:"4rem"}}/></a>
                    {/* <a href='google.com'><FaAngleUp size={30} style={{color:'White',marginRight:"4rem"}}/></a> */}
                    <p> Convenience Location Live Unloads Side Loader Drops Imports and Exports 50T Onsite Forklift Oversize, Overweight Dangerous Goods 24/7 Operations Company Owned Fleet</p>
                </div>
                <div className='info' id='warehousing'>
                    <h3>COMPLETE WAREHOUSING SOLUTION</h3>
                    <p>Short & Long Term Indoor & Outdoor Storage Racked, Dry & Floor Stacked Distribution Import, Unpack, Pack, Ship Sub-Leasing Secure Facilities Barcode Scanning</p>
                </div>
                <div className='media-block'>
                    <div className='media-heading'>
                        <h3>SOCIAL MEDIA</h3>
                    </div>
                    <div className='media-icons'>
                        <a href='google.com'><FaFacebook size={40} style={{color:'White',marginRight:"4rem"}}/></a>
                        <a href='google.com'><FaTwitter size={40} style={{color:'White',marginRight:"4rem"}}/></a>
                        <a href='google.com'><FaInstagram size={40} style={{color:'White',marginRight:"4rem"}}/></a>
                        <a href='google.com'><FaLinkedin size={40} style={{color:'White',marginRight:"4rem"}}/></a>
                    </div>
                </div>
                <div className='copyright'>
                        <text>© 2014 Swift Transport. All rights reserved.</text>
                </div>

            </div>
        </div>
    )
}

export default Footer;