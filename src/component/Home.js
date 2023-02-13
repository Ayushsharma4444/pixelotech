import React from 'react'
import ResponsiveAppBar from './Navbar';
import shoesimage from '../images/shoesimage.png'
import Popularproduct from './Popularproduct';
import Nav from '../component/Nav'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
        {/* <ResponsiveAppBar/> */}
        <Nav/>
    <div className='home_container'>
            <div className='home_right'>
                <h1>PURCHASE YOUR <br/>SHOES NOW.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
                 Architecto autem nisi unde iste. Animi nam natus dolore expeditae.</p>
                <div className='shopnow'><Link to='/shop'>Shop Now</Link></div>
                {/* <Link to='/shop'>Shop Now</Link> */}
                <div className='home_rating'>
                    <span>4.3 <big>★★★★★</big></span><br/>
                    <small>(11.6k Total Review)</small>
                </div>
                
            </div>
            <div className='home-image'>
                <div className='vertical'></div>
                <div className='horizontal'></div>
                <img src={shoesimage} alt='image'/>
            </div>
    </div>
    <Popularproduct/>

    {/* <div className='load_more'><li><Link to='/shop'>Load More</Link></li></div> */}
    </>
  )
}

export default Home