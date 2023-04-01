import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from "react-scroll"

function Navbar() {
  return (
    <div className='nav-wrapper'>
        <div className="nav-left">
            <div className="nav-name">Ajitesh kumar</div>
            <Toggle />
        </div>
        <div className="nav-right">
            <div className="nav-list">
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Aboutme' smooth={true}>
                    <li>About me</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                    <li>Resume</li>
                    </Link>
                </ul>
            </div>
            <Link to="contact" spy={true} smooth={true}>
            <button className="button nav-button">Contect us</button>
            </Link>
        </div>
      
    </div>
  )
}

export default Navbar
