"use client";

import { useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, motion } from "framer-motion";
import { useRef } from "react";
import { wrap } from "@motionone/utils";

export default function ParallaxText({ children, baseVelocity = 100, direction }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });

  const skewVelocity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 30,
  });

  const skewVelocityFactor = useTransform(skewVelocity, [-1000, 1000], [-30, 30]);

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div
      initial={{ x: direction, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          delay: 2,
          duration: 1,
          easings: "ease",
        },
      }}
      className="m-0 flex flex-nowrap overflow-hidden  "
    >
      <motion.div style={{ x }} className="flex gap-0 font-black font-dmsans whitespace-nowrap text-2xl  uppercase md:text-8xl text-white">
        {[...Array(4)].map((_, i) => (
          <motion.span key={i} style={{ skew: skewVelocityFactor }} className="mr-10 block">
            {children}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
