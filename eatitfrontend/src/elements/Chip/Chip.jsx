import React from 'react'
import './Chip.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Chip = ({icon, content, color}) => {
  return (
    <div className='chip'>
      <i className='chipIcon'><FontAwesomeIcon icon={icon} style={{color: color}}/></i>
      <p className='chipText'>{content}</p>
    </div>
  )
}

export default Chip
