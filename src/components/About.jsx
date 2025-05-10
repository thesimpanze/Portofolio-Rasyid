import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ScrollRevealText = ({ children, className = "" }) => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end center"],
  });

  const textColor = useTransform(scrollYProgress, [0, 1], ["rgb(17, 20, 32)", "rgb(255, 255, 255)"]);

  return (
    <motion.p ref={textRef} style={{ color: textColor }} className={className}>
      {children}
    </motion.p>
  );
};
const About = () => {
  return (
    <>
      <h1 className="font-medium font-jakarta text-2xl text-white">About me.</h1>
      <ScrollRevealText className="mb-2">
        Saya mahasiswa teknik informatika dari politeknik elektronika negeri surabaya, a junior frontend developer using React js, laravel, tailwind, html, css, javascript as a technologies and language
      </ScrollRevealText>

      <h1 className="font-medium font-jakarta text-2xl text-white">Education.</h1>
      <ScrollRevealText className="mb-2">2023 - present: collage student of Informatic Engineering at Electronic Engineering Polytechnic Institute of Surabaya</ScrollRevealText>
    </>
  );
};
export default About;
