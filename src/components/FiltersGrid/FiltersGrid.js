import React from "react";
import styles from "./FiltersGrid.module.css";

const FiltersGrid = ({ filters }) => {
    return (
        <div className={styles.filtersgrid}>
            {filters.map(({ label, component }) => (
                <div className={styles.filtersgrid__item}>
                    <span className={styles.filtersgrid__item__title}>{label}</span>
                    {component}
                </div>
            ))}
        </div>
    );
};

export default FiltersGrid;
