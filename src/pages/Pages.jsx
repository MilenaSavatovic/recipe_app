import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Cuisines from './Cuisines'
import Home from './Home'
import Intolerancies from './Intolerancies'
import Recipes from './Recipes'
import Diets from './Diets'
import Meals from './Meals'
import Recipe from './Recipe'
import DietRecipes from './DietRecipes'

const Pages = () => {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/cuisines" element={<Cuisines />} />
      <Route path="/recipes/cuisines/:id" element={<Recipe />} />
      <Route path="/recipes/intolerancies" element={<Intolerancies />} />
      <Route path="/recipes/diets" element={<Diets />} />
      <Route path="/recipes/diets/:type" element={<DietRecipes />} />
      <Route path="/recipes/meals" element={<Meals />} />
    </Routes>
  )
}

export default Pages
