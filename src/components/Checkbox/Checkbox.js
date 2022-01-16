import React from "react";
import styles from "./Checkbox.module.css";

import { AiOutlineCheck } from "react-icons/ai";

const Checkbox = ({ isActive, onClick }) => {
    return (
        <button className={styles.checkbox} onClick={onClick && onClick}>
            {isActive && <AiOutlineCheck />}
        </button>
    );
};

export default Checkbox;
