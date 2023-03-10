import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import './Footer.css';


function Footer() {
  
  return (
    <div className='container'>
      <div className='pages'>
        <h1 style={{textAlign: "center",marginTop:'1vh'}}>Pages</h1>
        <ul style={{ marginTop: '-1vh' }}>

          <Link onClick={() => window.scrollTo(0, 0)} reloadDocument to='/'  style={{color:"white",textDecorationLine:'none'}}>
            <li className='links'>Home</li>
          </Link>
          
          <Link onClick={() => window.scrollTo(0, 0)} reloadDocument to='/about'  style={{color:"white",textDecorationLine:'none'}}>
            <li className='links'>About</li>
          </Link>
          
          <Link onClick={() =>window.scrollTo(0, 0)} reloadDocument to='/projects' style={{color:"white",textDecorationLine:'none'}}>
            <li className='links'>Projects</li>
          </Link>
            
        </ul>
      </div>
      <div className='contacts'>
        <Contact />
      </div>
    </div>
  )
}

export default Footer