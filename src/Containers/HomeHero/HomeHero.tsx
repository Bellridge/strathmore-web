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

const HomeHero = () => {
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      prevIndex.current = index;
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  const direction = 1;

  return (
    <section className={classes.container} id="home">
      <SlidingBackground
        prev={images[prevIndex.current]}
        current={images[index]}
        direction={direction}
      />

      <h1>
        Powering Nigeria's <br /> <span>Energy</span> Future
      </h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Integrated Technical, Commercial and Financial solutions for a
        sustainable and prosperous energy sector.
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
          Explore our Solutions
        </Button>
      </motion.div>

      <div className={classes.overlay}></div>
    </section>
  );
};

export default HomeHero;
