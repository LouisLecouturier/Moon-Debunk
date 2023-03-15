import Image from "next/image";
import styles from "./Hero.module.scss";
import { useState } from "react";
import Mouse from "../../../assets/icons/mouse.svg";


import moon from "../../../public/images/moon.webp"

const Hero = ({ title1, title2, text, page }) => {
  const [loaded, setLoaded] = useState(false);


  return (
    <section className={`scroll-snap ${styles.heroContainer}`}>
        <div className={styles.background}>
            <div className={styles.stars}></div>
            <div className={styles.stars2}></div>
            <div className={styles.stars3}></div>
        </div>

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          {title1 && (
            <div className={styles.heroTitle}>
              <div className={styles.mask1}></div>
              <h1>{title1}</h1>
            </div>
          )}
          {title2 && (
            <div className={styles.heroTitle}>
              <div className={styles.mask2}></div>
              <h1>{title2}</h1>
            </div>
          )}
          {text && <span className={styles.text}>{text}</span>}
        </div>

        <div className={styles.heroShadow}></div>
        {page && page === "index" && (
          <div className={`${styles.moonContainer} ${loaded ? styles.animate : ""}`}>

              <div className={styles.moonShadow}></div>
            <Image
              className={styles.moon}
              src={moon}
              alt="moon"
              onLoadingComplete={() => setLoaded(true)}
            />
          </div>
        )}
      </div>
      <Mouse className={styles.mouse} />
    </section>
  );
};

export default Hero;
