import React from "react";
import styles from "./Accordian.module.css";

const Accordian = ({ isOpen, children }) => {
    return (
        <div className={styles.accordian} style={isOpen ? { maxHeight: 1000 } : {}}>
            {isOpen && children}
        </div>
    );
};

export default Accordian;
