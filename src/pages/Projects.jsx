import React from 'react';
import ProjectPageComponent from '../components/ProjectPageComponent';
import HeaderImg from '../assets/pictures/cyan-cropped.png';

function Projects() {
  return (
    <div>
      <img src={HeaderImg} alt="Background" className=""/>
      <div className='flex flex-col'>
        {/* <p className='text-5xl  text-center my-3 text-black'>Projects</p> */}
        <ProjectPageComponent />
      </div>
    </div>
  )
}

export default Projects;