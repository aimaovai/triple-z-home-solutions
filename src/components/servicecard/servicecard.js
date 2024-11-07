import React from "react";
import Image from "next/image";
import styles from "./servicecard.module.css";

export default function ServiceCard({ src}) {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={src} // Replace with your image path
        alt="Descriptive Alt Text" // Describe the image
        width={250} // Original width of the image
        height={250} // Original height of the image
        className={styles.responsiveImage} // Optional custom class
      />
    </div>
  );
}
