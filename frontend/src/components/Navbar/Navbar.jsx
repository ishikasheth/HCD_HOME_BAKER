import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu,setMenu] = useState("menu");


    return (
    <div className='navbar'>
        <img src ={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu("home")} className = {menu==="home"?"active":""}> home</Link>
            <a href="#explore-menu" onClick={()=>setMenu("menu")} className = {menu==="menu"?"active":""}>menu</a>
            <a href="#footer" onClick={()=>setMenu("about-us")} className = {menu==="about-us"?"active":""}>About Us</a>
        </ul>
      <div className="navbar-right"></div>
      <img src={assets.search_icon} alt="" />
      <div className="navbar-search-icon">
        <img src={assets.basket_icon} alt="" />
        <div className="dot"></div>
      </div>
      <button>sign in</button>

    </div>
  )
}

export default Navbar
