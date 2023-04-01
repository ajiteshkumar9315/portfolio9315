import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt="" style={{width: '100%'}} />
      <div className="f-content">
        <span>ajiteshkumar9315888@gmail.com</span>
        <div className="f-icons">
        <a href="http://https://instagram.com/ajiteshkumar9315/" target="_blank" rel="noopener noreferrer"><Insta color='white' size='3rem'/></a>
        {/* <Insta color='white' size='3rem'/> */}
        <a href="http://linkedin.com/in/ajitesh-kumar-1963b7220" target="_blank" rel="noopener noreferrer"> <Linkedin color='white' size='3rem'/> </a>
        {/* <Linkedin color='white' size='3rem'/> */}
        <a href="http://github.com/ajiteshkumar9315 " target="_blank" rel="noopener noreferrer"><Github color='white' size='3rem'/></a>
        {/* <Github color='white' size='3rem'/> */}
        </div>
      </div>
    </div>
  )
}

export default Footer
