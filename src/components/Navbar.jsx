import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import GlassSurface from "./effects/GlassSurface";


const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setShowNavbar(false);
      } else {
      
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="w-full">
      <motion.div
        className="fixed top-0 w-full flex justify-center -translate-x-1/2 z-40"
        animate={{
          y: showNavbar ? 0 : -100,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <GlassSurface width={200} height={50} borderRadius={24} className="text-white font-light text-lg gap-8 font-jakarta mt-8">
          {/* <div className=" text-white font-light text-lg mt-5 flex justify-center items-center gap-8 font-jakarta "> */}
            <a href="#home" className="hover:underline">
              Home
            </a>

            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          {/* </div> */}
        </GlassSurface>
      </motion.div>
    </div>
  );
};

export default Navbar;
