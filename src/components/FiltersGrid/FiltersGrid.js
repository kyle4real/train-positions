import React from "react";
import LineColor from "../LineColor/LineColor";
import SelectGrid from "../SelectGrid/SelectGrid";
import styles from "./FiltersGrid.module.css";

const FiltersGrid = () => {
    return (
        <div className={styles.filtersgrid}>
            <div className={styles.filtersgrid__item}>
                <span className={styles.filtersgrid__item__title}>Filter by Line Color</span>
                <SelectGrid options={lineColorOptions} />
            </div>
            <div className={styles.filtersgrid__item}>
                <span className={styles.filtersgrid__item__title}>Filter by Service Type</span>
                <SelectGrid options={serviceTypeOptions} />
            </div>
            <div className={styles.filtersgrid__item}>
                <span className={styles.filtersgrid__item__title}>Filter by Car Count</span>
            </div>
        </div>
    );
};

const serviceTypeOptions = [
    {
        value: "NoPassengers",
        component: <>NoPassengers</>,
    },
    {
        value: "Normal",
        component: <>Normal</>,
    },
    {
        value: "Special",
        component: <>Special</>,
    },
    {
        value: "Unknown",
        component: <>Unknown</>,
    },
];

const lineColorOptions = [
    {
        value: "RD",
        component: <LineColor linecolor={"RD"} />,
    },
    {
        value: "BL",
        component: <LineColor linecolor={"BL"} />,
    },
    {
        value: "OR",
        component: <LineColor linecolor={"OR"} />,
    },
    {
        value: "GR",
        component: <LineColor linecolor={"GR"} />,
    },
    {
        value: "YL",
        component: <LineColor linecolor={"YL"} />,
    },
    {
        value: "SV",
        component: <LineColor linecolor={"SV"} />,
    },
];

export default FiltersGrid;
