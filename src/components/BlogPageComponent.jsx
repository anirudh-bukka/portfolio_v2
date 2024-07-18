import React, { useEffect, useState } from 'react'
import BlogImage from '../assets/pictures/svg0.svg'
import Github from '../assets/icons/github.svg';
import Deployment from '../assets/icons/browser.svg';
import Blog1Preview from '../assets/pictures/blog1-preview.webp'

function BlogPageComponent() {

  return (
    <div>
      
      <div className=' flex flex-col rounded-lg mt-4 mb-4 lg:w-[60%] mx-auto p-2    max-sm:m-2'>
        <p className=' text-2xl text-center my-8'>The ‘design’ in finding a problem and choosing the team</p>
        <div className=' flex lg:flex-row justify-between     max-sm:flex-col'>
        <div className=" lg:w-[40%] lg:hidden"><img src={Blog1Preview} alt="Preview"/></div>
          <div className=' lg:w-[60%] lg:p-2 flex flex-col justify-between'>
            <p className='lg:mb-4'><i>7 October 2021</i></p>
            <p className='mt-4 mb-8 text-lg text-justify'>This blog is especially for college students looking to venture into entrepreneurship or consumer-centred design and innovation or to even solve a problem as a user.</p>
            <a href='https://medium.com/design-bootcamp/the-design-in-finding-a-problem-and-choosing-the-team-2f2d17255f05' className='border lg:w-fit text-center border-black p-4'>medium.com</a>
          </div>
          <div className=" lg:w-[40%] max-sm:hidden"><img src={Blog1Preview} alt="Preview"/></div>
        </div>
      </div>

      <div className=' flex flex-col rounded-lg mt-4 mb-4 lg:w-[60%] mx-auto p-2    max-sm:m-2'>
        <p className=' text-2xl text-center my-8'>The ‘design’ in finding a problem and choosing the team</p>
        <div className=' flex lg:flex-row justify-between     max-sm:flex-col'>
        <div className=" lg:w-[40%]"><img src={Blog1Preview} alt="Preview"/></div>
          <div className=' lg:w-[60%] lg:p-2 flex flex-col justify-between'>
            <p className='lg:mb-4'><i>7 October 2021</i></p>
            <p className='mt-4 mb-8 text-lg text-justify'>This blog is especially for college students looking to venture into entrepreneurship or consumer-centred design and innovation or to even solve a problem as a user.</p>
            <a href='https://medium.com/design-bootcamp/the-design-in-finding-a-problem-and-choosing-the-team-2f2d17255f05' className='border lg:w-fit text-center border-black p-4'>medium.com</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BlogPageComponent;