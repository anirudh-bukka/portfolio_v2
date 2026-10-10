import React from 'react';
import { motion } from 'framer-motion';

import Guitar from '../assets/icons/guitar.svg';
import Keyboard from '../assets/icons/piano.svg';
import Drums from '../assets/icons/drum.svg';
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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function About() {
  return (
    <div className="pt-32 pb-12 min-h-screen px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-24"
      >
        <h1 className="text-6xl md:text-9xl font-black text-black tracking-tighter uppercase mb-8">About.</h1>
        <p className="text-2xl md:text-4xl text-black font-bold uppercase tracking-tight leading-snug">WHO I AM AND WHAT I DO.</p>
      </motion.div>

      <div className="mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="border-t-4 border-b-4 border-black py-16 mb-24"
        >
          <p className="text-2xl md:text-4xl text-black font-medium leading-relaxed max-w-5xl">
            I am currently working on automation scripting for end-to-end feature implementation and enhancing overall quality of the application. I am a B.Tech graduate in Information Technology from Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering & Technology, Hyderabad, India.
            <br/><br/>
            I am always open to network, be it work or music. I have a deep interest in Data Science and Web Development and try to contribute to open source projects.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-16">Experience</h2>
          <ExperienceCard />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mb-24 border-t-4 border-black pt-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-16">Skills & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-l-4 border-t-4 border-black">
            {[ 
              { src: JavaLogo, alt: "Java", link: "https://drive.google.com/file/d/1iydC2CQjk_4TGZwwiffCFhMNzdsOH2Hf/view?usp=sharing" },
              { src: ReactLogo, alt: "ReactJS" },
              { src: MongoLogo, alt: "MongoDB" },
              { src: SpringBoot, alt: "Spring Boot" },
              { src: Python, alt: "Python", link: "https://drive.google.com/drive/folders/1pmRPkG85NQH05NkqZPCe2a4ZojgP-JYV?usp=sharing" },
              { src: DataAnalysis, alt: "Data Analysis", link: "https://drive.google.com/drive/folders/1pmRPkG85NQH05NkqZPCe2a4ZojgP-JYV?usp=sharing" },
              { src: Git, alt: "Git" },
              { src: MySQL, alt: "MySQL" }
            ].map((skill, index) => (
              <div 
                key={index}
                className="aspect-square flex items-center justify-center p-8 border-r-4 border-b-4 border-black hover:bg-black hover:invert transition-colors duration-300"
              >
                {skill.link ? (
                  <a href={skill.link} target="_blank" rel="noreferrer" className="w-full h-full flex items-center justify-center">
                    <img src={skill.src} alt={skill.alt} className="w-1/2 h-1/2 object-contain" />
                  </a>
                ) : (
                  <img src={skill.src} alt={skill.alt} className="w-1/2 h-1/2 object-contain" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mb-24 bg-black text-white border-4 border-black flex flex-col lg:flex-row"
        >
          <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">EFCCT Community</h3>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12">
                I co-founded a networking community in Discord, where people (mostly students) can come grow, have fun and share knowledge! We are back to the drawing board to expand the purpose and experience with one big surprise.
              </p>
            </div>
            <a 
              href="https://www.linkedin.com/company/efcctcommunity/" 
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 bg-white text-black text-2xl font-black uppercase tracking-widest hover:bg-gray-300 transition-colors w-fit"
            >
              Visit EFCCT
            </a>
          </div>
          <div className="lg:w-1/2 border-t-4 lg:border-t-0 lg:border-l-4 border-black">
            <img className="w-full h-full object-cover grayscale" src={Efcct1} alt="EFCCT" />
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="border-t-4 border-b-4 border-black py-16 mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black">I am an avid<br/>music enthusiast.</h2>
          </div>
          <div className="flex flex-row gap-8 items-center justify-end">
            <img src={Guitar} alt="Guitar" className="w-20 h-20 md:w-32 md:h-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src={Keyboard} alt="Keyboard" className="w-20 h-20 md:w-32 md:h-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src={Drums} alt="Drums" className="w-20 h-20 md:w-32 md:h-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About;
