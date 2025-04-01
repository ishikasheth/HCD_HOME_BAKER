import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext);


    return (
    <div className='navbar'>
        <Link to='/'><img src ={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu("home")} className = {menu==="home"?"active":""}>🎂The Bakehouse</Link>
            <a href="#explore-menu" onClick={()=>setMenu("menu")} className = {menu==="menu"?"active":""}>🍮Sweet Delight</a>
            <a href="#footer" onClick={()=>setMenu("about-us")} className = {menu==="about-us"?"active":""}>📞Let’s Talk Cake!</a>
        </ul>
      <div className="navbar-right"></div>
      
      <div className="navbar-search-icon">
        <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
        <div className={getTotalCartAmount() === 0 ? "": "dot"}></div>
      </div>
      <button onClick={()=>setShowLogin(true)}>Sign in</button>

    </div>
  )
}

export default Navbar
