import classes from "./HomeHero.module.css";
import { motion } from "framer-motion";
import Button from "../../Components/Button/Button";

const HomeHero = () => {
  return (
    <section className={classes.container} id="home">
      <h1>
        Integrated Certainty. <br />
        De-Risked Capital. <span>Proven Execution</span>
      </h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        Strathmore Energy is a leading indigenous energy solutions company
        dedicated to maximizing the value and resilience of oil and gas assets
        in Nigeria. We operate at the critical intersection of Technical
        Excellence, Financial Structuring, and Operational Assurance. By
        integrating critical services from risk management and essential marine
        logistics to advanced capital readiness advisory, we provide a unified
        platform that secures investment and guarantees reliable project
        execution for our partners. We don't just solve problems; we deliver
        integrated certainty in a complex energy landscape.
      </motion.p>

      <motion.div
        className={classes.buttonSection}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
      >
        <Button
          onClick={() => {
            document.getElementById("what-we-do")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Learn more
        </Button>
      </motion.div>

      <div className={classes.overlay}></div>
    </section>
  );
};

export default HomeHero;
