import React from 'react';
import { motion } from 'framer-motion';
import Blog1Preview from '../assets/pictures/blog1-preview.webp';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function BlogPageComponent() {
  return (
    <div className="mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="border-t-4 border-black py-16"
      >
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <img src={Blog1Preview} className="w-full h-auto border-2 border-black object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Blog Preview"/>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <span className="text-xl font-bold uppercase tracking-widest text-gray-500">7 October 2021</span>
                <span className="px-4 py-2 bg-black text-white text-lg font-black uppercase tracking-widest">Design</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-12 leading-[0.9]">
                The 'design' in finding a problem and choosing the team
              </h2>
              <p className="text-2xl text-black font-medium leading-relaxed mb-12">
                This blog is especially for college students looking to venture into entrepreneurship or consumer-centred design and innovation or to even solve a problem as a user.
              </p>
            </div>
            <a 
              href="https://medium.com/design-bootcamp/the-design-in-finding-a-problem-and-choosing-the-team-2f2d17255f05" 
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 border-4 border-black text-black text-2xl font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors w-fit"
            >
              Read on Medium
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default BlogPageComponent;
