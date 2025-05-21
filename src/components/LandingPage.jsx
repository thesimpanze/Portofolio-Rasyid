import { easeInOut, motion, useScroll, useTransform } from "motion/react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import RasyidImg from "../assets/Rasyid-2.jpg";

const LandingPage = () => {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 460], [0, -200]);

  return (
    <motion.div style={{ y: titleY }} className="absolute flex flex-col-reverse md:flex-row items-center justify-center gap-10 text-white h-screen px-6 md:px-12 bg-black/0 md:backdrop-blur-md backdrop-blur-sm z-10 overflow-hidden">
      <div className="flex flex-col text-4xl md:text-7xl font-semibold gap-3 w-full md:w-[70%] text-center md:text-left">
        <div className="relative overflow-hidden">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
          >
            Hi there👋
          </motion.div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex justify-center md:justify-start gap-2 md:gap-4"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.35, ease: "easeInOut" }}
          >
            <p>I'm</p>
            <Typewriter
              options={{
                strings: ["Rasyid Nuruddin.", "a Frontend Dev.", "a UI/UX Designer."],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.65, ease: "easeInOut" }}
          >
            <p className="text-gray-400 text-sm md:text-lg font-normal font-jakarta w-full md:w-3/4 mt-3">
              I am a human with a passion for creating beautiful and functional user interfaces. I have experience in frontend tools like ReactJS.
            </p>
            <span className="text-white text-lg md:text-xl flex justify-center md:justify-start gap-4 pt-3">
              <a href="https://github.com/thesimpanze" target="_blank">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/rasyid-nuruddin" target="_blank">
                <FaLinkedin />
              </a>
            </span>
          </motion.div>
        </div>
      </div>

      {/* Image */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 1.65, ease: "easeInOut" }}>
        <motion.div
          whileHover={{ scale: 1.05, borderRadius: ["80%", "50%", "30%", "10%", "2%"] }}
          animate={{ borderRadius: ["10%", "30%", "50%", "60%", "90%", "100%"] }}
          whileTap={{ scale: 0.85 }}
          transition={{ ease: "easeInOut" }}
          className="relative w-44 h-44 md:w-60 md:h-60 overflow-hidden shadow-[0_0_30px_rgba(200,170,142,0.89)]"
        >
          <motion.img src={RasyidImg} alt="Rasyid" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
