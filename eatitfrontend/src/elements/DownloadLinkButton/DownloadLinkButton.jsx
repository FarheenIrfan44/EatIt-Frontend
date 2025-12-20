import React from 'react'
import './DownloadLinkButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'

const DownloadLinkButton = ({content, icon}) => {
  return (
    <div>
      <button className='socialBtn'>
        <i className='socialBtn-icons'><FontAwesomeIcon icon={icon} /></i>
        <p className='socialBtn-text'>{content}</p>
      </button>
    </div>
  )
}

export default DownloadLinkButton
