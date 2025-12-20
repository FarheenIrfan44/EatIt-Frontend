import React from 'react'
import './NetworkCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NetworkCard = ({icon, heading, para,btnTxt, image}) => {
  return (
    <div className='networkCard'>
        <div className='networkCard-content'>
        <i className='networkCard-icon'><FontAwesomeIcon icon={icon} /></i>
        <h2 className='networkCard-heading'>{heading}</h2>
        <p className='networkCard-text'>{para}</p>
        <a href="" className='networkCard-btn'>SEE MORE </a>
        </div>
        <img src={image} alt="card-image" className='networkCard-img'/>
    </div>
  )
}

export default NetworkCard
