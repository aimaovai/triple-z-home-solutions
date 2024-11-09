import React from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./services.module.css";

export default function Services() {
  const services = [
    {
      src: "/images/services/hts.jpg",
      service: "Home Theater Installation",
      description:
        "Triple Z's Home Theater Installation transforms your space into a cinematic experience with high-definition visuals and immersive surround sound. Our team expertly positions and connects all components, ensuring optimal performance and a clean, polished look. Enjoy seamless entertainment customized just for you!",
    },
    {
      src: "/images/services/revosm.jpg",
      service: "Reverse Osmosis Drinking Water System",
      description:
        "Enjoy crystal-clear, refreshing water straight from your tap with a Reverse Osmosis Drinking Water System! This powerful filtration setup removes impurities, giving you pure, great-tasting water every time. Pure hydration made easy—brought to you by Triple Z!",
    },
    {
      src: "/images/services/tv.jpg",
      service: "TV Mounting",
      description:
        "Triple Z's TV Mounting service offers a secure, sleek installation that enhances your viewing experience and maximizes space. Our experts carefully position and mount your TV, managing cables for a clean, modern look. Enjoy the perfect angle and stability with a setup tailored to your room!",
    },
    {
      src: "/images/services/chandelier.jpg",
      service: "Chandelier Installation",
      description:
        "Elevate your space with Triple Z's expert Chandelier Installation, adding a stunning focal point to any room. Our team handles secure mounting, precise positioning, and clean wiring for a flawless, polished look. Enjoy a beautifully lit home with safety and style in every detail!",
    },
    {
      src: "/images/services/cabinets.jpg",
      service: "Cabinet and Fixture Installation",
      description:
        "Transform your kitchen or bathroom with Triple Z's Cabinet and Fixture Installation service, bringing functionality and style to your space. Our experts ensure precise alignment, secure mounting, and seamless integration of fixtures for a polished, high-quality finish. Enhance your home with cabinetry that's both beautiful and built to last!",
    },
    {
      src: "/images/services/lights.jpg",
      service: "Light Fixtures and Fan Installation",
      description:
        "Brighten and cool your home with Triple Z's Light Fixture and Fan Installation service, designed for comfort and style. Our professionals handle secure mounting, precise wiring, and ideal placement to ensure both safety and a clean, modern look. Enjoy beautifully lit and breezy spaces tailored to your needs!",
    },
    {
      src: "/images/services/furniture.jpg",
      service: "Furniture Assembly",
      description:
        "Make setting up your space easy with Triple Z's Furniture Assembly service, providing expert assembly for all types of furniture. Our team ensures every piece is securely built, properly aligned, and ready for use, saving you time and hassle. Enjoy a polished, perfectly assembled setup without the stress!",
    },
    {
      src: "/images/services/art.jpg",
      service: "Wall Art & Decor Installation",
      description:
        "Personalize your space with Triple Z's Wall Art & Decor Installation service, bringing your vision to life with precision and style. Our experts handle secure mounting, ideal placement, and meticulous alignment for a flawless display. Transform your walls into a beautiful showcase, customized just for you!",
    },
    {
      src: "/images/services/shower.jpg",
      service: "Shower & Faucet Installation",
      description:
        "Say goodbye to leaky faucets and outdated showers—Triple Z's got you covered! Our Shower & Faucet Installation service combines top-notch craftsmanship with attention to detail, ensuring a flawless, modern look and reliable performance. Get ready to enjoy a refreshed, worry-free bathroom that works as great as it looks!",
    },
    {
      src: "/images/services/closet.jpg",
      service: "Wal-In Closet Setup",
      description:
        "Ready for a closet that's as organized as it is stylish? Triple Z's Walk-In Closet Setup service transforms your space into a storage dream, with custom shelving, hanging solutions, and thoughtful design. Say hello to effortless organization and a closet that makes finding your favorites a breeze!",
    },
    {
      src: "/images/services/curtain.jpg",
      service: "Curtain Installation",
      description:
        "Let natural light and style flow seamlessly with Triple Z's Curtain Installation service! We handle precise measurements, secure mounting, and perfect alignment for a polished look that complements your space. Enjoy beautifully hung curtains that add warmth and elegance to any room, hassle-free!",
    },
  ];
  return (
    <div className="body">
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Our Services</h1>
        {services.map((service, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              <div className={styles.section}>
                <img src={service.src} alt={service.service} />
                <div className={styles.text}>
                  <h2 className={styles.h2}>{service.service}</h2>
                  <p className={styles.p}>{service.description}</p>
                </div>
              </div>
            ) : (
              <div className={styles.section} style={{ order: -1 }}>
                <div
                  className={styles.text}
                  style={{ paddingLeft: "0", marginRight: "5px" }}
                >
                  <h2 className={styles.h2}>{service.service}</h2>
                  <p className={styles.p}>{service.description}</p>
                </div>
                <img src={service.src} alt={service.service} />
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
