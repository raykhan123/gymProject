import './Footer.css'
import React from 'react'
import { FaFacebook, FaLinkedin, FaMailBulk, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'> 
    <div className='footer-container'>
    <div className='social'>

    <a href="https://www.facebook.com/" target="blank">
    <FaFacebook size={30} style={{color: 'blue', marginRight: "1rem"}}/></a>

    <a href="https://www.linkedin.com/in/" target="blank">
    <FaLinkedin size={30} style={{color: 'blue', marginRight: "1rem"}}/></a>

    <a href="https://www.twitter.com/" target="blank">
    <FaTwitter size={30} style={{color: 'blue', marginRight: "1rem"}}/></a>

    <a href="mailto:abc@gmail.com" target="blank">
    <FaMailBulk size={30} style={{color: 'green', marginRight: "1rem"}}/></a>

    <a href="https://www.yotube.com/" target="blank">
    <FaYoutube size={30} style={{color: 'red', marginRight: "1rem"}}/></a>
   
    </div>
    </div>
    </div>
 
  )
}

export default Footer