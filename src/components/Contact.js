import React from 'react';
import './Contact.css';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div>
    <h1 style={{textAlign: "center",marginTop:'1vh'}}>Let's Connect!</h1>
      <div className="socialMedia">
        <a href="mailto: morris.ho@mail.utoronto.ca" target='_blank' rel="noreferrer"><EmailIcon /></a>
        <a href='https://github.com/Morilili/' target='_blank' rel="noreferrer"><GitHubIcon /></a>      
        <a href='https://www.linkedin.com/in/morrisho7/' target='_blank' rel="noreferrer"><LinkedInIcon /></a>
        <a href='https://www.instagram.com/mo.rris/' target='_blank' rel="noreferrer"><InstagramIcon /></a>
        
      </div>
      <p style={{fontSize:'2vmin'}}> Created by Morris Ho | &copy; 2022 All right reserved.</p>
    </div>
  )
}

export default Contact