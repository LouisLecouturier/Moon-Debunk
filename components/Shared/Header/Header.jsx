import styles from "./Header.module.scss";

import Moon from "../../../assets/icons/moon.svg";
import { useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import Link from "next/link";

const Header = () => {
    const {target, button, isShown, setIsShown} = useClickOutside();
    const [hasBeenAnimated, setHasBeenAnimated] = useState(false);

    return (
        <div
            className={`${styles.headerContainer} ${isShown ? styles.navIsShown : ""}`}
        >
            <header className={styles.header}>
                <div
                    ref={button}
                    className={`${styles.hamburger} ${
                        (hasBeenAnimated && !isShown) ? styles.hasBeenAnimated : ""
                    } ${isShown ? styles.animate : ""}`}
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
                    <Link href="/" className={styles.link}>
                        Accueil
                    </Link>
                    <Link href="/story" className={styles.link}>
                        Histoire
                    </Link>
                    <Link href="/theory" className={styles.link}>
                        Théorie
                    </Link>
                    <Link href="/debunk" className={styles.link}>
                        Debunk
                    </Link>
                    <Link href="/manipulation" className={styles.link}>
                        Manipulation
                    </Link>
                </nav>
                <div className={styles.logo}>
                    <Link href="/">

                        <Moon/>

                    </Link>
                </div>
            </header>
            <div
                ref={target}
                className={`${styles.mobileNavContainer} ${
                    isShown ? styles.navIsShown : ""
                }`}
            >
                <nav className={styles.mobileNav}>
                    <Link href="/" className={styles.link}>
                        Accueil
                    </Link>
                    <Link href="/story" className={styles.link}>
                        Histoire
                    </Link>
                    <Link href="/theory" className={styles.link}>
                        Théorie
                    </Link>
                    <Link href="/debunk" className={styles.link}>
                        Debunk
                    </Link>
                    <Link href="/manipulation" className={styles.link}>
                        Manipulation
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;
