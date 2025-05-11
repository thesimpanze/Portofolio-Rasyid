import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import seenauImage from "../assets/seenau.png";
import kiyatamaImage from "../assets/Kiyatama.png";
import diravaImage from "../assets/Dirava.png";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Card = ({ image }) => {
  const ref = useRef(null);
  const imageMap = {
    "../assets/seenau.png": seenauImage,
    "../assets/Kiyatama.png": kiyatamaImage,
    "../assets/Dirava.png": diravaImage,
  };
  const imgSrc = imageMap[image] || image;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  console.log(image);
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative rounded  border border-gray-400 p-2 "
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="overflow-hidden   relative  bg-white shadow-lg rounded-sm"
      >
        <img src={imgSrc} alt=""  className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default Card;
