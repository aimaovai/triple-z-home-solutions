"use client";

import Header from "../components/header/header";
import Footer from "../components/footer/footer.js";

import SectionCard from "../components/sectioncard/sectioncard.js";
import { ArrowBack, ArrowCircleRightOutlined, ArrowForward } from "@mui/icons-material";

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
          <div style={{ display: "flex", justifyContent: "center", height: "fit-content", position: "relative"}}>
            <VideoComponent/>
            <div className="overlay">
              Serving the Greater Houston Area
            </div>
          </div>
          <div className="featured-services-section">
            <div style={{ width: "40%", height: "80%", backgroundImage: "url(/images/services/hts.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
            <div className="featured-services">
              <h1 className="h1">Featured Services</h1>
              <div style={{ width: "100%", display: "flex", flexDirection: "row", alignSelf: "flex-start", gap: "10px", paddingLeft: "10%" }}>
                <div style={{ width: "85%", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px"}}>
                  <h2 style={{ color: "white" }}>Installations</h2>
                  <text style={{ color: "white", fontSize: "1rem"}}>Home Theater Systems</text>
                  <text style={{ color: "white", fontSize: "1rem"}}>Reverse Osmosis Systems</text>
                  <text style={{ color: "white", fontSize: "1rem"}}>TV Mounting</text>
                </div>
                <div style={{ width: "fit-content", height: "fit-content", marginTop: "10%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <text style={{ color: "white", fontSize: "1rem", cursor: "pointer", fontStyle: "italic"}} onClick={() => window.location.href = "/services"}>See more <ArrowCircleRightOutlined style={{ width: "20%", height: "10%", color: "white" }}/></text>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "400px", backgroundColor: "white", border: "5px solid black", flexDirection: "row", display: "flex", alignItems: "center" }}>
            <div style={{ width: "40%", height: "80%", backgroundColor: "black", backgroundSize: "cover", backgroundPosition: "center", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <h2 className="h2">Service Areas</h2>
            </div>
            <div style={{ width: "60%", height: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <div style={{ width: "100%", display: "flex", flexDirection: "row", alignSelf: "flex-start", gap: "10px", paddingLeft: "10%" }}>
              <div className="section-grid" style={{ color: "black" }}>
                {locations.map((location) => (
                  <div key={location}>{location}</div>
                ))}
              </div>
              </div>
            </div>
          </div>
          <SectionCard backgroundColor="white">
            <div>
              <h1 className="h1" style={{ color: "black" }}>Testimonials</h1>
            </div>
            <div style={{ color: "black", width: "75%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <ArrowBack style={{ width: "5%", height: "5%", color: "black", cursor: "pointer" }} onClick={() => {}}/>
              <text style={{ color: "black", fontSize: "large", textAlign: "center", padding: "3%"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, delectus rem tenetur reiciendis optio aliquid odio mollitia explicabo, dolore repellat nostrum dicta maxime quia quo iure nemo pariatur inventore odit.</text>
              <ArrowForward style={{ width: "5%", height: "5%", color: "black", cursor: "pointer" }} onClick={() => {}}/>
            </div>
            <div style={{ height: "10px", backgroundColor: "black" }} />
          </SectionCard>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const VideoComponent = () => {
  return (
    <div style={{ width: '100%', height: 'auto', zIndex: -1 }}>
      <video 
        width="100%" 
        height="auto" 
        autoPlay 
        loop 
        muted
      >
        <source src="/videos/20250322_2013_Modern Living Assembly_simple_compose_01jq0ftmjbekh8tmhhjpck51fn.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};