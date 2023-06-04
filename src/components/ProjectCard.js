import React from 'react';
import './ProjectCard.css';

function ProjectCard({image, name}) {
  return (
    <div className='projectCard'>
      <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
      <h1 className='projectTitle'>{name}</h1>
    </div>
  )
}

export default ProjectCard;