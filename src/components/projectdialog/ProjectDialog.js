"use client";

import React from "react";
import styles from "./contactdialog.module.css";
import { Button } from "@mui/material";
import { useState } from "react";
import { Close } from "@mui/icons-material";
// import emailjs from "emailjs-com";

export default function ProjectDialog({ close }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    close = true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        setStatus("Failed to send message.");
      });
  };
  return (
    <div className={close === true ? styles.hidden : styles.container}>
      <Close onClick={() => handleClose()} cursor="pointer" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>
          Ready to transform your space? Contact Triple Z Home Solutions to
          discuss how we can bring your vision to life with expert renovations
          and personalized solutions. Let&apos;s make your dream home a reality!
        </p>
        <div>
          <div className={styles.entry}>
            <label htmlFor="name" aria-label="Enter your name.">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              aria-label="Enter your name."
            />
          </div>
          <div className={styles.entry}>
            <label htmlFor="email" aria-label="Enter your email address.">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              aria-label="Enter your email address."
            />
          </div>
          <div className={styles.entry}>
            <label htmlFor="phone" aria-label="Enter your phone number.">
              Phone
            </label>
            <input
              type="text"
              id="frm-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              aria-label="Enter your phone number."
            />
          </div>
          <div className={styles.entry}>
            <label htmlFor="message" aria-label="Enter your message here.">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.text_area}
              aria-label="Enter your message here."
            />
          </div>
          <div className={styles["button-section"]}>
            <Button
              type="submit"
              className={styles["button"]}
              aria-label="Submit your message."
            >
              Submit
            </Button>
          </div>
          <div>{status && <p className={styles.disappear}>{status}</p>}</div>
        </div>
      </form>
    </div>
  );
}
