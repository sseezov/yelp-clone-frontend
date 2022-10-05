import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <AddRestaurant/>
    </div>
  )
}

export default Home