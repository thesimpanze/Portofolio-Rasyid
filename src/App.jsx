import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import { motion } from "motion/react";
import Lenis from "lenis";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import SkillSet from "./components/SkillSet";
import GitHubCalendar from "react-github-calendar";
import ParallaxText from "./components/ParallaxText";
import CardList from "./components/CardList";
import Contact from "./components/Contact";

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
    <div className="bg-black font-dmsans overflow-hidden ">
      {/* <div className="fixed h-screen font-dmsans text-white bg-black flex justify-center items-center z-50 w-screen font-bold text-2xl">Under Maintenance Der!</div> */}
      <Navbar />
      <LandingPage />
      <div className="h-[95vh] flex justify-center items-center" id="home">
        <h1 className="font-jakarta font-black text-white/60 md:text-9xl text-6xl tracking-widest">PORTOFOLIO</h1>
      </div>
      <div>
        <div className="-z-0 overflow-hidden">
          <ParallaxText direction={500} baseVelocity={-1}>
            FRONTEND WEB DEVELOPER
          </ParallaxText>
        </div>

        <div className="flex flex-col items-center justify-center gap-7 px-10 ">
          <div className=" md:w-[60%]  py-2 px-4  " id="about">
            <About />
          </div>
          <motion.div drag whileHover={{ rotate: 3, scale: 1.05 }} className="bg-[#0d1117] py-3 px-4 text-white rounded-lg flex justify-center items-center shadow-[0_0_40px_rgb(76_101_137)] ">
            <GitHubCalendar colorScheme="dark" username="thesimpanze" />
          </motion.div>
          <div className=" px-3  w-[60%]  py-2 rounded flex flex-col gap-4">
            <h1 className="font-medium font-jakarta text-2xl text-white">Skills.</h1>
            <SkillSet />
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col items-center justify-center mt-16">
        <div className="flex justify-center ">
          <CardList />
        </div>
      </div>
      <div className="flex justify-center px-10 mt-16 md:h-[80vh] " id="contact">
        <Contact />
      </div>
      <div className="">
        <div className="flex justify-center items-center text-white/50 font-jakarta text-sm md:text-base py-4">
          <p>© 2025 Rasyid Nuruddin. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
