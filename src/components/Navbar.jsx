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
        className="fixed top-0 w-full flex justify-center -translate-x-1/2 z-40 left-1/2"
      >
        <GlassSurface width={'fit'} height={'fit'} borderRadius={24} className="text-white font-light text-lg gap-8 font-jakarta mt-8 p-3 ">
            <a href="#home" className="hover:underline">
              Home
            </a>

            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
        </GlassSurface>
      </motion.div>
    </div>
  );
};

export default Navbar;
