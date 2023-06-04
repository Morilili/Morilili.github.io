import { Tooltip } from '@mui/material';
import React from 'react'
import './About.css';
import Typed from 'react-typed';

function About() {
  return (
    <div className='top-container'>
      <br />
      <div className='background'>
        <div className='description'>
          <h1 className='pageTitle'>
            Morris Ho
          </h1>
          <p className='typed-box'>
            <b className='typed-box' id='typed'>
              <Typed 
                strings={[
                  "2nd year U of T Student",
                  "Software Developer",
                  "Football Player",
                  "Classical Music Ethusiast",
                  "Entrepreneur (Aspiring)"
                ]}
                typeSpeed={50}
                backSpeed={80}
                loop
              />
            </b>
          </p>
          <img className='pic orig' alt='1' src={require("../assets/morris_pro.jpg")}></img>
          <Tooltip title='Moment before disaster (☉_☉)'>
            <img className="pic hover_img" alt='2' src={require("../assets/IMG-8255.JPG")}></img>
          </Tooltip>
          <div id='textbox'>
          <p>
          Hello there, I am Morris, 2nd year student at the University of Toronto specializing in Computer Science and minoring in Economics. Have a keen interest in Software Engineering, Web Development, Machine Learning, Investing and Entrepenuership.  
  <p>Apart from my academics, I enjoy playing all kinds of sports but soccer is my favourite. I have also been playing the flute for a long time and love making and lisening to all sorts of music (as you should be able to tell if you have throughly explored my home page :p) Aspiring to pursue a career in Software Development after graduation, and therefore seeking co-op and internship opportunities in related fields.</p>
          </p>
          </div>
          <div id='work-term'>
            <p>Summer 2023 Co-op Term: TBD</p>
          </div>
            
        </div>
      </div>
      <br/>
    </div>
      
  )
}

export default About