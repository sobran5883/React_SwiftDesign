// import './Home.css';
import React from 'react';
import Navbar from '../../components/navbar/nav'
import HeroImg from '../../components/HeroImg/heroimg';
import Footer from '../../components/footer/footer';
import Construction from '../../components/construction/construction';
// import Whyswift from '../../components/whySwift/whySwift';
// import Service from '../../components/Service/service'
// import News from '../../components/news/news'
// import ContactUs from '../../components/contactUs/contact'
// import GooodCompany from '../../components/goodCompanies/goodCompany'
const CompanyPolices=()=>{
    return(
        <div>
            <Navbar/>
            <HeroImg/>
            <Construction/>
            {/* <Whyswift/> */}
            {/* <Service/> */}
            {/* <News/> */}
            {/* <ContactUs/> */}
            {/* <GooodCompany/> */}
            <Footer/>
        </div>
    )
}

export default CompanyPolices;