import React from 'react'
import './JoinNetwork.css'
import NetworkCard from '../../elements/NetworkCard/NetworkCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faTruck, faStar } from '@fortawesome/free-solid-svg-icons'


const JoinNetwork = () => {
  return (
    <div>
      <h1 className='joinNetwork-text'>Join our growing network </h1>
      <div className="networkCard-container">
        <NetworkCard icon={faCertificate} heading={"Start Selling"} para={"Are you a restaurant owner looking to grow your business? Reach new customers when you join our network."} image={'src/assets/images/image (1).png'}/>
        <NetworkCard icon={faTruck} heading={"Deliver happiness"} para={"Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it."} image={'src/assets/images/image.png'}/>
        <NetworkCard icon={faStar} heading={"Behind the scenes"} para={"If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team."} image={'src/assets/images/image (2).png'}/>
      </div>
    </div>
  )
}

export default JoinNetwork
