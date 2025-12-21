import React from 'react'
import './PageNumber.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons'



const PageNumber = ({icon, content, active}) => {
  return (
    <>
    {icon? ( <i className='Icon'><FontAwesomeIcon icon={icon} /></i>): 
   (<div>
    {active? 
    (<div className='pageNumberActive'>{content}</div>):
    (<div className='Icon'>{content}</div>)}
   </div>)}
    </>
  )
}

export default PageNumber
