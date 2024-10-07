'use client';
import Image from "next/image";
// import Link from "next/link";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <div className="body">
      <Header />
      <div>
        <div className="header">
        <div className="title">Triple Z Home Solutions</div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "30px" }}>
            <Image
              src={"/images/before.png"}
              alt="before"
              width={500}
              height={500}
              style={{ marginRight: "20px" }}
            />
            <Image
              src={"/images/after.png"}
              alt="before"
              width={500}
              height={500}
              style={{ marginLeft: "20px" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "30px" }}>
            <Image
              src={"/images/before.png"}
              alt="before"
              width={500}
              height={500}
              style={{ marginRight: "20px" }}
            />
            <Image
              src={"/images/after.png"}
              alt="before"
              width={500}
              height={500}
              style={{ marginLeft: "20px" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "30px" }}>
            <Image
              src={"/images/before.png"}
              alt="before"
              width={500}
              height={500}
              style={{ marginRight: "20px" }}
            />
            <Image
              src={"/images/after.png"}
              alt="before"
              width={500}
              height={500}
              style={{ marginLeft: "20px" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
