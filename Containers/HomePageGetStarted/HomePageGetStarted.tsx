"use client";

import { motion, Variants } from "framer-motion";
import Button from "../../Components/Button/Button";
import classes from "./HomePageGetStarted.module.css";

const contactDetails = [
  {
    label: "Email",
    value: "info@strathmoreservice.com",
    href: "mailto:info@strathmoreservice.com",
  },
  {
    label: "Phone",
    value: "+234 707 576 0061",
    href: "tel:+2347075760061",
  },
  {
    label: "Office",
    value:
      "NSE Building, 1 Engineering Close, off Idowu Taylor Street, Victoria Island, Lagos",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HomePageGetStarted = () => {
  return (
    <section
      className={classes.section}
      id="contact-us"
      data-section-id="contact-us"
    >
      <motion.div
        className={`container ${classes.container}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <motion.span className={`eyebrow ${classes.eyebrow}`} variants={fadeUp}>
          Partner with us
        </motion.span>

        <motion.h2 className={classes.heading} variants={fadeUp}>
          Stop managing risk in isolation. Demand integrated certainty.
        </motion.h2>

        <motion.p className={classes.lead} variants={fadeUp}>
          Strathmore supports energy projects across the African continent
          — from early-stage feasibility through production and beyond.
          Let&apos;s discuss how our unified approach can redefine the
          success and profitability of your next venture.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button href="mailto:info@strathmoreservice.com">
            Send us an email
          </Button>
        </motion.div>

        <motion.dl className={classes.contact} variants={fadeUp}>
          {contactDetails.map((item) => (
            <div className={classes.contactRow} key={item.label}>
              <dt>{item.label}</dt>
              <dd>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
};

export default HomePageGetStarted;
