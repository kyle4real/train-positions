import React from "react";
import styles from "./PageHead.module.css";

const PageHead = ({ title, button, children, center }) => {
    return (
        <div className={styles.pagehead}>
            <div className={styles.pagehead__content}>
                <h1 className={styles.pagehead__content__title}>{title}</h1>
                {center}
                {button}
            </div>
            {children}
        </div>
    );
};

export default PageHead;
