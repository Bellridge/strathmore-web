"use client";

import { motion, Variants } from "framer-motion";
import { LockOpen, ShieldCheck, BadgeCheck } from "lucide-react";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import classes from "./MissionSection.module.css";

const assurances = [
  {
    icon: LockOpen,
    title: "Capital De-risking",
    description: "Converting uncertainties into bankable realities.",
  },
  {
    icon: ShieldCheck,
    title: "Operational Continuity",
    description:
      "Providing an impenetrable logistics framework across land and sea.",
  },
  {
    icon: BadgeCheck,
    title: "Local Excellence",
    description:
      "Championing world-class standards delivered by expert African talent.",
  },
];

const whyStrathmore = [
  {
    title: "Unlock Capital",
    description:
      "We transform asset potential into bankable, fully de-risked financial models — accelerating investor confidence and compressing funding timelines.",
  },
  {
    title: "Guarantee Continuity",
    description:
      "We establish a supply chain and logistics fortress that eliminates operational downtime and shields project schedules from disruption.",
  },
  {
    title: "Set the Standard",
    description:
      "We leverage the depth of African expertise to deliver projects with uncompromising global quality and regulatory compliance.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MissionSection = () => {
  return (
    <section
      className={classes.section}
      id="our-mission"
      data-section-id="our-mission"
    >
      <motion.div
        className={`container ${classes.container}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={fadeUp}>
          <SectionHeader
            eyebrow="Who we are"
            title="Our mission: to transform Africa's energy future."
          />
        </motion.div>

        <motion.p className={classes.lead} variants={fadeUp}>
          Strathmore is the trusted partner enabling sustainable growth
          across Africa&apos;s energy sector. We build long-term value,
          ensuring every project is optimised for efficiency, compliance,
          and profitability. Our approach rests on three core assurances:
        </motion.p>

        <motion.ul className={classes.assurances} variants={containerVariants}>
          {assurances.map((item) => (
            <motion.li
              key={item.title}
              className={classes.assurance}
              variants={fadeUp}
            >
              <item.icon
                className={classes.assuranceIcon}
                size={20}
                strokeWidth={1.75}
              />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <div className={classes.divider} aria-hidden="true" />

        <motion.span className="eyebrow" variants={fadeUp}>
          Why Strathmore
        </motion.span>

        <motion.div className={classes.whyGrid} variants={containerVariants}>
          {whyStrathmore.map((item) => (
            <motion.div
              key={item.title}
              className={classes.whyCard}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionSection;
