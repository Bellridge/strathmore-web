"use client";

import { motion, Variants } from "framer-motion";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import classes from "./HomeServicesHeader.module.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const HomeServicesHeader = () => {
  return (
    <motion.div
      className={classes.container}
      id="what-we-do"
      data-section-id="what-we-do"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={fadeUp}>
        <SectionHeader eyebrow="What we do" title="Two disciplines, one integrated team." />
      </motion.div>

      <motion.p variants={fadeUp}>
        Financial structuring and operational assurance, extended by the
        specialist logistics, supply, and technical capabilities that keep
        field operations running.
      </motion.p>
    </motion.div>
  );
};

export default HomeServicesHeader;
