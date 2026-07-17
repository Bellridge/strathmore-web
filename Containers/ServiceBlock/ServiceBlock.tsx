"use client";

import { motion, Variants } from "framer-motion";
import classes from "./ServiceBlock.module.css";
import type { Service } from "../../Utilities/servicesData";

type Props = Service & { eyebrow: string };

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function renderBullet(bullet: string) {
  const separator = " — ";
  const idx = bullet.indexOf(separator);
  if (idx === -1) return bullet;
  return (
    <>
      <strong>{bullet.slice(0, idx)}</strong>
      {separator}
      {bullet.slice(idx + separator.length)}
    </>
  );
}

const ServiceBlock = ({
  eyebrow,
  title,
  description,
  options,
  bullets,
  closing,
  result,
}: Props) => {
  return (
    <motion.article
      className={classes.block}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.span className={`eyebrow ${classes.eyebrow}`} variants={fadeUp}>
        {eyebrow}
      </motion.span>
      <motion.h3 className={classes.title} variants={fadeUp}>
        {title}
      </motion.h3>
      <motion.p className={classes.description} variants={fadeUp}>
        {description}
      </motion.p>

      {bullets && (
        <motion.ul className={classes.flatBullets} variants={fadeUp}>
          {bullets.map((bullet) => (
            <li key={bullet}>{renderBullet(bullet)}</li>
          ))}
        </motion.ul>
      )}

      {options && (
        <motion.div className={classes.options} variants={containerVariants}>
          {options.map((option) => (
            <motion.div
              key={option.title}
              className={classes.option}
              variants={fadeUp}
            >
              <h4>{option.title}</h4>
              <p>{option.description}</p>
              {option.bullets && (
                <ul className={classes.nestedBullets}>
                  {option.bullets.map((bullet) => (
                    <li key={bullet}>{renderBullet(bullet)}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}

      {closing && (
        <motion.p className={classes.closing} variants={fadeUp}>
          {closing}
        </motion.p>
      )}

      {result && (
        <motion.p className={classes.result} variants={fadeUp}>
          <span className={classes.resultLabel}>The result</span> {result}
        </motion.p>
      )}
    </motion.article>
  );
};

export default ServiceBlock;
