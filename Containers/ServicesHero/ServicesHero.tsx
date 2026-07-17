"use client";

import classes from "./ServicesHero.module.css";
import { motion } from "framer-motion";
import Button from "../../Components/Button/Button";

const ServicesHero = () => {
  return (
    <section className={classes.container}>
      <div className={classes.overlay}></div>

      <div className={`container ${classes.inner}`}>
        <span className={`eyebrow ${classes.eyebrow}`}>
          Our competitive edge
        </span>

        <h1>
          Integrated <span>Core Services</span>
        </h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          The elimination of project friction. We don&apos;t hand off
          problems — we deliver integrated solutions that maximise value
          across the board.
        </motion.p>

        <motion.div
          className={classes.buttonSection}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        >
          <Button
            onClick={() => {
              document.getElementById("services")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            View our services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
