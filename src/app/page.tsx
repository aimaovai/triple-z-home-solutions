"use client";

import Header from "../components/header/header";
import Footer from "../components/footer/footer.js";
import MarqueeCard from "../components/marqueecard/marqueecaard.js";
import ServiceCard from "../components/servicecard/servicecard.js";

import SectionCard from "../components/sectioncard/sectioncard.js";

export default function Home() {
  const locations = [
    "Richmond, Tx",
    "Missouri City, Tx",
    "Houston, Tx",
    "Rosenburg, Tx",
    "Katy, Tx",
    "Sugarland, Tx",
  ];
  const service = [
    {
      src: "/images/featured-services/hts.png",
      description:
        "Triple Z's Home Theater Installation transforms your space into a cinematic experience with high-definition visuals and immersive surround sound. Our team expertly positions and connects all components, ensuring optimal performance and a clean, polished look. Enjoy seamless entertainment customized just for you!",
    },
    {
      src: "/images/featured-services/tvmount.png",
      description:
        "Triple Z's TV Mounting service offers a secure, sleek installation that enhances your viewing experience and maximizes space. Our experts carefully position and mount your TV, managing cables for a clean, modern look. Enjoy the perfect angle and stability with a setup tailored to your room!",
    },
    {
      src: "/images/featured-services/chandinstall.png",
      description:
        "Elevate your space with Triple Z's expert Chandelier Installation, adding a stunning focal point to any room. Our team handles secure mounting, precise positioning, and clean wiring for a flawless, polished look. Enjoy a beautifully lit home with safety and style in every detail!",
    },
    {
      src: "/images/featured-services/cabinets.png",
      description:
        "Transform your kitchen or bathroom with Triple Z's Cabinet and Fixture Installation service, bringing functionality and style to your space. Our experts ensure precise alignment, secure mounting, and seamless integration of fixtures for a polished, high-quality finish. Enhance your home with cabinetry that’s both beautiful and built to last!",
    },
  ];
  return (
    <div className="body">
      <Header />
      <div>
        <div className="content-body">
          <div className="title">Triple Z Home Solutions</div>
          <div className="marquee">
            <div>
              <span>
                <MarqueeCard src={"/images/marquee/curtains_before.jpg"} />
              </span>
              <span>
                <MarqueeCard src={"/images/marquee/curtains_after.jpg"} />
              </span>
              <span>
                <MarqueeCard src={"/images/marquee/theater_before.jpg"} />
              </span>
              <span>
                <MarqueeCard src={"/images/marquee/theater_after.jpg"} />
              </span>
              <span>
                <MarqueeCard src={"/images/marquee/chand_before.jpg"} />
              </span>
              <span>
                <MarqueeCard src={"/images/marquee/chand_after.jpg"} />
              </span>
            </div>
          </div>
          <SectionCard>
            <div>
              <h2 className="h2">Featured Services</h2>
            </div>
            {service.map((serviceItem, index) => (
              <ServiceCard
                key={index}
                src={serviceItem.src}
                description={serviceItem.description}
              />
            ))}
          </SectionCard>
          <div>
            <SectionCard>
              <div>
                <h2 className="h2">Service Areas</h2>
              </div>
              <div className="section-grid">
                {locations.map((location) => (
                  <div key={location}>{location}</div>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
