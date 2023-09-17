import React from 'react'
import "./Works.css"
import Html from "../../img/html1.png";
import Css from "../../img/css1.png";
import Javascript from "../../img/javascript1.png";
import Reactjs from "../../img/reactjs1.png";
import Nodejs from "../../img/nodejs1.png";
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

const Works = () => {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className='works'>
      <div className="left-por">
        <span style={{color: darkMode? 'white' : ''}}>Highlits Of</span>
        <span>My Courses</span>
        <span>
        I have a good foundation of knowledge of C++, DSA, HTML, CSS, JS, React.js, Node,js, Express.js, Mongo db, <br /> Python, Pandas, Numpy, Matplotlib, MySql, Excel, Tableau, Power Bi and I am working  on Machine Learning <br /> and improving my knowledge. Though I may be a  fresher, I am a very quick learner .
        </span>
        {/* <button className="button s-button">Hire me</button> */}
        <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
        initial={{rotate: 45}}
        whileInView={{rotate: 0}}
        viewport={{margin: '-40px'}}
        transition={{duration: 3.5, type: 'spring'}} className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Html} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Reactjs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Javascript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Nodejs} alt="" />
          </div>
        </motion.div>

        {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}


export default Works
