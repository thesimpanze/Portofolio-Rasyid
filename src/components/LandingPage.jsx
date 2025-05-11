import { easeInOut, motion, useScroll, useTransform } from "motion/react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const LandingPage = () => {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 460], [0, -150]);
  return (
    <motion.div style={{ y: titleY }} className="absolute flex text-white h-screen items-center px-8 justify-center gap-10 bg-black/0 backdrop-blur-md z-10">
      <div className="flex flex-col text-7xl font-semibold gap-1 w-[70%] ">
        <div className="relative overflow-hidden">
          <motion.div className="" variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}>
            Hi there👋
          </motion.div>
        </div>
        <div className=" relative overflow-hidden">
          <motion.div className="flex gap-4" variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 1.35, ease: "easeInOut" }}>
            <p>I'm</p>
            <Typewriter
              options={{
                strings: ["Rasyid Nuruddin.", "a Frontend Developer.", "a UI/UX Designer."],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>
        </div>
        <div className="relative overflow-hidden">
          <motion.div className="" variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 1.65, ease: "easeInOut" }}>
            <p className="text-gray-400 text-lg font-normal font-jakarta w-3/4">I am a human with a passion for creating beautiful and functional user interfaces. I have experience in frontend tools like reactJS. </p>
            <span className="text-white text-xl pl-1 flex gap-3 pt-2">
              <a href="https://github.com/thesimpanze" target="_blank">
                <FaGithub />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
            </span>
          </motion.div>
        </div>
      </div>
      <motion.div className=""  initial={{opacity: 0}} animate={{opacity: 1 }} transition={{ duration: 0.7, delay: 1.65, ease: "easeInOut" }}>
        <motion.div
          whileHover={{ scale: 1.05, borderRadius: ["80%", "50%", "30%", "10%", "2%"] }}
          
          animate={{ borderRadius: ["10%", "30%", "50%", "60%", "90%", "100%"] }}
          whileTap={{ scale: 0.85 }}
          transition={{ ease: "easeInOut" }}
          className="relative bg-red-500 w-60 h-60  overflow-hidden shadow-[0_0_30px_rgba(200,170,142,0.89)] "
        >
          <motion.img src="../public/Rasyid.jpg" alt="Rasyid" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default LandingPage;
