import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import Recipes from './Recipes'

const Pages = () => {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  )
}

export default Pages
