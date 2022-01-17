import React, { Fragment } from "react";
import Card from "../Card/Card";
import styles from "./Grid.module.css";

const Grid = ({ trains }) => {
    if (!trains.length) return <>No Train Position data at this time.</>;
    return (
        <div className={styles.grid}>
            {trains.map((train) => (
                <Fragment key={train.trainId}>
                    <Card train={train} />
                </Fragment>
            ))}
        </div>
    );
};

export default Grid;
