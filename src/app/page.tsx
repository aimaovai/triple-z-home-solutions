'use client';
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header/header";

export default function Home() {
  return (
    <div className="body">
      <Header />
      <div className="header">Triple Z Home Solutions</div>
    </div>
  );
}
