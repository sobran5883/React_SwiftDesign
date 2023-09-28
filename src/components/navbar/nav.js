import './nav.css'
import React from 'react';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import Telephone from '../../assets/landline.png'
import {FaBars,FaPhone,FaTimes} from 'react-icons/fa'

const Navbar = ()=>{
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY >= 30){
            setColor(true);
        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll",changeColor);
    return(
        // <div className={color ? "header header-bg":"header"}>
        <div className='header'>
            <div className='nav-upper'>
                <div className='telephone'>
                    <img src={Telephone} alt='teleIcon'/>
                </div>
                <div className='call'>
                    <li>Call Us</li>
                    <li>1300 779 438</li>
                </div>
            </div>
            <div className={click ? "nav-content.active":"nav-content"}>
                <div className='nav-middle'>
                    <li><Link to='/'>WHY SWIFT TRANSPORT</Link></li>
                    <li><Link to='/fleet'>FLEET</Link></li>
                    <li><Link to='/company_policy'>COMPANY POLICIES</Link></li>
                    <li><Link to='/about_us'>ABOUT US</Link></li>
                    <li><Link to='/contactUs'>CONTACT US</Link></li>
                </div>
                <div className='nav-bottom'>
                    <li><Link to='/'>Swift Intermodal</Link></li>
                    <li><Link to='/'>Container Transport Solution</Link></li>
                    <li><Link to='/'>Complete Warehousing Solutions</Link></li>
                </div>
            </div>
            <div className='humburger' onClick={handleClick}>
                {click ?(<FaTimes size={30} style={{color:"black"}}/>):(<FaBars size={30} style={{color:"white"}}/>)}
            </div>
            <div className='phone'>
            <a href='google.com'><FaPhone size={30} style={{color:'White',marginRight:"4rem"}}/></a>
            </div>
            <div className='strip'>
            </div>
        </div>
        
    )
}

export default Navbar;