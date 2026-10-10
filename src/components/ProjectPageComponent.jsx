import React from 'react';
import { motion } from 'framer-motion';
import EnsembleLearningPreview1 from '../assets/pictures/ensemble_learning.png';
import CapsNet from '../assets/pictures/capsnet.png';
import CapsNet2 from '../assets/pictures/capsnet2.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function ProjectPageComponent() {
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
          <div className="lg:w-1/2 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <span className="text-xl font-bold uppercase tracking-widest text-gray-500">6 April 2024</span>
                <span className="px-4 py-2 bg-black text-white text-lg font-black uppercase tracking-widest">Journal</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black mb-12 leading-[0.9]">
                Deep Capsule Neural Network for Diabetic Retinopathy
              </h2>
              <p className="text-2xl text-black font-medium leading-relaxed mb-12">
                This is a project based on Deep Capsule Neural Networks complemented by Pruning that classifies a fundus image into one of the seven stages of Diabetic Retinopathy - a leading cause of blindness among patients with chronic diabetes. Our model successfully classifies the input images with a high accuracy of more than 98% even with minimal training without stressing resources such as GPUs and TPUs. Key features of this method include redesigning the "Routing with Attention" method to prevent unnecessary connections between different neurons and capsules. To further prevent overfitting and underfitting which can arise from the dropout layer during training, pruning by weight and pruning by nodes has been implemented.
              </p>
            </div>
            <a 
              href="./projects" 
              className="inline-block px-8 py-4 border-4 border-black text-black text-2xl font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors w-fit"
            >
              Under Review
            </a>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-8 order-1 lg:order-2">
            <img src={CapsNet} className="w-full h-auto border-2 border-black object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="CapsNet Architecture Preview 1"/>
            <img src={CapsNet2} className="w-full h-auto border-2 border-black object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="CapsNet Architecture Preview 2"/>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="border-t-4 border-black py-16"
      >
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 order-1">
            <img src={EnsembleLearningPreview1} className="w-full h-auto border-2 border-black object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Ensemble Learning Preview"/>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-between order-2">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <span className="text-xl font-bold uppercase tracking-widest text-gray-500">3 January 2024</span>
                <span className="px-4 py-2 bg-black text-white text-lg font-black uppercase tracking-widest">Research Paper</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black mb-12 leading-[0.9]">
                Ensemble Learning Model for Gender Recognition
              </h2>
              <p className="text-2xl text-black font-medium leading-relaxed mb-12">
                Implemented an ensemble learning model combining various machine learning algorithms to classify gender into 'male' or 'female' based on voice data from pre-processed wave signals after extensive research.
              </p>
            </div>
            <a 
              href="https://ieeexplore.ieee.org/document/10370768" 
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 border-4 border-black text-black text-2xl font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors w-fit"
            >
              IEEE Xplore
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectPageComponent;
