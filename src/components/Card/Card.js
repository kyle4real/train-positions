import React from "react";
import styles from "./Card.module.css";

const Card = ({ trainPosition }) => {
    const cardBgClass = trainPosition.LineCode ? `card--${trainPosition.LineCode}` : ``;
    return (
        <div className={`${styles.card} ${styles[cardBgClass]}`}>
            <div className={styles.card__top}>{trainPosition.LineCode}</div>
            <div className={styles.card__content}>
                <div className={styles.card__content__carcount}>
                    <span className={styles.card__content__carcount__span}>
                        {trainPosition.CarCount} Train Cars
                    </span>
                    <div className={styles[`carcount-grid`]}>
                        {Array.from({ length: trainPosition.CarCount }).map(() => (
                            <div className={styles[`carcount-grid__item`]} />
                        ))}
                    </div>
                </div>
                <span className={styles.card__content__trainnumber}>
                    Train #{trainPosition.TrainNumber}
                </span>
                <span className={styles.card__content__servicetype}>
                    {trainPosition.ServiceType}
                </span>
            </div>
        </div>
    );
};

export default Card;
