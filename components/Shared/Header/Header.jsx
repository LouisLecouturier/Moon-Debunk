import styles from "./Header.module.scss";

import Moon from "../../../assets/icons/moon.svg";
import { useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import Link from "next/link";

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
          <Link href="/">
            <a className={styles.link}>Accueil</a>
          </Link>
          <Link href="/story">
            <a className={styles.link}>Histoire</a>
          </Link>
          <Link href="/theory">
            <a className={styles.link}>Théorie</a>
          </Link>
          <Link href="/debunk">
            <a className={styles.link}>Debunk</a>
          </Link>
          <Link href="/manipulation">
            <a className={styles.link}>Manipulation</a>
          </Link>
        </nav>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Moon />
            </a>
          </Link>
        </div>
      </header>
      <div
        ref={target}
        className={`${styles.mobileNavContainer} ${
          isShown && styles.navIsShown
        }`}
      >
        <nav className={styles.mobileNav}>
          <Link href="/">
            <a className={styles.link}>Accueil</a>
          </Link>
          <Link href="/story">
            <a className={styles.link}>Histoire</a>
          </Link>
          <Link href="/theory">
            <a className={styles.link}>Théorie</a>
          </Link>
          <Link href="/debunk">
            <a className={styles.link}>Debunk</a>
          </Link>
          <Link href="/manipulation">
            <a className={styles.link}>Manipulation</a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
