'use client';
import React from "react";
import { useState } from "react";
import styles from './header.css';
import logo from "../../../../public/images/logo_1.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


export default function Header() {
    const pathName = usePathname();
    const isActive = (path) => path === pathName;
    const [nav, setNav] = useState(false);
    const onClick = () => setNav(!nav);
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
        <nav class="nav">
            <div class="top-nav"></div>
            <div class="nav-container">
                <Image
                    src={logo}
                    height={76}
                    width={84}
                    alt="logo"
                />
                <div>
                    {links.map((link) => (
                        <Link key={link.name} href={link.path} class="li">{link.name}</Link>
                    ))}
                </div>
                {/* <button class="nav-btn">Get a quote</button> */}
            </div>
        </nav>
    );
}