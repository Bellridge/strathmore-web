"use client";

import { useState, useEffect, useRef } from "react";
import SlidingBackground from "../../Components/SlidingBackground/SlidingBackground";
import classes from "./HomeHero.module.css";
import { motion } from "framer-motion";
import Button from "../../Components/Button/Button";

const images = [
  "https://res.cloudinary.com/dmbqk1irb/image/upload/v1765443555/environmental-pollution-industry-exterior_1_p1978z.jpg",
  "https://res.cloudinary.com/dmbqk1irb/image/upload/v1765443555/environmental-pollution-industry-exterior-daylight_1_weaw04.jpg",
  "https://res.cloudinary.com/dmbqk1irb/image/upload/v1765370625/maksym-kaharlytskyi-u13zBF4r56A-unsplash_dbajsj.jpg",
];

const stages = ["Feasibility", "Structuring", "Execution", "First Oil"];

const HomeHero = () => {
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(images.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      prevIndex.current = index;
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className={classes.container} id="home">
      <SlidingBackground
        prev={images[prevIndex.current]}
        current={images[index]}
        direction={1}
      />
      <div className={classes.overlay} />

      <div className={`container ${classes.inner}`}>
        <span className={`eyebrow ${classes.eyebrow}`}>
          Strathmore Energy · Africa
        </span>

        <h1>
          Transforming Africa&apos;s <span>Energy</span> Future
        </h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Capital de-risking, operational continuity, and local excellence —
          integrated for Africa&apos;s energy sector.
        </motion.p>

        <motion.div
          className={classes.buttonSection}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Button
            onClick={() =>
              document.getElementById("what-we-do")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Explore our solutions
          </Button>
        </motion.div>

        <motion.div
          className={classes.stack}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          aria-hidden="true"
        >
          <span className={classes.stackLabel}>The capital stack</span>
          <div className={classes.stackTrack}>
            {stages.map((stage, i) => (
              <div
                className={`${classes.stackStage} ${
                  i === stages.length - 1 ? classes.stackFinal : ""
                }`}
                key={stage}
              >
                <span className={classes.stackName}>{stage}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
