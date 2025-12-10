import classes from "./ServicesHero.module.css";
import { motion } from "framer-motion";
import Button from "../../Components/Button/Button";

const ServicesHero = () => {
  return (
    <section className={classes.container}>
      <h1>
        <span> Integrated</span>
        Core Services
      </h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        Our competitive edge is the elimination of project friction. <br /> We
        don't hand off problems; we deliver integrated solutions that maximize
        value across the board.
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
          View our Services
        </Button>
      </motion.div>

      <div className={classes.overlay}></div>
    </section>
  );
};

export default ServicesHero;
