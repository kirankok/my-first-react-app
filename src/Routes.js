import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ProductDetails from './components/ProductDetails/ProductDetails';

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route
          path="*"
          element={
            <Navigate to={'/contact'} replace={true} />

          }
        />
      </Routes>
    </div>
  )
}

export default AppRoutes