import React from 'react';
import { motion } from 'framer-motion';
import BlogPageComponent from '../components/BlogPageComponent';

function Blog() {
  return (
    <div className="pt-32 min-h-screen px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-24"
      >
        <h1 className="text-6xl md:text-9xl font-black text-black tracking-tighter uppercase mb-8">Blog.</h1>
        <p className="text-2xl md:text-4xl text-black font-bold uppercase tracking-tight leading-snug">WRITINGS ON DESIGN, TECH, AND EVERYTHING IN BETWEEN.</p>
      </motion.div>
      <BlogPageComponent />
    </div>
  )
}

export default Blog;