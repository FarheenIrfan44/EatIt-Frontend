import React from 'react';
import './StoryCard.css'

const StoryCard = ({image, title, paraTxt}) => {
  return (
   <>
   
     <div className='storyCard'>
        <div className="StoryCardheader">
            <img src={image} alt="Image" />
        </div>

        <div className="info">
          <p className="title">{title}</p>
          <p className='infoPara'>{paraTxt} </p>
        </div>

        <div className="footer">
          <button type="button" className="action">Read More </button>
        </div>

      </div>
   
     
      </>
    
  );
}

export default StoryCard;
