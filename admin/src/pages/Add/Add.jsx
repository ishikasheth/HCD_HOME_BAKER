import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({ url}) => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Classic Indulgence"
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => {
      const updated = { ...prevData, [name]: value };
      console.log(updated);
      return updated;
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      console.log("Response:", response.data);

      if (response.status === 200 && response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Classic Indulgence"
        });
        setImage(false);
        toast.success(response.data.message);  
      } else {
        toast.error(response.data.message || "Failed to add cake.");
      }
    } catch (error) {
      console.error("Error adding cake:", error);
      toast.error("Server error occurred."); 
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="Upload Icon" />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="name-this-bake flex-col">
          <p>Bake Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            required
          />
        </div>

        <div className="add-bake-description flex-col">
          <p>Bake Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Bake Category</p>
            <select onChange={onChangeHandler} name="category" value={data.category}>
              <option value="Classic Indulgence">Classic Indulgence</option>
              <option value="Flavored Temptations">Flavored Temptations</option>
              <option value="Chocolate Lovers’ Paradise">Chocolate Lovers’ Paradise</option>
              <option value="Brownie's">Brownie's</option>
              <option value="Mini Bites & Cupcakes">Mini Bites & Cupcakes</option>
              <option value="Cheesecake">Cheesecake</option>
              <option value="Custom special cakes">Custom special cakes</option>
              <option value="Bouquets and Chocolates">Bouquets and Chocolates</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Bake Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="Rs."
              required
            />
          </div>
        </div>

        <button type="submit" className="add-btn">ADD</button>
      </form>
    </div>
  );
};

export default Add;
