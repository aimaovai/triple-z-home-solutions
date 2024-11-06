"use client";
import React from "react";
import { useState } from "react";
import logo from "../../../public/images/logo_1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  const [nav, setNav] = useState(false);
  const onClick = () => alert("Coming Soon!");
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact-us",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
  ];
  return (
    <nav className={styles.nav}>
      {/* Top navigation bar section */}
      <div className={styles["top_nav"]}></div>

      {/* Main container for navigation */}
      <div className={styles["nav_container"]}>
        {/* Logo */}
        <Image
          src={logo}
          height={76}
          width={84}
          alt="logo"
          className="responsive-image"
        />

        {/* Header links - Hidden on mobile */}
        <div className={`${styles["main-nav-links"]}`}>
          {links.map((link) => (
            <Link key={link.name} href={link.path} className={styles.li}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className={styles["burger-menu-container"]}>
          {/* Hamburger Icon - Visible only on mobile */}
          <div className={styles["hamburger"]}>
            {!nav ? (
              <FaBars onClick={() => setNav(!nav)} />
            ) : (
              <FaTimes onClick={() => setNav(!nav)} />
            )}
          </div>
          {/* Mobile Menu - Visible only on small screens */}
          {/* `${styles["header-links-container"]} ${styles["block"]} ${styles["md:hidden"]}` : styles["hidden"]*/}
          <div className={nav ? `${styles["mobile-menu"]}` : styles["hidden"]}>
            {links.map((link) => (
              <Link key={link.name} href={link.path} className={styles.li}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Get a Quote button */}
        <div>
          <button className={styles["quote-btn"]} onClick={onClick}>
            Get a quote
          </button>
        </div>
      </div>
    </nav>
  );
}
