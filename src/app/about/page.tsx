import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className="body">
      <Header />
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            justifySelf: "center",
            margin: "20px 0",
          }}
        >
          <div className={styles.title}>
            <h1>About Us</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
              justifyContent: "space-between",
            }}
          >
            <p className={styles.p1}>
              Welcome to Triple Z Home Solutions! At Triple Z Home Solutions, we
              specialize in bringing affordable, high-quality home and
              commercial improvement services right to your door. From adding
              the perfect finishing touch to a room to transforming your space
              into a functional, stylish, and comfortable environment, our
              skilled team is dedicated to meeting your project needs with
              excellence and precision.
            </p>
            <Image
              src={"/images/logos/logo_1.png"}
              alt="logo"
              width={250}
              height={250}
              className={styles["responsive_image"]}
            />
          </div>
          <div>
            <p className={styles.p1}>We offer a comprehensive range of services, including:</p>
            {/* <ul> */}
              <li className={styles.bullet}>
                  Light Fixture & Fan Installations: Illuminate your space with
                  beautiful, expertly installed lighting.
              </li>
              <li className={styles.bullet}>
                  TV Mounting & Home Theater Systems: Transform your living room
                  into a home theater, complete with flawless TV mounting.
              </li>
              <li className={styles.bullet}>
                  Chandelier & Wall Art Installation: Add elegance and
                  personality to your home with professional chandelier and
                  decor placements.
              </li>
              <li className={styles.bullet}>
                  Cabinet Handle & Furniture Assembly: Enhance your kitchen or
                  bath and enjoy seamless furniture assembly services.
              </li>
              <li className={styles.bullet}>
                  Picture Hanging & Wall Decor: Showcase your favorite photos,
                  artwork, and more with precision and style.
              </li>
              <li className={styles.bullet}>
                  Shower & Faucet Installations: Improve your bathrooms with
                  efficient, expert plumbing installations.
              </li>
              <li className={styles.bullet}>
                  Walk-In Closet Setup: Maximize storage and organization with
                  our custom walk-in closet solutions.
              </li>
              <li className={styles.bullet}>
                  Reverse Osmosis Drinking Water Systems: Ensure safe, purified
                  drinking water for your home.
              </li>
            {/* </ul> */}
            <p className={styles.p2}>
              At Triple Z, we pride ourselves on providing a 5-star experience
              for every project, no matter the size. Whether it&apos;s a single
              installation or a complete room upgrade, our approach combines
              quality craftsmanship, exceptional customer service, and
              unwavering commitment to your satisfaction.
            </p>
            <p className={styles.p2}>
              Let us turn your vision into reality. Reach out today, and
              experience the Triple Z difference!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
