import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();
  
  const [customDetails, setCustomDetails] = useState(""); // Cake customization
  const [selectedTopping, setSelectedTopping] = useState(""); // Topping selection
  const [weights, setWeights] = useState({}); // Stores selected weight for each item

  const toppingPrice = selectedTopping ? 50 : 0; // ₹50 if topping selected

  // Function to update the selected weight
  const handleWeightChange = (itemId, newWeight) => {
    setWeights((prev) => ({ ...prev, [itemId]: newWeight }));
  };

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Weight</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />

        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            const selectedWeight = weights[item._id] || 1; // Default to 1kg
            const adjustedPrice = (item.price * selectedWeight).toFixed(2); // Adjust price based on weight

            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price} per kg</p>

                  {/* Weight Dropdown */}
                  <select 
                    value={selectedWeight} 
                    onChange={(e) => handleWeightChange(item._id, parseFloat(e.target.value))}
                  >
                    <option value={0.5}>500g</option>
                    <option value={1}>1kg</option>
                    <option value={2}>2kg</option>
                    <option value={3}>3kg</option>
                    <option value={4}>4kg</option>
                    <option value={5}>5kg</option>
                    <option value={6}>6kg</option>
                    <option value={7}>7kg</option>
                    <option value={8}>8kg</option>
                    <option value={9}>9kg</option>
                    <option value={10}>10kg</option>
                  </select>

                  <p>₹{adjustedPrice}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>   
            )
          }
        })}
      </div>

      {/* Cake Customization */}
      <div className="cart-customization">
        <h2>Customize Your Cake</h2>
        <textarea 
          placeholder="Describe your cake (e.g., shape, color, message, etc.)" 
          value={customDetails} 
          onChange={(e) => setCustomDetails(e.target.value)}
        />
      </div>

      {/* Topping Selection */}
      <div className="cart-toppings">
        <h3>Choose an Optional Topping</h3>
        <select value={selectedTopping} onChange={(e) => setSelectedTopping(e.target.value)}>
          <option value="">No Topping</option>
          <option value="chocolate">Birthday topping</option>
          <option value="nuts">Anniversary topping</option>
          <option value="fruit">New opening topping</option>
          <option value="sprinkles">Customized one (describe message)</option>
        </select>
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{Object.keys(cartItems).reduce((total, itemId) => {
                const selectedWeight = weights[itemId] || 1;
                const item = food_list.find((i) => i._id === itemId);
                return total + (item ? item.price * selectedWeight : 0);
              }, 0)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Topping Charge</p>
              <p>₹{toppingPrice}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{Object.keys(cartItems).reduce((total, itemId) => {
                const selectedWeight = weights[itemId] || 1;
                const item = food_list.find((i) => i._id === itemId);
                return total + (item ? item.price * selectedWeight : 0);
              }, 0) + toppingPrice}</b>
            </div>            
          </div>
        </div>

        {/* Customer Assurance Message */}
        <div className="cart-message">
          <p>🎉 Thank you for choosing us! Your cake is being baked with love! 🍰💖</p>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
