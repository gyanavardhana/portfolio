import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gyanavardhan</h1>
        <p className={styles.description}>
          I specialize in full-stack development and machine learning, crafting
          intuitive web applications and powerful AI solutions. From
          productivity Chrome extensions to job search platforms and image
          classifiers, I leverage cutting-edge tech to solve real-world
          problems, driven by hands-on experience and a commitment to
          innovation.
        </p>
        <a
          href="mailto:gyanavardhanmamidisetti@email.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
