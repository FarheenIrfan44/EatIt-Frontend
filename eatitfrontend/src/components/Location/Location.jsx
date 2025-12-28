import React from 'react'
import RestaurantList from '../../elements/RestaurantList/RestaurantList'
import './Location.css'

const Location = () => {
  return (
    <div className='locationSection'>
    <div className='locationContainer'>
      <div className='leftPanelLocation'>
        <img src="src/assets/images/map.png" alt="Map Image" className='locationImage' />
      </div>
      <div className='rightPanelLocation'>
        <div className='locationSectionText'><h2 className='locationHeading'>Restaurants</h2></div>
        <div className='listItems'> 
        <RestaurantList content={'Sweet Sensation'} />
        <RestaurantList content={'Mr Biggs- Agidingbi'} />
        <RestaurantList content={'Magrellos'} />
        <RestaurantList content={'Old English Superstore and Bakery'} />
        <RestaurantList content={'Goodypot foodies enterprises'} />
        <RestaurantList content={'Belle First.Com'} />
        <RestaurantList content={'So Fresh - Ogudu'} />
        <RestaurantList content={'Goodypot foodies enterprises'} />
        <RestaurantList content={'Belle First.Com'} />
        <RestaurantList content={'So Fresh - Ogudu'} />
        </div>
        
       
      </div>
    </div>
    </div>
  )
}

export default Location
