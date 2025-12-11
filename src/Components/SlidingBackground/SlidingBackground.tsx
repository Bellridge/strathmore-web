import React from "react";
import { motion } from "framer-motion";

interface Props {
  prev: string;
  current: string;
  direction: number;
}

const SlidingBackground: React.FC<Props> = ({ prev, current, direction }) => {
  return (
    <>
      <motion.div
        key={prev}
        initial={{ x: 0 }}
        animate={{ x: direction * -100 + "%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${prev})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <motion.div
        key={current}
        initial={{ x: direction * 100 + "%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${current})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </>
  );
};

export default SlidingBackground;
