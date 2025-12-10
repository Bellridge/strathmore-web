import { motion } from "framer-motion";
import { BadgeCheck, LockOpen, ShieldCheck } from "lucide-react";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import classes from "./HomePageWhyGiddaa.module.css";

const HomePageWhyGiddaa = () => {
  const why = [
    {
      title: "Unlock Capital",
      description:
        "Turning geological data into bankable, fully de-risked financial models that accelerate investor confidence and funding timelines.",
      icon: LockOpen,
    },
    {
      title: "Guarantee Continuity",
      description:
        "Establishing a supply chain and logistics fortress that eliminates operational downtime and shields project schedules.",
      icon: ShieldCheck,
    },
    {
      title: "Set the Standard",
      description:
        "Leveraging the best of Nigerian expertise to deliver projects with uncompromising global quality and regulatory compliance.",
      icon: BadgeCheck,
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className={classes.container}
      id="our-mission"
      data-section-id="our-mission"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={fadeUp}>
        <SectionHeader title="Our Mission: To Transform Nigeria's Energy Future." />
      </motion.div>

      <motion.p variants={fadeUp}>
        Our mission is to be the trusted partner enabling the sustainable growth
        of Nigeria's energy sector. We achieve this by focusing on three key
        assurances: Capital De-risking (converting uncertainties into bankable
        realities), Operational Continuity (providing an impenetrable logistics
        framework across land and sea), and Local Excellence (championing
        world-class standards delivered by expert Nigerian talent). We are
        committed to building long-term value, ensuring every project is
        optimized for efficiency, compliance, and profitability.
      </motion.p>

      <motion.div className={classes.whyContainer} variants={containerVariants}>
        <div className={classes.whySection}>
          {why.map((data, i) => (
            <motion.div
              key={i}
              className={classes.why}
              variants={cardVariant}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 8px 24px rgba(227, 26, 33, 0.15)",
                transition: { type: "spring", stiffness: 220 },
              }}
            >
              <div className={classes.iconContainer}>
                <data.icon className={classes.icon} size={24} />
              </div>
              <h4>{data.title}</h4>
              <p>{data.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HomePageWhyGiddaa;
