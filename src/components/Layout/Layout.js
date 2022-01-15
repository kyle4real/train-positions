import React from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
    return (
        <>
            <Header>Trains</Header>
            <main className={styles.page}>{children}</main>
        </>
    );
};

export default Layout;
