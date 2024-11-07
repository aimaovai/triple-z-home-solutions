import React from "react";
import styles from "./sectioncard.module.css";

export default function SectionCard({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}