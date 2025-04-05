import React, { useContext, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from './../foodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const location = useLocation();
  const foodDisplayRef = useRef(null); // Reference to scroll to

  // Scroll to top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Scroll down to food display when category is selected
  useEffect(() => {
    if (category !== "All" && foodDisplayRef.current) {
      foodDisplayRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [category]);

  // Scroll to top before navigating to the cart
  const handleCartNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='food-display' id='food-display' ref={foodDisplayRef}>
      <h2>{category === "All" ? "Best Selling" : category}</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} descrption={item.description} price={item.price} image={item.image} />;
          }
        })}
      </div>

      {/* Button to navigate to cart */}
      <div className="food-display-cart">
        <Link to="/cart">
          <button className="cart-button" onClick={handleCartNavigation}>Go to Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default FoodDisplay;
