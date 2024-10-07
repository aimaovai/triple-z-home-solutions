'use client';
import React from "react";
// import { useState } from "react";
import styles from './header.css';
import logo from "../../../public/images/logo_1.png";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";



export default function Header() {
    // const pathName = usePathname();
    // const isActive = (path) => path === pathName;
    // const [nav, setNav] = useState(false);
    // const onClick = () => alert("Coming Soon!");
    const links = [
        {
            name: "Home",
            path: "/home"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact Us",
            path: "/contact-us"
        },
        {
            name: "Services",
            path: "/services"
        },
        {
            name: "Portfolio",
            path: "/portfolio"
        }
    ]
    return (
        <nav className={styles.nav}>
            <div className="top_nav"></div>
            <div className="nav_container">
                <Image
                    src={logo}
                    height={76}
                    width={84}
                    alt="logo"
                />
                <div>
                    {links.map((link) => (
                        <Link key={link.name} href={link.path} className="li">{link.name}</Link>
                    ))}
                </div>
                <div>
                    <button className="nav-btn">Get a quote</button>
                </div>
                {/* <button class="nav-btn">Get a quote</button> */}
            </div>
        </nav>
    );
}