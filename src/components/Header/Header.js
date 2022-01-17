import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Header.module.css";

import { BsMoon } from "react-icons/bs";

const Header = () => {
    const { setThemeIndex } = useContext(ThemeContext);

    return (
        <>
            <div className={styles.offset} />
            <div className={styles.header}>
                <div className={styles.header__content}>
                    <span className={styles.header__content__logo}>Train Positions</span>
                    <button
                        onClick={() => setThemeIndex((p) => (p === 0 ? 1 : 0))}
                        className={styles.header__content__theme}
                    >
                        <BsMoon />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
