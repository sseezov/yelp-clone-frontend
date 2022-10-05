import React from 'react'

const AddRestaurant = () => {
  return (
    <div>
      <form action="">
        <div className='formRow'>
          <div className="column">
            <input type="text" className='formControl' placeholder='name' />
          </div>
          <div className="column">
            <input type="text" className='formControl' placeholder='location' />
          </div>
          <div className="column">
            <select className='formControl' placeholder='price range'>
              <option disabled selected>choose price</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button>
            add
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant