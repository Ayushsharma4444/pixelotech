import React from 'react'
import image0 from '../images/shoesimage.png'
import image1 from '../images/image 1.png'
import image2 from '../images/image 2.png'
import image3 from '../images/image 3.png'

const Popularproduct = () => {
  return (
    <div className='popular_products'>
    <div><h1>POPULAR PRODUCTS</h1></div><br/>
    <div className='pp_container'>
        {/* <div><h1>POPULAR PRODUCTS</h1></div> */}
        <div className="pp_shoes_container">
            <div className='pp_shoes'>
                <div className='pp_shoe_img'>
                    <img src={image0} alt=''/>
                </div> 
                <div className='pp_shoe_text'>
                        <big>★<small> (11.6k Reviews)</small></big>
                        <span>Nike Running Shoe</span>
                        <div className='pp_shoe_text_info'>
                            <big>$100</big>
                            <small>500 Sold out</small>
                            <button>Buy Now</button>
                        </div>
                </div>
            </div>
        </div>

        <div className="pp_shoes_container">
            <div className='pp_shoes'>
                <div className='pp_shoe_img'>
                    <img src={image0} alt=''/>
                </div> 
                <div className='pp_shoe_text'>
                        <big>★<small> (11.6k Reviews)</small></big>
                        <span>Nike Running Shoe</span>
                        <div className='pp_shoe_text_info'>
                            <big>$100</big>
                            <small>500 Sold out</small>
                            <button>Buy Now</button>
                        </div>
                </div>
            </div>
        </div>

        <div className="pp_shoes_container">
            <div className='pp_shoes'>
                <div className='pp_shoe_img'>
                    <img src={image0} alt=''/>
                </div> 
                <div className='pp_shoe_text'>
                        <big>★<small> (11.6k Reviews)</small></big>
                        <span>Nike Running Shoe</span>
                        <div className='pp_shoe_text_info'>
                            <big>$100</big>
                            <small>500 Sold out</small>
                            <button>Buy Now</button>
                        </div>
                </div>
            </div>
        </div>

        <div className="pp_shoes_container">
            <div className='pp_shoes'>
                <div className='pp_shoe_img'>
                    <img src={image0} alt=''/>
                </div> 
                <div className='pp_shoe_text'>
                        <big>★<small> (11.6k Reviews)</small></big>
                        <span>Nike Running Shoe</span>
                        <div className='pp_shoe_text_info'>
                            <big>$100</big>
                            <small>500 Sold out</small>
                            <button>Buy Now</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Popularproduct