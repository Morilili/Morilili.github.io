import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import './Footer.css';


function Footer() {
  return (
    <div className='container'>
      <div className='pages'>
        <h1 style={{textAlign: "center",marginTop:'1vh'}}>Pages</h1>
        <ul style={{marginTop:'-1vh'}}>
          <Link reloadDocument to='/' style={{color:"white",textDecorationLine:'none'}}>
            <li className='links'>Home</li>
          </Link>
          
          <Link reloadDocument to='/about' style={{color:"white",textDecorationLine:'none'}}>
            <li className='links'>About</li>
          </Link>
          
          <li>Projects (Coming soon)</li>
        </ul>
      </div>
      <div className='contacts'>
        <Contact />
      </div>
    </div>
  )
}

export default Footer