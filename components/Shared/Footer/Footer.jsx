import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} dark scroll-snap`}>
      Site réalisé par{" "}
      <a className={styles.link} href="">
        Louis Lecouturier
      </a>
    </footer>
  );
};

export default Footer;
