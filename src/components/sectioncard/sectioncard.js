import React from "react";
import PropTypes from 'prop-types';
import styles from "./sectioncard.module.css";

export default function SectionCard({ children, backgroundColor, borderColor }) {
    return (
        <div className={styles.container} style={{ backgroundColor: backgroundColor, border: `2px solid ${borderColor}`}}>
            {children}
        </div>
    );
}

SectionCard.propTypes = {
    children: PropTypes.node.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    borderColor: PropTypes.string, // <--- Optional prop
  };