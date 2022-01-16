import React, { Fragment } from "react";
import Checkbox from "../Checkbox/Checkbox";

import styles from "./SelectGrid.module.css";

const SelectGrid = ({ options, optionCallback, filterValues, onFilterChange }) => {
    const filterChangeHandler = (option) => {
        if (!filterValues) return onFilterChange([option]);
        if (!filterValues.includes(option)) return onFilterChange([...filterValues, option]);
        else {
            const filtered = filterValues.filter((item) => item !== option);
            return onFilterChange(!!filtered.length ? filtered : null);
        }
    };
    return (
        <div className={styles.selectgrid}>
            {options.map((option) => {
                const isFiltered = filterValues && filterValues.includes(option);
                return (
                    <Fragment key={option}>
                        <button
                            className={styles.selectgrid__option}
                            onClick={() => filterChangeHandler(option)}
                        >
                            <Checkbox isActive={!isFiltered} />
                            {optionCallback(option)}
                        </button>
                    </Fragment>
                );
            })}
        </div>
    );
};

export default SelectGrid;
