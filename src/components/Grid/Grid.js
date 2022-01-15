import React, { Fragment } from "react";
import Card from "../Card/Card";
import styles from "./Grid.module.css";

const Grid = ({ trainPositions }) => {
    return (
        <div className={styles.grid}>
            {trainPositions.map((trainPosition) => (
                <Fragment key={trainPosition.trainId}>
                    <Card trainPosition={trainPosition} />
                </Fragment>
            ))}
        </div>
    );
};

export default Grid;
