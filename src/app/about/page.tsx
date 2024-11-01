import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import React from "react";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className="body">
      <Header />
      <pre className={styles.container}>
        <code className={styles["text-block"]}>
        *Welcome to Triple Z Home Solutions!*

At Triple Z Home Solutions, we specialize in bringing affordable, high-quality home and commercial improvement services right to your door. From adding the perfect finishing touch to a room to transforming your space into a functional, stylish, and comfortable environment, our skilled team is dedicated to meeting your project needs with excellence and precision.

We offer a comprehensive range of services, including:

- Light Fixture & Fan Installations: Illuminate your space with beautiful, expertly installed lighting.
- TV Mounting & Home Theater Systems: Transform your living room into a home theater, complete with flawless TV mounting.
- Chandelier & Wall Art Installation: Add elegance and personality to your home with professional chandelier and decor placements.
- Cabinet Handle & Furniture Assembly: Enhance your kitchen or bath and enjoy seamless furniture assembly services.
- Picture Hanging & Wall Decor: Showcase your favorite photos, artwork, and more with precision and style.
- Shower & Faucet Installations: Improve your bathrooms with efficient, expert plumbing installations.
- Walk-In Closet Setup: Maximize storage and organization with our custom walk-in closet solutions.
- Reverse Osmosis Drinking Water Systems: Ensure safe, purified drinking water for your home.

At Triple Z, we pride ourselves on providing a 5-star experience for every project, no matter the size. Whether it`&apos;`s a single installation or a complete room upgrade, our approach combines quality craftsmanship, exceptional customer service, and unwavering commitment to your satisfaction.

Let us turn your vision into reality. Reach out today, and experience the Triple Z difference!

        </code>
      </pre>
      <Footer />
    </div>
  );
}
