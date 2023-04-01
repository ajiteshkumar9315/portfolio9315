import React from 'react'
import "./Portfolio.css"
import {Swiper,SwiperSlide} from 'swiper/react'
import Ayurveda from "../../img/ayurveda-img.png";
import Intership from "../../img/intership-img.png";
import Portfolioimg from "../../img/portfolio-img.png";
import Onlinechat from "../../img/onlinechat-img.png";
import "swiper/css"
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className='portfolio'>
      {/* heading */}
      <span style={{color: darkMode? 'white' : ''}}>Recent Project</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
          <a href="http://onlinechat-j97r.onrender.com//" target="_blank" rel="noopener noreferrer"><img src={Onlinechat} alt="" /></a>
            {/* <img src={Onlinechat} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide>
        <a href="http://internshipssite.onrender.com/" target="_blank" rel="noopener noreferrer"><img src={Intership} alt="" /></a>
            {/* <img src={Intership} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://ayurvedahouse-v0-ujvn.onrender.com/" target="_blank" rel="noopener noreferrer"></a>
            <img src={Ayurveda} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Portfolioimg} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}


export default Portfolio
