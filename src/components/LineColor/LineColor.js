import React from "react";

import styles from "./LineColor.module.css";

const LineColor = ({ linecolor }) => {
    const cardBgClass = linecolor ? `bg--${linecolor}` : ``;
    return <span className={`${styles.linecolor} ${cardBgClass}`}>{linecolor}</span>;
};

export default LineColor;
