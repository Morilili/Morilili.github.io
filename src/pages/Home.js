import React, { useState, useEffect } from 'react';
import './Home.css'
import Intro from '../components/Intro';
import Person from '../components/Person';
import Lofi from '../components/Lofi';
import { Link } from 'react-router-dom';

function Theme(props) {
  // function that checks if the window size is valid
  // if yes, it enables the clickable elements. if no , it "hides" them
  // thus disabling them

  const correctScreenSize = () => {
    const winw = window.innerWidth;
    const winh = window.outerHeight;
    const screenw = window.screen.availWidth;
    const screenh = window.screen.availHeight;
    
    var allc = document.getElementsByClassName('components');
    if (winw !== screenw || winh !== screenh) {
      
      
      // message only for home screen
      if (window.location.hash === '#/') {
        // could be made into an async function to avoid elements showing on the
        // screen when the alert is popped up
        for (var i = 0; i < allc.length; i++) {
          allc[i].style.visibility = 'hidden';
        }
        alert("Please fill window to full screen for picture navigation to work");
      }
      
    }
    else {
      for (var j = 0; j < allc.length; j++) {
        allc[j].style.visibility = 'visible';
      }
    }
  }
  
  // checks for window size using function above whenever resize event
  // happens or window loads happen
  var doit;
  window.onresize = window.onload = function () {
    clearTimeout(doit);
    doit = setTimeout(correctScreenSize, 100);
  };

  //code below are responsible for switching the "themes"(background)
  //one of the useEffect maintains the state "theme"

  //this is reponsible for initial state when 'theme' is null
  if (window.localStorage.getItem('theme') === null) {
    window.localStorage.setItem('theme', 'night');
  }
 
  const [theme, setTheme] = useState(window.localStorage.getItem('theme'));
  
  const toggleTheme = () => {
    if (theme === 'night') {
      setTheme('day');
    }else{
      setTheme('night');
    }
  };

  useEffect(() => {
    setTheme(window.localStorage.getItem('theme'));
  },[]);
    
  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);


  return (
    <div className={`top-${theme}`}>
      <br />
      <button className='components' id='light' onClick={toggleTheme}></button>
      
      <Link className='components' onClick={() => window.scrollTo(0, 0)} reloadDocument to='/about'>
        <Person />
      </Link>

      <a href="https://www.youtube.com/@morrisho5613" target='_blank' rel="noreferrer">
        <button className='components' id='youtube'></button>
      </a>
      
      <Intro className='components'/>
      
      <Lofi className='components' />
      
      <Link className='components' onClick={() => window.scrollTo(0, 0)} reloadDocument to='/projects'>
        <button className='components' id='projects'></button>
      </Link>

    </div>
  )
}

export default Theme