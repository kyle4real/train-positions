import React from "react";
import styles from "./DropdownButton.module.css";
import { BsChevronDown } from "react-icons/bs";

const DropdownButton = ({ children, onClick, isOpen }) => {
    return (
        <button className={styles.button} onClick={onClick && onClick}>
            {children}
            <div className={`${styles.button__dropdownicon} ${!isOpen ? styles.rotate : ""}`}>
                <BsChevronDown />
            </div>
        </button>
    );
};

export default DropdownButton;
