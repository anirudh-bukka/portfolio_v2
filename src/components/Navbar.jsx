import React from 'react';
import { BrowserRouter, Route, Routes, Link, useMatch, useResolvedPath } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Blog from '../pages/Blog';


import { useState } from "react"; // import state

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="lg:max-w-full p-1 mt-[1px] flex flex-row justify-between lg:max-h-32 lg:min-h-32 z-50 bg-white bg-opacity-90 sticky top-0">
      <div className="lg:ml-32 lg:mt-8 lg:mb-8 h-max">
        <Link to="/" className='font-sans text-5xl'>Anirudh</Link>
      </div>
      <div>
        <section className="MOBILE-MENU flex lg:hidden ml-32 mt-4 h-max">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/projects" className='font-sans text-xl'>Projects</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/blog" className='font-sans text-xl'>Blog</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="about" className='font-sans text-xl'>About</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU space-x-8 lg:w-[30%] lg:mr-32 lg:mt-10 lg:mb-10 h-max max-sm:hidden flex text-center lg:flex-row justify-between">
        {/* <div className="lg:w-[30%] border-2 lg:mr-32 lg:mt-10 lg:mb-10 h-max max-sm:hidden flex text-center lg:flex-row justify-between"> */}
          <Link to="/projects" className='font-sans text-xl'>Projects</Link>
          <Link to="/blog" className='font-sans text-xl'>Blog</Link>
          <Link to="about" className='font-sans text-xl'>About</Link>
         {/* <Link to="about" className='bg-white hover:bg-[#23a094] hover:text-white lg:max-h-12 hover:outline-black p-2 rounded-lg hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>{<About />}</Link> */}
        </ul>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

// function Navbar() {
//   return (   
//     <div className="border-b-2 lg:max-w-full p-1 mt-[1px] flex flex-row justify-between lg:max-h-32 lg:min-h-32 z-50 bg-white bg-opacity-90 sticky top-0">  
      // <div className="border-2 lg:ml-32 lg:mt-8 lg:mb-8 h-max">
      //   <Link to="/" className='font-sans text-5xl'>Anirudh</Link>
      // </div>
//       <div className="lg:w-[30%] border-2 lg:mr-32 lg:mt-10 lg:mb-10 h-max max-sm:hidden flex text-center lg:flex-row justify-between">
//         <Link to="/projects" className='font-sans text-xl'>Projects</Link>
//         <Link to="/blog" className='font-sans text-xl'>Blog</Link>
//         <Link to="about" className='font-sans text-xl'>About</Link>
//         {/* <Link to="about" className='bg-white hover:bg-[#23a094] hover:text-white lg:max-h-12 hover:outline-black p-2 rounded-lg hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>{<About />}</Link> */}
//       </div>
//       <section className="MOBILE-MENU flex lg:hidden">
//           <div
//             className="HAMBURGER-ICON space-y-2"
//           >
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//           </div>

//           <div>
//             <div
//               className="absolute top-0 right-0 px-8 py-8"
//             >
//               <svg
//                 className="h-8 w-8 text-gray-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="18" y1="6" x2="6" y2="18" />
//                 <line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//             </div>
//             <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
//               <li className="border-b border-gray-400 my-8 uppercase">
//                 <a href="/about">About</a>
//               </li>
//               <li className="border-b border-gray-400 my-8 uppercase">
//                 <a href="/portfolio">Portfolio</a>
//               </li>
//               <li className="border-b border-gray-400 my-8 uppercase">
//                 <a href="/contact">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </section>
      
//         {/* <div className="flex flex-row justify-between lg:p-2">
//             <button className='outline p-2 bg-black text-white hover:bg-cyan-400 hover:text-black rounded-lg hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>Dark Mode</button>
//         </div> */}
//     </div>
//   )
// }

// // function CustomLink({ to, children, ...props }) {
// //     const resolvedPath = useResolvedPath(to)
// //     const isActive = useMatch({ path: resolvedPath.pathname, end: true })

// //     return (
// //         <li className={isActive ? "active" : ""}>
// //             <Link to={to} {...props}>
// //                 {children}
// //             </Link>
// //         </li>
// //     )
// // }

// export default Navbar;