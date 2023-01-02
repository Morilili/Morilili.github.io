import { Tooltip } from '@mui/material';
import React from 'react'
import './About.css';

function About() {
  return (
    <div className='top-container'>
      <br />
      <div id='about'>
        <div id='description' style={{display:'flex'}}>
          <h1 id='name-about' >
            Morris Ho

          </h1>
          
          <div id='pp_container'>
            <img id='pic' alt='1' src={require("../assets/morris_pro.jpg")}></img>
            <Tooltip title='Moments before disaster (☉_☉)'>
              <img id='pic2' class="hover_img" alt='2' src={require("../assets/IMG-8255.JPG")}></img>
            </Tooltip>
            
          </div>
        </div>
        
      </div>
      <br/>
    </div>
      
  )
}

export default About