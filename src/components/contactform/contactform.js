import React from "react";
import styles from "./contactform.module.css";
import { Button } from "@mui/material";

export default function ContactForm() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
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
              // value={formData.name}
              // onChange={handleChange}
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
              // value={formData.email}
              // onChange={handleChange}
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
              // value={formData.phone}
              // onChange={handleChange}
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
              // value={formData.message}
              // onChange={handleChange}
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
        </div>
      </form>
    </div>
  );
}
