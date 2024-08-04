import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import SingleProduct from './routes/SingleProduct'
import NotFound from './routes/NotFound'
import Cart from './routes/Cart'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<SingleProduct />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </React.Fragment>
  )
}

export default App