import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UpdatePage from './routes/UpdatePage'
import Home from './routes/Home'
import RestaurantDetailPage from './routes/RestaurantDetailPage'
import '../src/styles.css'
import { RestaurantsContextProvider } from './context/restaurantsContext'

const App = () => {
  return (
    <RestaurantsContextProvider>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
          <Route path="/restaurants/:id/update" element={<UpdatePage />} />
        </Routes>
      </BrowserRouter >
    </RestaurantsContextProvider>


  )
}

export default App