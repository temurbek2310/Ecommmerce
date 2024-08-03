import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import SingleProduct from './routes/SingleProduct'
import NotFound from './routes/NotFound'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<SingleProduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Fragment>
  )
}

export default App