import React from 'react'
import "./Services.css"
import Card from '../Card/Card1';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./resume.pdf"
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

const Services = () => {
  const transition={duration:1, type:'spring'}

  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className='services' id='Services'>
      {/* left side */}
      <div className="left-por">
        <span style={{color: darkMode? 'white' : ''}}>My Awsome</span>
        <span>Services</span>
        <span>
        I will provide an excellent quality of  work in my domains I have a good foundation of knowledge of C++, DSA, <br /> HTML, CSS, JS, React.js, Node,js, Express.js, Mongo db, Python, Pandas, Numpy, Matplotlib, MySql, Excel, <br /> Tableau, Power Bi and I am working  on Machine Learning and improving my <br /> knowledge to provide a better result to my clients. 
        </span>
        <a href={Resume} download>
        <button className="button s-button">Downlode CV</button>
        </a>
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
            emoji={Humble}
            heading={'DEVELOPMENT'}
            detail={ "HTML, CSS, REACT.JS, NODE.JS, EXPRESS.JS"}
            />
        </motion.div>
        {/* second card */}
        <motion.div
        initial={{left:"-11rem",top:"12rem"}}
        whileInView={{left:"-4rem"}}
        transition={transition}
         style={{top:"12rem",left: '-4rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'CODING'}
            detail={ "C++, JAVASCRIPT, PYTHON"}
            />
        </motion.div>
        {/* third card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
           style={{top:"19rem",left: '12rem'}}>
            <Card
            emoji={Glasses}
            heading={'DATA BASE'}
            detail={ "MONGO DB, MYSQL "}
            />
        </motion.div>
        <div className="blur s-blur2" style={{background: "var(--purple" }} ></div>
      </div>
    </div>
  )
}

export default Services
