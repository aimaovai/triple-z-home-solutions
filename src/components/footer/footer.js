'use client';
import React from "react";
// import { useState } from "react";
import './footer.css';
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
        <nav className="nav">
            {/* <div className="top-nav"></div> */}
            <div className="container">
                <Image
                    src={logo}
                    height={135}
                    width={125}
                    alt="logo"
                />
                <div>

                </div>
                <div className="footer-links">
                    <div className="footer-li" style={{ fontWeight: "normal", fontSize: "1.2rem", textTransform: "uppercase" }}>Company</div>
                    <div className="footer-li">About US</div>
                    <div className="footer-li">Contact</div>
                    <div className="footer-li">Portfolio</div>
                </div>
                <div className="footer-links">
                    <div className="footer-li" style={{ fontWeight: "normal", fontSize: "1.2rem", textTransform: "uppercase" }}>Legal</div>
                    <div className="footer-li">Legal Notice</div>
                    <div className="footer-li">Terms</div>
                    <div className="footer-li">Privacy</div>
                </div>
            </div>
        </nav>
    );
}