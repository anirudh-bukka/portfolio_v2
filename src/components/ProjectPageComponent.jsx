import React, { useEffect, useState } from 'react'
import ProjectImage from '../assets/pictures/svg0.svg'
import Github from '../assets/icons/github.svg';
import Deployment from '../assets/icons/browser.svg';
import EnsembleLearningPreview1 from '../assets/pictures/ensemble_learning.png';
import CapsNet from '../assets/pictures/capsnet.png';
import CapsNet2 from '../assets/pictures/capsnet2.png';

function ProjectPageComponent() {

  return (
    <div>    
      
      <div className=' flex flex-col rounded-lg mt-4 mb-4 lg:w-[60%] mx-auto p-2    max-sm:m-2'>
        <p className=' text-2xl text-center my-8'>A Deep Capsule Neural Network Diagnostic Model for the Classification of the Diabetic Retinopathy Stages</p>
        <div className=' flex lg:flex-row justify-between     max-sm:flex-col'>
        {/* <div className=" lg:w-[40%] lg:hidden"><img src={EnsembleLearningPreview1} alt="Preview"/></div> */}
          <div className='flex flex-col lg:hidden lg:w-[100%] justify-between'>
            <img src={CapsNet} className="" alt="Preview"/>
            <img src={CapsNet2} className="" alt="Preview"/>
          </div>
          <div className=' lg:w-[60%] lg:p-2 flex flex-col justify-between'>
            <div className='flex flex-row justify-between'>
              <p className='lg:mb-4'><i>6 April 2024</i></p>
              <p className='lg:mb-4 font-bold text-white bg-black px-3'>Journal</p>
            </div>
            <p className='mt-4 mb-8 text-lg text-justify'>This is a project based on Deep Capsule Neural Networks complemented by Pruning that classifies a fundus image into one of the seven stages of Diabetic Retinopathy - a leading cause of blindess among patients with chronic diabetes. Our model successfully classifies the input images with a high accuracy of more than 98% even with minimal training without stressing resources such as GPUs and TPUs. Key features of this method is we have redesigned the routing method called "Routing with Attention" to get prevent unnecessary connections being made between different neurons and capsules. To further prevent overfitting and underfitting which can arise from the dropout layer during training, pruning by weight and pruning by nodes has been implemented.</p>
            <a href='./projects' className='border lg:w-fit text-center border-black p-4 hover:bg-black hover:text-white hover:duration-200'>Under Review</a>
          </div>
          <div className='flex flex-col max-sm:hidden lg:w-[40%] justify-evenly'>
            <img src={CapsNet} className="  max-sm:hidden" alt="Preview"/>
            <img src={CapsNet2} className="  max-sm:hidden" alt="Preview"/>
          </div>
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
            <a href='https://ieeexplore.ieee.org/document/10370768' className='border lg:w-fit text-center border-black p-4 hover:bg-black hover:text-white hover:duration-200'>IEEE Xplore</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProjectPageComponent;