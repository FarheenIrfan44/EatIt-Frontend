import React from 'react'
import StoryCard from '../../elements/StoryCard/StoryCard'
import './Stories.css'

const Stories = () => {
  return (
    <div className='storiesSection'>
      <div className='storiesSectionHeader'>
        <h1>Stories</h1>
        <img src="src/assets/images/noodle.png" alt="" />
      </div>
      
      <div className='storyCardContainer'>
        <StoryCard image={"src/assets/images/StoryCard3.png"} title={"Chowdeck Joins Y Combinator's S'22 Batch"} paraTxt={"Chowdeck has been accepted to Y Combinator’s Summer Batch 2022, joining a league of extraordinary companies that are dis..."}/>
        <StoryCard image={"src/assets/images/StoryCard2.png"} title={"Champions : Kingsley Agbinya"} paraTxt={"Kingsley, a rider who got promoted to an associate talks about his journey and the biggest change in his life since he j..."}/>
        <StoryCard image={"src/assets/images/StoryCard1.png"} title={"Champions : Anthony Agam"} paraTxt={"Anthony a.k.a Spider, a Senior Man, shares his life-changing experience and most memorable delivery with Chowdeck."}/>

      </div>
      
    </div>
  )
}

export default Stories
