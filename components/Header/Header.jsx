import styles from "./Header.module.scss";

import Moon from "../../assets/icons/moon.svg";
import { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const Header = () => {
  const { target, button, isShown, setIsShown } = useClickOutside();
  const [hasBeenAnimated, setHasBeenAnimated] = useState(false);

  return (
    <div
      className={`${styles.headerContainer} ${isShown && styles.navIsShown}`}
    >
      <header className={styles.header}>
        <div
          ref={button}
          className={`${styles.hamburger} ${
            hasBeenAnimated && !isShown && styles.hasBeenAnimated
          } ${isShown && styles.animate}`}
          onClick={() => {
            !hasBeenAnimated && setHasBeenAnimated(true);
            setIsShown(!isShown);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className={styles.desktopNav}>
          <a className={styles.link}>Histoire</a>
          <a className={styles.link}>Théorie</a>
          <a className={styles.link}>Manipulation</a>
          <a className={styles.link}>Debunk</a>
        </nav>
        <div className={styles.logo}>
          <Moon />
        </div>
      </header>
      <div
        ref={target}
        className={`${styles.mobileNavContainer} ${
          isShown && styles.navIsShown
        }`}
      >
        <nav className={styles.mobileNav}>
          <a className={styles.link}>Histoire</a>
          <a className={styles.link}>Théorie</a>
          <a className={styles.link}>Manipulation</a>
          <a className={styles.link}>Debunk</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
