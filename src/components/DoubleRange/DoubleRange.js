import React from "react";

import styles from "./DoubleRange.module.css";

const DoubleRange = ({ minMax, filterValues, onFilterChange }) => {
    const initialInput = minMax;

    const inputChangeHandler = ({ target: { value, name } }) => {
        let index;
        if (name === `input1`) index = 0;
        else index = 1;

        if (!filterValues) {
            const val = [...initialInput];
            val[index] = parseInt(value);
            return onFilterChange(val);
        } else {
            const val = [...filterValues];
            val[index] = parseInt(value);
            if (val[0] === initialInput[0] && val[1] === initialInput[1]) onFilterChange(null);
            else return onFilterChange(val);
        }
    };

    const [input1, input2] = !filterValues ? initialInput : filterValues;
    const [min, max] = minMax;
    return (
        <div className={styles.doublerange}>
            <span className={styles.doublerange__values}>
                <>{input1}</>
                <>&nbsp;{"-"}&nbsp;</>
                <>{input2}</>
            </span>
            <div className={styles.doublerange__container}>
                <div className={styles.slidertrack} />
                <input
                    type="range"
                    className={`${styles.input1} ${styles.input}`}
                    min={min}
                    max={max}
                    value={input1}
                    name={`input1`}
                    onChange={inputChangeHandler}
                />
                <input
                    type="range"
                    className={`${styles.input2} ${styles.input}`}
                    min={min}
                    max={max}
                    value={input2}
                    name={`input2`}
                    onChange={inputChangeHandler}
                />
            </div>
        </div>
    );
};

export default DoubleRange;
