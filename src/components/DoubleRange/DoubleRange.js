import React from "react";

import styles from "./DoubleRange.module.css";

const DoubleRange = ({ minMax, filterValues, onFilterChange }) => {
    const initialInput = minMax;

    const inputChangeHandler = ({ target: { value, name } }) => {
        let index = name === `input1` ? 0 : 1;
        value = parseInt(value);
        if (!filterValues) {
            const inputs = [...initialInput];
            if ((!index && value > inputs[1]) || (index && value < inputs[0])) return;
            inputs[index] = parseInt(value);
            return onFilterChange(inputs);
        } else {
            const inputs = [...filterValues];
            if ((!index && value > inputs[1]) || (index && value < inputs[0])) return;
            inputs[index] = parseInt(value);
            if (inputs[0] === initialInput[0] && inputs[1] === initialInput[1])
                onFilterChange(null);
            else return onFilterChange(inputs);
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
