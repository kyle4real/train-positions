import React, { Fragment } from "react";
import Checkbox from "../Checkbox/Checkbox";

import styles from "./SelectGrid.module.css";

const SelectGrid = ({ options }) => {
    return (
        <div className={styles.selectgrid}>
            {options.map(({ value, component }) => (
                <Fragment key={value}>
                    <button className={styles.selectgrid__option}>
                        <Checkbox />
                        {component}
                    </button>
                </Fragment>
            ))}
        </div>
    );
};

export default SelectGrid;
