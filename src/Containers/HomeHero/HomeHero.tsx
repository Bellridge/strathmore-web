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
        Strathmore Energy is not a typical advisory firm. We are the architects
        of success for Nigeria’s oil and gas assets. Operating at the critical
        nexus of technical depth, financial mastery, and operational grit, we
        solve the industry's most complex integration challenges. We don't just
        bridge gaps; we merge them, providing a unified, sovereign solution that
        secures investment and guarantees project delivery from the first
        funding commitment to First Oil flow. Partnering with Strathmore is
        choosing unparalleled assurance.
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
    </section>
  );
};

export default HomeHero;
