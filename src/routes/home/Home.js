import './Home.css';
import React from 'react';
import Navbar from '../../components/navbar/nav'
import HeroImg from '../../components/HeroImg/heroimg';
import Footer from '../../components/footer/footer';
// import Whyswift from '../../components/whySwift/whySwift';
import Service from '../../components/Service/service'
import ContactUs from '../../components/contactUs/contact'
const Home=()=>{
    return(
        <div>
            <Navbar/>
            <HeroImg/>
            {/* <Whyswift/> */}
            <Service/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default Home;