import './contact.css';
import React from 'react';
import BgImg from '../../assets/contact-bg.png'
import arrow from '../../assets/whiteArrow.png'
import { Link } from 'react-router-dom';
const ContactUs=()=>{
    return(
        <div className='container'>
            <div className='bgImg'> 
                <img className='contact-bg' src={BgImg} alt='bgImg'/>
            </div>
            <div className='contact'>
                <h3>Have a question regarding Swift services?</h3>
                <div className='tags'>
                <li><Link to='/contact' alt='contact'>Contact Us</Link></li> 
                <img src={arrow} alt='arrow'/>
                </div>
            </div>
            
        </div>
    )
}

export default ContactUs;

