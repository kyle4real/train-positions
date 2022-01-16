import React, { useState } from "react";

import styles from "./DoubleRange.module.css";

const DoubleRange = () => {
    const [input1, setInput1] = useState(30);
    const [input2, setInput2] = useState(70);

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
                    min={0}
                    max={100}
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                />
                <input
                    type="range"
                    className={`${styles.input2} ${styles.input}`}
                    min={0}
                    max={100}
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                />
            </div>
        </div>
    );
};

export default DoubleRange;
