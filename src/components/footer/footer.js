"use client";
import React from "react";
// import { useState } from "react";
import styles from "./footer.module.css";
import logo from "../../../public/images/logo_1.png";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  // const pathName = usePathname();
  // const isActive = (path) => path === pathName;
  // const [nav, setNav] = useState(false);
  // const onClick = () => setNav(!nav);
  // const links = [
  //     {
  //         name: "Home",
  //         path: "/home"
  //     },
  //     {
  //         name: "About",
  //         path: "/about"
  //     },
  //     {
  //         name: "Contact Us",
  //         path: "/contact-us"
  //     },
  //     {
  //         name: "Services",
  //         path: "/services"
  //     },
  //     {
  //         name: "Portfolio",
  //         path: "/portfolio"
  //     }
  // ]
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
          <div
            className={styles["footer-li"]}
            style={{
              fontWeight: "normal",
              fontSize: "1.2rem",
              textTransform: "uppercase",
            }}
          >
            Company
          </div>
          <div className={styles["footer-li"]}>About Us</div>
          <div className={styles["footer-li"]}>Contact</div>
          <div className={styles["footer-li"]}>Portfolio</div>
        </div>

        {/* Legal Links */}
        <div className={styles["footer-links"]}>
          <div
            className={styles["footer-li"]}
            style={{
              fontWeight: "normal",
              fontSize: "1.2rem",
              textTransform: "uppercase",
            }}
          >
            Legal
          </div>
          <div className={styles ["footer-li"]}>Legal Notice</div>
          <div className={styles ["footer-li"]}>Terms</div>
          <div className={styles ["footer-li"]}>Privacy</div>
        </div>
        </div>
      </div>
    </nav>
  );
}
