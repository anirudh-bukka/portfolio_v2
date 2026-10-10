import React from "react";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";
// import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

function App() {
  useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <ReactLenis root>
      <div className="flex flex-col justify-between min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans">
        <Navbar className="h-full w-full" />
        <div className="w-full flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer className="h-full w-full" />
      </div>
    </ReactLenis>
  );
}

export default App;

// const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true)
//     setTimeout(() => {
//       setLoading(false)
//     }, 3000)
//   }, []);
// {loading ? (<ClimbingBoxLoader size={30} color="#007aff" loading={loading}/> ) : 
//       (
//       <Navbar />
//       <div className="w-full">
//         <Routes>
//           {/* <Route path="/"><HomePage /></Route>
//           <Route path="/projects"><HomePage /></Route>
//           <Route path="/"><HomePage /></Route>
//           <Route path="/"><HomePage /></Route> */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//       <Footer />
//         )
//       }
