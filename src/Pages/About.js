import { Tooltip } from '@mui/material';
import React from 'react'
import './About.css';
import Typed from 'react-typed';

function About() {
  return (
    <div className='top-container'>
      <br />
      <div id='about'>
        <div id='description'>
          <h1 id='name-about'>
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
            
          
        </div>
        
      </div>
      <br/>
    </div>
      
  )
}

export default About