import React from "react";
import { motion } from "framer-motion";

interface CustomAnimatePresenceProps {
  image: string;
}

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const CustomAnimatePresence: React.FC<CustomAnimatePresenceProps> = ({
  image,
}) => {
  return (
    <motion.div
      key={image}
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }}
    />
  );
};

export default CustomAnimatePresence;
