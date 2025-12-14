import React from 'react'
import './NavigationBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const NavigationBar = () => {
  return (
    <div className='navigationBar'>
      <div className="leftPanel"><button>Chowdeck</button></div>
      
      <div className="centerPanel">
      <p>Company</p>
      <p>FAQs</p>
      <p>Blog</p>
      <p>Contact</p></div>

      <div className="rightPanel">
         <p>Customers</p>
    <i><FontAwesomeIcon icon={faCartShopping}  /></i>
      </div>
      

      
    </div>
  
  )
}

export default NavigationBar
