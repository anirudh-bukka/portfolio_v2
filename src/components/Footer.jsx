import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-black text-white mt-12 border-t-4 border-black">
      <div className="mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">Anirudh.</h3>
            <p className="text-xl font-bold uppercase tracking-widest text-gray-400">Software Engineer</p>
          </div>
          <p className="text-sm font-bold uppercase tracking-widest mt-12 text-gray-500">© {new Date().getFullYear()} Anirudh Bukka</p>
        </div>
        
        <div className="flex flex-col items-start md:items-end justify-between">
          <div className="flex flex-col items-start md:items-end gap-2">
            <a 
              href="mailto:anirudh4dev@gmail.com" 
              className="text-2xl md:text-3xl font-bold uppercase tracking-tight hover:text-gray-300 transition-colors"
            >
              anirudh4dev@gmail.com
            </a>
            <a 
              href="https://drive.google.com/file/d/1Ir7K52OVyoJ9X35-FV_B0BhcIFUySKas/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-2xl md:text-3xl font-bold uppercase tracking-tight hover:text-gray-300 transition-colors"
            >
              Curriculum Vitae
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
