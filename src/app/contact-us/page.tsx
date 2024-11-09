import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import React from "react";
import styles from "./contact.module.css";
import ContactForm from "../../components/contactform/contactform";

export default function ContactUs() {
  return (
    <div className="body">
      <Header />

      <div className={styles.container}>
        <div style={{ height: "10px", backgroundColor: "black" }} />
        <h1 className={styles.title}>Contact Us</h1>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
