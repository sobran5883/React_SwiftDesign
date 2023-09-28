import './news.css'
import React from 'react';
import NewsBg from '../../assets/news-bg.png'
import news1 from '../../assets/news1.png'
import news2 from '../../assets/new2.png'
import news3 from '../../assets/news3.png'
const News=()=>{
    return(
        <div className='news-container'>
            <div className='news-bg'>
                <img src={NewsBg} alt='img'/>
                <h1>News</h1>
            </div>
            <div className='news-cards'>
                <div className='newsImg'>
                    <img src={news1} alt='img'/>
                    <h3>Asia-US container rates tick lower; Canada port strike enters 7th day</h3>
                    <p>Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) </p>
                    <a href='www.google.com'>Read More</a>
                </div>
                <div className='newsImg'>
                    <img src={news2} alt='img'/>
                    <h3>World Shipping Council Releases Containers Lost At Sea Report</h3>
                    <p>Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) </p>
                    <a href='www.google.com'>Read More</a>
                </div>
                <div className='newsImg'>
                    <img src={news3} alt='img'/>
                    <h3>Top Shipping Stocks for Q2 2023</h3>
                    <p>ZIM Integrated Shipping Services, Kirby Corp., and Ardmore Shipping are the top performers for value, growth, and momentum, respectively.</p>
                    <a href='www.google.com'>Read More</a>
                </div>
                <div className='newsImg'>
                    <img src={news3} alt='img'/>
                    <h3>Aurizon wins rail freight contract from TGE in Australia</h3>
                    <p>The company will offer rail linehaul services that will link Perth, Adelaide, Melbourne, Sydney and Brisbane.</p>
                    <a href='www.google.com'>Read More</a>
                </div>
            </div>
        </div>
    )
}
export default News;

