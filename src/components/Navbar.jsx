import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LinkedIn from '../assets/logos/linkedin.svg';
import GitHub from '../assets/logos/github.svg';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <nav className="fixed w-full z-50 bg-white border-b-2 border-black">
      <div className="mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl font-black tracking-tighter uppercase text-black">
          Anirudh.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <Link to="/projects" className="text-lg font-bold uppercase tracking-tight text-black hover:bg-black hover:text-white px-2 py-1 transition-colors">Projects</Link>
          <Link to="/blog" className="text-lg font-bold uppercase tracking-tight text-black hover:bg-black hover:text-white px-2 py-1 transition-colors">Blog</Link>
          <Link to="/about" className="text-lg font-bold uppercase tracking-tight text-black hover:bg-black hover:text-white px-2 py-1 transition-colors">About</Link>
          <div className="h-6 w-0.5 bg-black mx-2" />
          <a href="https://linkedin.com/in/anirudh-bukka/" target="_blank" rel="noreferrer" className="text-black hover:invert transition-colors">
            <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://github.com/anirudh-bukka" target="_blank" rel="noreferrer" className="text-black hover:invert transition-colors">
            <img src={GitHub} alt="GitHub" className="w-6 h-6" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-black border-2 border-black hover:bg-black hover:text-white transition-colors" onClick={toggleNav}>
          {isNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white border-b-2 border-black flex flex-col overflow-hidden"
          >
            <Link to="/projects" onClick={toggleNav} className="text-2xl font-bold uppercase tracking-tight text-black p-6 border-b-2 border-black hover:bg-black hover:text-white transition-colors">Projects</Link>
            <Link to="/blog" onClick={toggleNav} className="text-2xl font-bold uppercase tracking-tight text-black p-6 border-b-2 border-black hover:bg-black hover:text-white transition-colors">Blog</Link>
            <Link to="/about" onClick={toggleNav} className="text-2xl font-bold uppercase tracking-tight text-black p-6 border-b-2 border-black hover:bg-black hover:text-white transition-colors">About</Link>
            <div className="flex space-x-8 p-6">
              <a href="https://linkedin.com/in/anirudh-bukka/" target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="https://github.com/anirudh-bukka" target="_blank" rel="noreferrer">
                <img src={GitHub} alt="GitHub" className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
