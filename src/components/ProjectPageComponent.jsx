import React, { useEffect, useState } from 'react'
import ProjectImage from '../assets/pictures/svg0.svg'
import Github from '../assets/icons/github.svg';
import Deployment from '../assets/icons/browser.svg';
import EnsembleLearningPreview1 from '../assets/pictures/ensemble_learning.png'

function ProjectPageComponent() {

  return (
    <div>    
      
      <div className=' flex flex-col rounded-lg mt-4 mb-4 lg:w-[60%] mx-auto p-2    max-sm:m-2'>
        <p className=' text-2xl text-center my-8'>Ensemble Learning Model for Gender Recognition Using the Human Voice</p>
        <div className=' flex lg:flex-row justify-between     max-sm:flex-col'>
        <div className=" lg:w-[40%] lg:hidden"><img src={EnsembleLearningPreview1} alt="Preview"/></div>
          <div className=' lg:w-[60%] lg:p-2 flex flex-col justify-between'>
            <div className='flex flex-row justify-between'>
              <p className='lg:mb-4'><i>3 January 2024</i></p>
              <p className='lg:mb-4 font-bold text-white bg-black px-3'>Research Paper</p>
            </div>
            <p className='mt-4 mb-8 text-lg text-justify'>Implemented ensemble learning model combining various machine learning algorithms to classify gender into ’male’ or ’female’ based on the voice data from pre-processed wave signals after research.</p>
            <a href='https://ieeexplore.ieee.org/document/10370768' className='border lg:w-fit text-center border-black p-4'>IEEE Xplore</a>
          </div>
          <div className=" lg:w-[40%] max-sm:hidden"><img src={EnsembleLearningPreview1} alt="Preview"/></div>
        </div>
      </div>


      <div className=' flex flex-col rounded-lg mt-4 mb-4 lg:w-[60%] mx-auto p-2    max-sm:m-2'>
        <p className=' text-2xl text-center my-8'>Ensemble Learning Model for Gender Recognition Using the Human Voice</p>
        <div className=' flex lg:flex-row justify-between     max-sm:flex-col'>
        <div className=" lg:w-[40%]"><img src={EnsembleLearningPreview1} alt="Preview"/></div>
          <div className=' lg:w-[60%] lg:p-2 flex flex-col justify-between'>
            <div className='flex flex-row justify-between'>
              <p className='lg:mb-4'><i>3 January 2024</i></p>
              <p className='lg:mb-4 font-bold text-white bg-black px-3'>Research Paper</p>
            </div>
            <p className='mt-4 mb-8 text-lg text-justify'>Implemented ensemble learning model combining various machine learning algorithms to classify gender into ’male’ or ’female’ based on the voice data from pre-processed wave signals after research.</p>
            <a href='https://medium.com/design-bootcamp/the-design-in-finding-a-problem-and-choosing-the-team-2f2d17255f05' className='border lg:w-fit text-center border-black p-4'>medium.com</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProjectPageComponent;