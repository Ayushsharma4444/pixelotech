import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {MdModeEditOutline} from 'react-icons/md'
import {BiSearchAlt2} from 'react-icons/bi'
import {BiFilter} from 'react-icons/bi'
import {MdOutlineSubject} from 'react-icons/md'
import {FaDropbox} from 'react-icons/fa'

import image1 from '../images/products/image1.png'
import image2 from '../images/products/image2.png'
import image3 from '../images/products/image3.png'
import image4 from '../images/products/image4.png'
import image5 from '../images/products/image5.png'
import image6 from '../images/products/image6.png'
import image7 from '../images/products/image7.png'
import image8 from '../images/products/image8.png'
import image9 from '../images/products/image9.png'
import image10 from '../images/products/image10.png'
import image11 from '../images/products/image11.png'
import image12 from '../images/products/image12.png'

const Shop = () => {
  return (
    <div className='shop_page'>
        <div className='shoppage_navbar'>
            <div className=''><h1>Constructor</h1></div>
            <div className='shoppage_navbar_navlinks'>
                <li>Dashboard</li>
                <li>About us</li>
                <li>News</li>
                <li>User Policy</li>
                <li>Contact</li>
            </div>
        </div>
    <div className='shop_container'>
        <div className="product_nav">
            <div className='product_nav_logo'>
                <h3 style={{color:'#6B7A99'}}>Products</h3>
            </div>
            <div className='productive_nav_middle'>
                <span>Active</span>
                <span>Draft</span>
                <span>Assembly</span>
            </div>
            <div className='product_nav_button'>
                <button>Add Product</button>
            </div>
        </div>
        <div className="feature_nav">
            <div className='selectall'>
                 <small>Select All</small>
            </div>
            <div className='features'>
                    <div className='filters'><span><BiFilter color='#6B7A99'/>Filters</span></div>
                    <div className='filters'><span><BiSearchAlt2 color='#6B7A99'/> Search</span></div>
                    <div className='filters'><span><MdModeEditOutline color='#6B7A99'/> Edit</span></div>
                    <div className='filters'><span><AiFillDelete color='#6B7A99'/> Filters</span></div>
            </div>
            <div className='feature_nav_right'>
                <MdOutlineSubject color='#6B7A99'/>
                <FaDropbox color='#6B7A99'/>
            </div>
        </div>
        <div className="products_container">
                <div className='product_box'>
                        <div className='product_box_img'><img src={image1} alt=''/>
                        </div>
                        <div className='product_box_text'>
                            <span>Apple Air Pods 2</span>
                            <button>$600</button>
                        </div>
                </div>

                <div className='product_box'>
                        <div className='product_box_img'><img src={image2} alt=''/>
                        </div>
                        <div className='product_box_text'>
                            <span>Apple Air Pods 2</span>
                            <button>$600</button>
                        </div>
                </div>

                <div className='product_box'>
                        <div className='product_box_img'><img src={image3} alt=''/>
                        </div>
                        <div className='product_box_text'>
                            <span>Apple Air Pods 2</span>
                            <button>$600</button>
                        </div>
                </div>

                <div className='product_box'>
                        <div className='product_box_img'><img src={image4} alt=''/>
                        </div>
                        <div className='product_box_text'>
                            <span>Apple Air Pods 2</span>
                            <button>$600</button>
                        </div>
                </div>

                <div className='product_box'>
                        <div className='product_box_img'><img src={image5} alt=''/>
                        </div>
                        <div className='product_box_text'>
                            <span>Apple Air Pods 2</span>
                            <button>$600</button>
                        </div>
                </div>

                <div className='product_box'>
                        <div className='product_box_img'><img src={image6} alt=''/>
                        </div>
                        <div className='product_box_text'>
                            <span>Apple Air Pods 2</span>
                            <button>$600</button>
                        </div>
                </div>

                
                <div className='product_box'>
                        <div className='product_box_img'><img src={image7} alt=''/>
                        </div>
                        <div className='product_box_text'>
                            <span>Apple Air Pods 2</span>
                            <button>$600</button>
                        </div>
                </div>

                <div className='product_box'>
                        <div className='product_box_img'><img src={image8} alt=''/>
                        </div>
                        <div className='product_box_text'>
                            <span>Apple Air Pods 2</span>
                            <button>$600</button>
                        </div>
                </div>

                <div className='product_box'>
                        <div className='product_box_img'><img src={image9} alt=''/>
                        </div>
                        <div className='product_box_text'>
                            <span>Apple Air Pods 2</span>
                            <button>$600</button>
                        </div>
                </div>

                <div className='product_box'>
                        <div className='product_box_img'><img src={image10} alt=''/>
                        </div>
                        <div className='product_box_text'>
                            <span>Apple Air Pods 2</span>
                            <button>$600</button>
                        </div>
                </div>

                <div className='product_box'>
                        <div className='product_box_img'><img src={image11} alt=''/>
                        </div>
                        <div className='product_box_text'>
                            <span>Apple Air Pods 2</span>
                            <button>$600</button>
                        </div>
                </div>

                <div className='product_box'>
                        <div className='product_box_img'><img src={image12} alt=''/>
                        </div>
                        <div className='product_box_text'>
                            <span>Apple Air Pods 2</span>
                            <button>$600</button>
                        </div>
                </div>

        </div>
    </div>

    </div>
  )
}

export default Shop;