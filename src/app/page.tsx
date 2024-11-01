"use client";
import Image from "next/image";
import Header from "../components/header/header";
import Footer from "../components/footer/footer.js";

export default function Home() {
  const locations = [
    "Richmond",
    "Houston",
    "Katy",
    "Sugarland",
    "Rosenburg",
    "Missouri City",
  ];
  return (
    <div className="body">
      <Header />
      <div>
        <div className="header">
          <div className="title">Triple Z Home Solutions</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Image
              src={"/images/before.png"}
              alt="before"
              width={500}
              height={500}
              style={{ marginRight: "20px" }}
              className="images"
            />
            <Image
              src={"/images/after.png"}
              alt="before"
              width={500}
              height={500}
              style={{ marginLeft: "20px" }}
              className="images"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <h2 className="h2 mea-culpa-regular">Do more with Us!</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
              marginTop: "30px",
            }}
          >
            <div style={{ fontSize: "xx-large" }}>Service Areas</div>
            <div className="location-grid">
              {locations.map((location) => (
                <div key={location}>
                  <li>{location}</li>
                </div>
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
