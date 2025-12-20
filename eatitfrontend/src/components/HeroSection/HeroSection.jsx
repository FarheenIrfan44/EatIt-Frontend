import React from 'react'
import './HeroSection.css'
import Slider from '../../elements/Slider/Slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faAppleWhole} from '@fortawesome/free-solid-svg-icons'
import {faApple} from '@fortawesome/free-brands-svg-icons'
import DownloadLinkButton from '../../elements/DownloadLinkButton/DownloadLinkButton'
import { icon } from '@fortawesome/fontawesome-svg-core'


const HeroSection = () => {
  return (
    <div className='heroSection'>
      <Slider></Slider>
      <h1>Try the App</h1>
      <p className='text'>Have meals delivered to you within minutes from a 
        wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.</p>
        <div className="links">
            <i className='socials'><FontAwesomeIcon icon={faPlay} /></i> 
            <i className='socials'><FontAwesomeIcon icon={faApple} /></i>
        </div>
        <img src="src/assets/images/chowdeck-app.png.png" alt="App Image" />
        <h1>Download our App !</h1>
        <div className="socialBtn-container">
             <DownloadLinkButton content={"Download on Play Store"} icon={faPlay} />
        <DownloadLinkButton content={"Download on Apple Store"} icon={faApple}  />
        </div>
       
    </div>
    
  )
}

export default HeroSection
