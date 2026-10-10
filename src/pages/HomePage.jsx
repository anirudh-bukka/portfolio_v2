import React from 'react';
import { motion } from 'framer-motion';

import room1 from '../assets/pictures/room1.jpg';
import manali from '../assets/pictures/manali1.jpg';    
import shimla from '../assets/pictures/shimla1.jpg';
import bonfire from '../assets/pictures/bonfire1.jpg';
import speaker from '../assets/pictures/speaker1.jpg';
import stadium from '../assets/pictures/cricket-stadium1.jpg';
import cycletrack1 from '../assets/pictures/cycletrack1.jpg';
import cycletrack2 from '../assets/pictures/cycletrack2.jpg';
import warangalgate from '../assets/pictures/warangalgate1.jpg';
import hungry from '../assets/pictures/hungry.jpeg';
import bball from '../assets/pictures/basketball1.jpeg';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const ImageCard = ({ src, alt, className }) => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className={`overflow-hidden border-2 border-black ${className}`}
  >
    <motion.img 
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
    />
  </motion.div>
);

function HomePage() {
  return (
    <div className='mx-auto px-6 py-32'>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        <div className="md:col-span-12 lg:col-span-10">
          <h1 className='text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-black mb-8 leading-[0.9] break-words'>
            Software
            <br />
            Engineer.
          </h1>
        </div>
        <div className="md:col-span-8 lg:col-span-6 md:col-start-5 lg:col-start-7">
          <p className='text-2xl md:text-4xl text-black font-bold uppercase tracking-tight leading-snug'>
            I HAVE A PASSION FOR MUSIC AND BASKETBALL. INSPIRED BY BIG DREAMS AND DANK MEMES.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
        {/* Full width top image */}
        <ImageCard src={room1} alt="Room" className="md:col-span-2 lg:col-span-3 row-span-2" />
        
        <ImageCard src={manali} alt="Manali" className="row-span-1" />
        <ImageCard src={shimla} alt="Shimla" className="row-span-1" />
        <ImageCard src={cycletrack1} alt="Cycling Track 1" className="row-span-1" />
        
        <ImageCard src={cycletrack2} alt="Cycling Track 2" className="row-span-1 md:col-span-2" />
        <ImageCard src={warangalgate} alt="Warangal Gate Mock" className="row-span-2" />
        
        <ImageCard src={bonfire} alt="Bonfire" className="row-span-1" />
        <ImageCard src={speaker} alt="Me speaking" className="row-span-2" />
        <ImageCard src={stadium} alt="Cricket Stadium" className="row-span-2" />
        <ImageCard src={bball} alt="Basketball" className="row-span-1" />
        
        <ImageCard src={hungry} alt="Stay Hungry Stay Foolish" className="md:col-span-2 lg:col-span-3 row-span-1" />
      </div>
    </div>
  )
}

export default HomePage;
