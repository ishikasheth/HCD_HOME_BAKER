import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
   

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/")
  };

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          🎂The Bakehouse
        </Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
          🍮Sweet Delight
        </a>
        <a href="#footer" onClick={() => setMenu("about-us")} className={menu === "about-us" ? "active" : ""}>
          📞Let’s Talk Cake!
        </a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Cart" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" className="profile-icon" />
            <ul className="navbar-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={handleLogout}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
