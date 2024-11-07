"use client";

import Header from "../components/header/header";
import Footer from "../components/footer/footer.js";
import MarqueeCard from "../components/marqueecard/marqueecaard.js";
import ServiceCard from "../components/servicecard/servicecard.js";

export default function Home() {
  const locations = [
    "Richmond, Tx",
    "Missouri City, Tx",
    "Houston, Tx",
    "Rosenburg, Tx",
    "Katy, Tx",
    "Sugarland, Tx",
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
          <div className="section">
            <div>
              <h2 className="h2">Featured Services</h2>
            </div>
            <div className="service-grid">
              <ServiceCard src={"/images/featured-services/hts.png"} />
              <ServiceCard src={"/images/featured-services/tvmount.png"} />
              <ServiceCard src={"/images/featured-services/chandinstall.png"} />
              <ServiceCard src={"/images/featured-services/cabinets.png"} />
            </div>
          </div>
          <div className="section">
            <div>
              <h2 className="h2">Service Areas</h2>
            </div>
            <div className="section-grid">
              {locations.map((location) => (
                <div key={location}>{location}</div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
