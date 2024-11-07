"use client";

import React from "react";
import styles from "./footer.module.css";
import logo from "../../../public/images/logos/logo_1.png";
import Image from "next/image";
import { CopyrightOutlined, Facebook, Instagram, Phone } from "@mui/icons-material";
// import { FaTiktok } from "react-icons/fa";

export default function Footer() {
 
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Logo */}
        <Image
          src={logo}
          height={100}
          width={100}
          alt="logo"
          className="responsive-image"
        />

        <div className={styles["footer-links-container"]}>
          {/* Company Links */}
          <div className={styles["footer-links"]}>
            <div className={styles["footer-li"]}>
              <a href="#">About Us</a>
            </div>
            <div className={styles["footer-li"]}>
              <a href="/contact-us">Contact</a>
            </div>
            <div className={styles["footer-li"]}>
              <a href="#">Portfolio</a>
            </div>
          </div>
          <div className={styles["vertical-line"]}></div>

          {/* Legal Links */}
          <div className={styles["footer-links"]}>
            <div className={styles["footer-li"]}><Phone /> 346-558-7736</div>
            <div className={styles["footer-li"]}> Triple Z Home Solutions | <CopyrightOutlined /> 2024 | All Rights Reserved</div>
            <div className={styles["footer-li"]}><Instagram /> <Facebook /> {/*<FaTiktok />*/ } </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
