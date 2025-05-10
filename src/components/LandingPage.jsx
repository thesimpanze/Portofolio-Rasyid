import { motion, useScroll, useTransform } from "motion/react";
import Typewriter from "typewriter-effect";

const LandingPage = ()=>{
    const {scrollY} = useScroll();
    const titleY = useTransform(scrollY, [0, 460], [0, -150]);
return(
    <motion.div style={{y: titleY}} className="absolute flex text-white h-screen items-center px-8 justify-center gap-10 bg-black/0 backdrop-blur-md">
          <div className="flex flex-col text-7xl font-semibold gap-1 w-[70%] ">
            <span>Hi there👋</span>
            <div className="flex gap-4">
              <p>I'm</p>
              <Typewriter
                options={{
                  strings: ["Rasyid Nuruddin.", "a Frontend Developer.", "a UI/UX Designer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-gray-400 text-lg font-normal font-jakarta w-3/4">I am a human with a passion for creating beautiful and functional user interfaces. I have experience in frontend tools like reactJS. </p>
          </div>
          <motion.div  whileHover={{scale: 1.05, borderRadius: ['80%', '50%', '30%', '10%', '2%']}} animate={{ borderRadius: ['10%','30%','50%','60%','90%','100%'] }} whileTap={{scale: 0.8}} transition={{ease: 'easeInOut'}} className="relative bg-red-500 w-60 h-60 rounded-full overflow-hidden shadow-[0_0_30px_rgba(200,170,142,0.89)] ">
            <motion.img  src="../public/Rasyid.jpg" alt="Rasyid" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
)
}
export default LandingPage