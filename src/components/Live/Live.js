import React from "react";

import styles from "./Live.module.css";

const Live = ({ updating }) => {
    return (
        <div className={styles.live}>
            <div className={styles.live__top}>
                <div className={styles.live__top__pulse} />
                <span className={styles.live__top__span}>Live</span>
            </div>
            {updating && (
                <div className={styles.live__bottom}>
                    <span className={styles.live__bottom__span}>Updating...</span>
                    {/* <span className={styles.live__bottom__countdown}>7:00</span> */}
                </div>
            )}
        </div>
    );
};

export default Live;
