import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Email from './Email';

function Footer() {
  return (
    <div className='sm:p-1 pb-2 mb-[1px] w-full bg-[#FAFAFA] lg:max-w-full mt-[1px] flex flex-row justify-around lg:max-h-32 lg:min-h-32 z-50 bg-opacity-90'>
      <div className='my-auto font-sans text-2xl'>Anirudh</div>
      <div className='flex pt-2 flex-col justify-around text-center'>
          <div className='font-sans text-lg'>anirudh4dev@gmail.com</div>
          <a className='font-sans text-lg' href='https://drive.google.com/file/d/1RkC3HWOec7pV6iO7NoHF1lM6xxOQSVh5/view?usp=sharing'>Resumé</a>
      </div>
    </div>
  )
}

export default Footer;