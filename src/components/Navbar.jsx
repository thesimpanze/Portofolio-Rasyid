import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      
      if (currentScrollY > lastScrollY && currentScrollY > 0) {
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
        <div className="bg-gray-500/0 outline outline-1 outline-white/15 text-gray-300 backdrop-blur-sm rounded-full font-light text-lg mt-5 px-8 py-2 flex justify-center items-center gap-8 font-jakarta shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:scale-105 transition-all duration-200 ease-in-out delay-100">
          <a href="#home" className="hover:underline">
            Home
          </a>
          
          <a href="#about" className="hover:underline">
            About
            </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
