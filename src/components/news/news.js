import './news.css'
import React from 'react';
import NewsBg from '../../assets/news-bg.png'
import news1 from '../../assets/news1.png'
import news2 from '../../assets/new2.png'
import news3 from '../../assets/news3.png'
const News=()=>{
    return(
        <div className='container'>
            <div className='new-bg'>
                <img src={NewsBg} alt='img'/>
                <h3>News</h3>
            </div>
            <div new-cards>
                <div className='newImg'>
                    <img src={news1} alt='img'/>
                </div>
                <div className='newImg'>
                    <img src={news2} alt='img'/>
                </div>
                <div className='newImg'>
                    <img src={news3} alt='img'/>
                </div>
                <div className='newImg'>
                    <img src={news3} alt='img'/>
                </div>
            </div>
        </div>
    )
}

export default News;