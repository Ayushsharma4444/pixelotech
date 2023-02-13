import React ,{useRef} from 'react';
import {CiSearch} from 'react-icons/ci';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import profile from '../images/profile.png'
const Nav = () => {

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (
    <div className='nav_container'>
        <div className='logo'>
            <h1>BIZPUSH</h1> 
        </div>
        <div className='nav_link'>
        <header>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">Gallery</a>
          <Link to='/shop'>Shop</Link>
          <a href="/#">Contact</a>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
        </div>
        <div className='profile'>
                <div className="search"><CiSearch/></div>
                <div className="cart"><AiOutlineShoppingCart/></div>
                <img src={profile} alt=''/>
        </div>
    </div>
  )

}

export default Nav