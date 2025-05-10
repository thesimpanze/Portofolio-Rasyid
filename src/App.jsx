import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import { motion } from "motion/react";
import Lenis from "lenis";
import LandingPage from "./components/LandingPage";
import About from "./components/About";


function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="bg-black font-dmsans">
      <Navbar />
      <LandingPage />
      <div className="h-screen flex justify-center items-center">
        <h1 className="font-jakarta font-black text-white/60 text-9xl tracking-widest">PORTOFOLIO</h1>
      </div>
      <div>
        <div className="relative overflow-hidden whitespace-nowrap bg-black ">
          <motion.div
            className="inline-block text-white text-7xl font-bold uppercase"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 70,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="mr-4">FRONTEND</span>
            <span className="mr-4">WEB</span>
            <span className="mr-4">DEVELOPER</span>
            <span className="mr-4">FRONTEND</span>
            <span className="mr-4">WEB</span>
            <span className="mr-4">DEVELOPER</span>
            <span className="mr-4">FRONTEND</span>
            <span className="mr-4">WEB</span>
            <span className="mr-4">DEVELOPER</span>
          </motion.div>
        </div>
        <br />
        <h1 className="text-center text-white mt-10 text-2xl mb-6 font-jakarta">About, Education, Skills.</h1>
        <div className="flex items-center justify-center gap-10 px-10 h-screen">
          <div className=" w-[50%] outline outline-1 outline-white py-2 px-4 rounded">
          <About />
          </div>
          <div className=" px-3  w-[50%] outline outline-1 outline-white py-2 rounded">
            <h1 className="font-medium font-jakarta text-2xl text-white">Skills.</h1>
            <p className="text-gray-400">React JS, Tailwind CSS, HTML, CSS, Javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
