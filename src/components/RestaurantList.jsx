import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/restaurantsContext'

const RestaurantList = (props) => {

  const { restaurants, setRestaurants } = useContext(RestaurantsContext)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await RestaurantFinder.get("/")
        setRestaurants(response.data.data.restaurants)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='restaurant-list'>
      <table>
        <thead>
          <tr>
            <th>Ресторан</th>
            <th>Место</th>
            <th>Цена</th>
            <th>Рейтинг</th>
            <th>Редактировать</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map((restaraunt) => {
            return (
            <tr key={restaraunt.id}>
              <td>{restaraunt.name}</td>
              <td>{restaraunt.location}</td>
              <td>{"$".repeat(restaraunt.price_range)}</td>
              <td>reviews</td>
              <td><button>update</button></td>
              <td><button>delete</button></td>
            </tr>)
          })}

        </tbody>

      </table>
    </div>
  )
}

export default RestaurantList