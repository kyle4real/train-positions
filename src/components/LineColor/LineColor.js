import React from "react";

import styles from "./LineColor.module.css";

const LineColor = ({ linecolor }) => {
    const cardBgClass = linecolor ? `bg--${linecolor}` : `bg--null`;
    return <span className={`${styles.linecolor} ${cardBgClass}`}>{linecolor || `N/A`}</span>;
};

export default LineColor;
