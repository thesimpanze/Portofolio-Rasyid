import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Typewriter from "typewriter-effect";
import { motion } from "motion/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black font-dmsans">
      <Navbar />
      <div>
        <div className="flex text-white h-screen items-center px-10 justify-center gap-11">
          <div className="flex flex-col text-6xl font-semibold gap-1 w-[65%] ">
            <span>Hi there👋</span>
            <div className="flex gap-4">
              <p>I'm</p>
              <Typewriter
                options={{
                  strings: ["Rasyid Nuruddin. ", "a Frontend Developer.", "a UI/UX Designer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-gray-400 text-lg font-normal font-jakarta w-3/4">I am a Frontend Developer with a passion for creating beautiful and functional user interfaces. I have experience in HTML, CSS, JavaScript, and React. </p>
          </div>
          <div className="relative bg-red-500 w-60 h-80 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(200,170,142,0.89)] hover:shadow-[0_0_40px_rgb(200,170,142)] hover:scale-105 transition ease-in-out duration-200 delay-150">
            <img src="../public/Rasyid.jpg" alt="Rasyid" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden whitespace-nowrap bg-black ">
          <motion.div
            className="inline-block text-white text-8xl font-bold uppercase"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 90,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="mr-3">FRONTEND</span>
            <span className="mr-3">WEB</span>
            <span className="mr-3">DEVELOPER</span>
            <span className="mr-3">FRONTEND</span>
            <span className="mr-3">WEB</span>
            <span className="mr-3">DEVELOPER</span>
            <span className="mr-3">FRONTEND</span>
            <span className="mr-3">WEB</span>
            <span className="mr-3">DEVELOPER</span>
          </motion.div>
        </div>
        <br />
        <div className="h-screen flex justify-center  ">
          <div className="w-[65%] px-3">
            <h1 className="font-medium font-jakarta text-2xl text-white">About me.</h1>
            <p className="text-gray-400">Saya mahasiswa teknik informatika dari politeknik elektronika negeri surabaya, a junior frontend developer using React js, laravel, tailwind, html, css, javascript as a technologies and language</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
