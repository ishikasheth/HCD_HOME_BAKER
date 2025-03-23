import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu,setMenu] = useState("menu");


    return (
    <div className='navbar'>
        <img src ={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className = {menu==="home"?"active":""}> home</li>
            <li onClick={()=>setMenu("menu")} className = {menu==="menu"?"active":""}>menu</li>
            <li onClick={()=>setMenu("mobile-app")} className = {menu==="mobile-app"?"active":""}>mobile-app</li>
            <li onClick={()=>setMenu("about-us")} className = {menu==="about-us"?"active":""}>About Us</li>
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
