import React from "react";
import styles from "./Card.module.css";

const Card = ({ train }) => {
    const cardBgClass = train.LineCode ? `bg--${train.LineCode}` : `bg--null`;
    return (
        <div className={`${styles.card} ${cardBgClass}`}>
            <div className={styles.card__top}>{train.LineCode || "N/A"}</div>
            <div className={styles.card__content}>
                <div className={styles.card__content__carcount}>
                    <span className={styles.card__content__carcount__span}>
                        {train.CarCount} Train Cars
                    </span>
                    <div className={styles[`carcount-grid`]}>
                        {Array.from({ length: train.CarCount }).map((_, index) => (
                            <div className={styles[`carcount-grid__item`]} key={index} />
                        ))}
                    </div>
                </div>
                <span className={styles.card__content__trainnumber}>Train {train.TrainNumber}</span>
                <span className={styles.card__content__servicetype}>
                    Service: {train.ServiceType}
                </span>
            </div>
        </div>
    );
};

export default Card;
