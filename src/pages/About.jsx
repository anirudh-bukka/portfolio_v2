import React from 'react';
import Guitar from '../assets/icons/guitar.svg';
import Keyboard from '../assets/icons/piano.svg';
import Drums from '../assets/icons/drum.svg';
import Instagram from '../assets/logos/instagram.svg';
import Discord from '../assets/logos/discord.svg';
import Twitter from '../assets/logos/twitter.svg';
import LinkedIn from '../assets/logos/linkedin.svg';
import HeaderImg from '../assets/pictures/about-headerimg.png';
import Efcct1 from '../assets/pictures/efcct1.png';
import ExperienceCard from '../components/ExperienceCard.jsx';

import ReactLogo from '../assets/icons/react.svg';
import MongoLogo from '../assets/icons/mongodb.svg';
import JavaLogo from '../assets/icons/java.svg';
import SpringBoot from '../assets/icons/springboot.svg';
import DataAnalysis from '../assets/icons/data_analysis.svg';
import Python from '../assets/icons/python.svg';
import Git from '../assets/icons/git.svg';
import MySQL from '../assets/icons/sql.svg';
import Github from '../assets/icons/github.svg';


import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <img src={HeaderImg} alt="Background" className=""/>
      <div className='flex flex-col justify-center p-2'>
        <div>
          <p className='text-xl p-3 my-4 mx-auto text-justify max-sm:w-[90%] lg:w-[70%]'>I am currently working on automation scripting for end-to-end feature implementation and enhancing overall quality of the application. I am a B.Tech graduate in Information Technology from Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering & Technology, Hyderabad, India.
  I am always open to network, be it work or music. I have a deep interest in Data Science and Web Development and  try to contribute to open source projects. </p>
        </div>

        {/* <div className='flex flex-col mx-auto max-sm:w-[90%] lg:w-[70%] border-2'>
          <div className='text-4xl border-2 p-3 my-4 mx-auto'>Experience</div>
          <div className='border-2 flex flex-row'>
            <div className='border-2 max-sm:w-[20%] lg:w-[10%]'>Logo</div>
            <div className='border-2 max-sm:w-[80%] lg:w-[90%] lg:ml-8'>
              <div className='border-2 flex flex-row'>
                <div>Company Name</div>
                <div>Start-End</div>
              </div>
              <div className='border-2'>Role</div>
              <div className='border-2'>Description</div>
            </div>
          </div>
        </div> */}
        <hr className='max-sm:w-[90%] lg:w-[70%] mx-auto' />
        <div className='flex flex-col mx-auto max-sm:w-[90%] lg:w-[60%]'>
          <div className='text-4xl p-3 my-4 mx-auto'>Experience</div>
            <ExperienceCard />
        </div>
        <hr className='max-sm:w-[90%] lg:w-[70%] mx-auto my-4' />

        <div className='flex flex-col mx-auto max-sm:w-[90%] lg:w-[60%]'>
          <div className='text-3xl p-3 my-4 mx-auto'>Skills</div>
          <div className='flex lg:flex-row max-sm:flex-col mx-auto justify-around'>
            <div className='flex max-sm:flex-row mx-auto'>
              <a href='https://drive.google.com/file/d/1iydC2CQjk_4TGZwwiffCFhMNzdsOH2Hf/view?usp=sharing'><img src={JavaLogo} alt="Java" className='lg:h-14 lg:w-14 p-2 max-sm:h-[50px] hover:bg-white hover:border-0 duration-200 hover:border-b-2 hover:border-black'/></a>
              <img src={ReactLogo} alt="ReactJS" className='lg:h-14 lg:w-14 p-2 max-sm:h-[50px] hover:bg-white hover:border-0 duration-200 hover:border-b-2 hover:border-black'/>
              <img src={MongoLogo} alt="MongoDB" className='lg:h-14 lg:w-14 p-2 max-sm:h-[50px] hover:bg-white hover:border-0 duration-200 hover:border-b-2 hover:border-black'/>
              <img src={SpringBoot} alt="Spring Boot" className='lg:h-14 lg:w-14 p-2 max-sm:h-[50px] hover:bg-white hover:border-0 duration-200 hover:border-b-2 hover:border-black'/>
            </div>
            <div className='flex max-sm:flex-row'>
              <a href='https://drive.google.com/drive/folders/1pmRPkG85NQH05NkqZPCe2a4ZojgP-JYV?usp=sharing'><img src={Python} alt="Python" className='lg:h-14 lg:w-14 p-2 max-sm:h-[50px] hover:bg-white hover:border-0 duration-200 hover:border-b-2 hover:border-black'/></a>
              <a href='https://drive.google.com/drive/folders/1pmRPkG85NQH05NkqZPCe2a4ZojgP-JYV?usp=sharing'><img src={DataAnalysis} alt="Data Analysis" className='lg:h-14 lg:w-14 p-2 max-sm:h-[50px] hover:bg-white hover:border-0 duration-200 hover:border-b-2 hover:border-black'/></a>
              <img src={Git} alt="Git" className='lg:h-14 lg:w-14 p-2 max-sm:h-[50px] hover:bg-white hover:border-0 duration-200 hover:border-b-2 hover:border-black'/>
              <img src={MySQL} alt="MySQL" className='lg:h-14 lg:w-14 p-2 max-sm:h-[50px] hover:bg-white hover:border-0 duration-200 hover:border-b-2 hover:border-black'/>
            </div>
          </div>
        </div>
        <hr className='max-sm:w-[90%] lg:w-[70%] mx-auto my-4' />

        <div className='my-8 flex flex-col lg:flex-row max-sm:w-[90%] lg:w-[70%] mx-auto justify-around'>
          <div className='flex flex-col justify-between px-3 lg:w-[70%]'>
            <p className='text-xl mx-auto text-justify'>I co-founded a networking community in Discord, where people (mostly students) can come grow, have fun and share knowledge! <i>We are back to the drawing board to expand the purpose and experience and with one big suprise.</i></p>
            <Link to="https://www.linkedin.com/company/efcctcommunity/" className='border border-black p-4 max-sm:my-2 text-center hover:bg-black hover:text-white hover:duration-200'>EFCCT</Link>
          </div>
          <div>
            <img className='max-sm:my-2' src={Efcct1} alt="EFCCT" />
          </div>
        </div>
        <div className='flex flex-col mt-5'>
          <p className='text-xl py-3 font-semibold text-center'>I am an avid music enthusiast.</p>
          <div className='flex flex-row justify-evenly'>
            <img src={Guitar} alt="Guitar" className='lg:h-20 lg:w-20 p-2 max-sm:h-[50px]'/>
            <img src={Keyboard} alt="Keyboard" className='lg:h-20 lg:w-20 p-2 max-sm:h-[50px]'/>
            <img src={Drums} alt="Drums" className='lg:h-20 lg:w-20 p-2 max-sm:h-[50px]'/>
          </div>
        </div>
        <div className='mt-5 flex flex-col justify-center'>
          <p className='text-center'>Connect with me</p>
          <div className='flex flex-row justify-center'>
            <a href='https://www.linkedin.com/in/anirudh-bukka/'><img src={LinkedIn} alt="LinkedIn" className='mx-1 lg:h-10 lg:w-10 p-2 max-sm:h-[50px] hover:bg-white hover:border-0 duration-200 hover:border-b-2 hover:border-black'/></a>
            <a href='https://discordapp.com/users/773880832405798942'><img src={Discord} alt="Discord" className='mx-1 lg:h-10 lg:w-10 p-2 max-sm:h-[50px] hover:bg-white hover:border-0 duration-200 hover:border-b-2 hover:border-black'/></a>
            <a href='https://twitter.com/AnirudhBukka'><img src={Twitter} alt="Twitter" className='mx-1 lg:h-10 lg:w-10 p-2 max-sm:h-[50px] hover:bg-white hover:border-0 duration-200 hover:border-b-2 hover:border-black'/></a>
            <a href='https://www.instagram.com/anidude09/'><img src={Instagram} alt="Instagram" className='mx-1 lg:h-10 lg:w-10 p-2 max-sm:h-[50px] hover:bg-white hover:border-0 duration-200 hover:border-b-2 hover:border-black'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;