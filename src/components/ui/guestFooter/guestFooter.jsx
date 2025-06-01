import styles from './guestFooter.module.css';
import { FaFacebookF, FaPinterestP, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.section}>
          <h2 className={styles.logo}>GSTee</h2>
          <p className={styles.about}>
            GSTee is your go-to platform for making GST studies fun, interactive and rewarding.
          </p>
          <div className={styles.socials}>
            <FaFacebookF />
            <FaXTwitter />
            <FaPinterestP />
            <FaInstagram />
          </div>
        </div>

        <div className={styles.section}>
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Mission</li>
            <li>How It Works</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Student Guide</li>
            <li>Download Brochure</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Contact Info</h4>
          <p>+234-8134-762-92</p>
          <p>GSTee@gmail.com</p>
          <p>7 Anipole Street, Ikeja, Lagos.</p>
        </div>
      </div>

      <div className={styles.bottom_bar}>
        <p>
          Copyright © 2025 <span>GSTee Website</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
