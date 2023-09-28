import './Home.css';
import React from 'react';
import Navbar from '../../components/navbar/nav'
import HeroImg from '../../components/HeroImg/heroimg';
import Footer from '../../components/footer/footer';
import Whyswift from '../../components/whySwift/whySwift';
import Service from '../../components/Service/service'
import News from '../../components/news/news'
import ContactUs from '../../components/contactUs/contact'
import GooodCompany from '../../components/goodCompanies/goodCompany'
const Home=()=>{
    return(
        <div>
            <Navbar/>
            <HeroImg/>
            <Whyswift/>
            <Service/>
            <News/>
            <ContactUs/>
            <GooodCompany/>
            <Footer/>
        </div>
    )
}

export default Home;
