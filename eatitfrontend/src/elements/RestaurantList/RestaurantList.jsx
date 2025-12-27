import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './RestaurantList.css'


const RestaurantList = ({content}) => {
  return (
    <div className='RestaurantListElement'>
      <p>{content}</p>
      <i className='cartIconLocation'><FontAwesomeIcon icon={faCartShopping}/></i>
    </div>
  )
}

export default RestaurantList
