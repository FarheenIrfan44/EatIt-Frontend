import React from 'react';
import './TestimonialCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


const TestimonialCard = ({image, name, twitterHandle, message}) => {
  return (
    
      <div className="card">
        <div className="header">
         <div className='headerText'>
             <div className="image" >
            <img src={image} alt="" />
             </div>

          <div className='nameContainer'>
            <p className="name">{name}</p>
            <div className="stars">
             <p>{twitterHandle}</p>
            </div>

          
          </div>
         </div>

          <div className='twitterIcon'><i><FontAwesomeIcon icon={faTwitter}/></i></div>

        </div>

        <p className="message">
         {message}
        </p>
      </div>
   
  );
}

export default TestimonialCard;
