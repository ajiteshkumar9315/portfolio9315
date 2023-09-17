import React from 'react'
import "./Qualification.css"
import Card from '../Card/Card';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'


const Qualification = () => {
  const transition={duration:1, type:'spring'}
  
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className='qualification'>
      {/* left side */}
      <div className="left-por">
        <span style={{color: darkMode? 'white' : ''}}>My Qualification</span>
        <span>Details</span>
        <span>
        I have completed my 10th board from Jhabban Lal Dav Public School and completed my high school from <br /> same school after taking non-Medical in high school. I am currently doing my B.Tech in Computer Science from <br /> Maharaja Agrasen Institute of Technology
        </span>
        {/* <button className="button s-button">D</button> */}
        <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
        whileInView={{left:'14rem'}}
        initial={{left:'25rem'}}
        transition={transition}
        style={{left: '14rem'}}>
            <Card
             emoji={Glasses}
             heading={'B.TECH'}
             detail={ "Maharaja Agrasen Institute Of Technology"}
             years={"2020-24"}
           
            />
        </motion.div>
        {/* second card */}
        <motion.div
        initial={{left:"-11rem",top:"12rem"}}
        whileInView={{left:"-4rem"}}
        transition={transition} style={{top:"12rem",left: '-4rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'12th'}
            detail={ "jhabban lal d.a.v public school"}
            years={"2018-19"}
            />
        </motion.div>
        {/* third card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition} style={{top:"19rem",left: '12rem'}}>
            <Card
            emoji={Humble}
            heading={'10th'}
            detail={ "jhabban lal d.a.v public school"}
            years={"2016-17"}
            />
        </motion.div>
        <div className="blur s-blur2" style={{background: "var(--purple" }} ></div>
      </div>
    </div>
  )
}

export default Qualification
