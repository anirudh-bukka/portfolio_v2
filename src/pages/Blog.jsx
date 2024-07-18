import React from 'react';
import BlogPageComponent from '../components/BlogPageComponent';
import HeaderImg from '../assets/pictures/purple-cropped.png';

function Blog() {
  return (
    <div>
      <img src={HeaderImg} alt="Background" className=""/>
    <div className='flex flex-col'>
      <BlogPageComponent />
    </div>
  </div>
  )
}

export default Blog;