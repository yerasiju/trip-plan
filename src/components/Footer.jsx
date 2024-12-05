import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <div className={styles.contactInfo}>
          <p>Email: heavennearyou@gmail.com</p>
          <p>Phone: +7 702 276 67 97</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 GoHeaven. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
