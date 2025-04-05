import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

  const [category, setCategory] = useState("All");


  return (
    <div>
      <Header/>
      {/* Category Selection */}
      <ExploreMenu category={category} setCategory={setCategory} />

      {/* Show FoodDisplay only when a category is selected */}
      {category !== "All" && <FoodDisplay category={category} />}
    </div>
  )
}

export default Home
