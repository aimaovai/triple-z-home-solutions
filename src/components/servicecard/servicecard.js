import React from "react";
import styles from "./servicecard.module.css";
import ServiceImage from "../serviceimage/serviceimage.js";

export default function ServiceCard({ src, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}><ServiceImage src={src} /></div>
      <div className={styles.text}>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
