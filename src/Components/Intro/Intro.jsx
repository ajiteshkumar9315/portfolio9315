import React from 'react'
import './Intro.css'
import Github from'../../img/github.png';
import LinkdeIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Profile from '../../img/profile.jpg';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'
import { Link } from "react-scroll";

const Intro = () => {
    const transition={duration:2, type:'spring'}
    
    const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode
  return (
    <div className="intro" id='Aboutme'>
        <div className="in-left">
            <div className="in-name">
                <span style={{color: darkMode? 'white': '' }}>Hy! I Am</span>
                <span>Ajitesh Kumar</span>
                <span>I am a developer and analyst. Enthusiastic about learning and exploring new things. <br /> Committed to self learning and development to achieve good results.</span>
            </div>
            <Link to="contact" smooth={true} spy={true}>
            <button className="button in-button">Hire me</button>
            </Link>
            <div className="in-icon">
                <a href="http://github.com/ajiteshkumar9315 " target="_blank" rel="noopener noreferrer"><img src={Github} alt="" /></a>
                {/* <img src={Github} alt="" /> */}
                <a href="http://linkedin.com/in/ajitesh-kumar-1963b7220" target="_blank" rel="noopener noreferrer"> <img src={LinkdeIn} alt="" /></a>
                {/* <img src={LinkdeIn} alt="" /> */}
                <a href="http://https://instagram.com/ajiteshkumar9315/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="" /></a>
                {/* <img src={Instagram} alt="" /> */}
            </div>
        </div>
       <div className="in-right">
        {/* < className="in-image"> */}
            <img src={Profile} alt="" className='in-profile'/>
            <motion.img
            initial={{left:"-36%"}}
            whileInView={{left:"-24%"}}
            transition={transition} 
            src={glassesimoji} alt="" />
        <motion.div  
        // initial={{top:'-4%', left:'74%'}}
        initial={{top:'-2rem', left:'20rem'}}
        whileInView={{left:'15rem'}}
        // whileInView={{left:'48%'}}
        transition={transition}
        className="funk-icon1">
            <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
        </motion.div>
        <motion.div  
        initial={{top:'16 rem', left:'9rem'}}
        // initial={{top:'16rem',right:'26rem'}}
        whileInView={{left:'-2rem'}}
        transition={transition}  
        className="funk-icon2">
            <FloatingDiv image={thumbup} txt1='Data' txt2='Analyst    '  />
        </motion.div>

        {/* blur divs */}
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur" style={{
            background: '#c1f5ff',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
        }}></div>
        </div>      
    </div>
  )
}

export default Intro
