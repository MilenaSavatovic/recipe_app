import { BrowserRouter } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Pages from './pages/Pages'
import Footer from './layouts/Footer'
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Pages />
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
