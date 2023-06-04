import React from 'react';
import './Projects.css';
import ProjectCard from '../components/ProjectCard';
import { allprojects } from '../helpers/allprojects';

function Projects(){
    return (
        <div className='top-container'>
            <div className='background'>
                <div className='projects'>
                    <h1 className='pageTitle'>Project Experiences</h1>
                    <div className='projects-list'>
                        {allprojects.map((project) => {
                            return <ProjectCard name={project.name} image={project.image}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;