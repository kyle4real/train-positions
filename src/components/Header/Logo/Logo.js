import React from "react";
import { logo } from "../../../assets";

import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.logo__img}>
                <img src={logo} alt={`Train Positions Logo`} />
            </div>
            <span className={styles.logo__text}>Train Positions</span>
        </div>
    );
};

export default Logo;
