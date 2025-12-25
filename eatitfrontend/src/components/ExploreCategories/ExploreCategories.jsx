import React from 'react'
import PageNumber from '../../elements/PageNumber/PageNumber'
import './ExploreCategories.css'
import {faArrowLeft, faArrowRight, faLocationDot,  faStar} from '@fortawesome/free-solid-svg-icons'
import Chip from '../../elements/Chip/Chip'

const ExploreCategories = () => {
  return (
   <>
<div className='exploreCategories'>
    <div className='exploreCategoriesContainer'>
      <h1 className='exploreCategoriesHeading'>Explore Categories</h1>
      <div className='categoriesContent'>
         <div className='pageNumberContainer'>
      <PageNumber icon={faLocationDot} />
      <PageNumber content={'01'}/>
      <PageNumber content={'02'} active={true} />
      <PageNumber content={'03'}/>
      <PageNumber icon={faStar}/>
      </div>

       <div className='imageContainer'> 
        <img className='imageDivBottle' src="src/assets/images/Bottle.png" alt="Bottle Image" />
      <img className='imageDivCan' src="src/assets/images/Can.png" alt="Bottle Image" />
      </div>

       <div className='arrow'>
        <PageNumber icon={faArrowLeft}/>
        <PageNumber icon={faArrowRight} />
      </div>
      </div>
    </div>

    <div className='exploreCategoriesText'>
       <div> 
        <h1 className='exploreCategoriesTxtHeading'>Chowdeck has you covered  <img className='exploreCategoriesTxtImg' src="src/assets/images/meal.png" alt="Image here" /></h1>
        </div>
        <p className='exploreCategoriesTxtPara'> Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download Chowdeck, and let’s deliver happiness to your doorstep in minutes.</p>
    </div>

    <div className='chipContainer'>
      <Chip icon={faStar} content={'Quick and easy onboarding'} color={'#FFC501'} />
      <Chip icon={faStar} content={'Quality meal choices'} color={'#FFC501'} />
      <Chip icon={faStar} content={'Live updates on orders'} color={'#FFC501'} />
      <Chip icon={faStar} content={'Highly rated riders'} color={'#FFC501'} />
      <Chip icon={faStar} content={'20/7 support for customers and vendors'} color={'#FFC501'} />
    </div>
</div>
    
    </>
  )
}

export default ExploreCategories
