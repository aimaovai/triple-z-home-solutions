"use client";

import React from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./portfolio.module.css";
import LatestProjects from "@/components/latestProjects/LatestProjects";

export default function Portfolio() {
  return (
    <div className="body">
      <Header />
      <div className={styles.container}>
       <LatestProjects />
      </div>
      <Footer />
    </div>
  );
}
