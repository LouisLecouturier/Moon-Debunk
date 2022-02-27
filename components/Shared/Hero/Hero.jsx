import Image from "next/image";
import styles from "./Hero.module.scss";

import Mouse from "../../../assets/icons/mouse.svg";

const Hero = ({ title1, title2, text, page }) => {
  return (
    <section className={`scroll-snap ${styles.heroContainer}`}>
      <Image
        className={styles.heroImage}
        width={2268}
        height={4032}
        layout="fill"
        src="/images/space.webp"
        alt="space"
      />

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
          <div className={styles.moonContainer}>
            <div className={styles.moonShadow}></div>
            <Image
              className={styles.moon}
              src="/images/moon.webp"
              alt="moon"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        )}
      </div>
      <Mouse className={styles.mouse} />
    </section>
  );
};

export default Hero;
