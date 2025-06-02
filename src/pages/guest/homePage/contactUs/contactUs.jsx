import React from 'react'
import styles from './contactUs.module.css'
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";

const ContactUs = ({ onClose }) => {
    return (
        <div className={styles.content}>
            <h3>Contact Details</h3>
            <p>Want to reach out to us? We'd love to head from you!</p>
            <div className={styles.contactContainer}>
                <div className={styles.contactBox}>
                    <IoMail className={styles.icon} />
                    <div>
                        <h4> Email</h4>
                        <p>GSTee@gmail.com</p>
                    </div>
                </div>
                <div className={styles.contactBox}>
                    <FaPhone size={36} className={styles.icon} />
                    <div>
                        <h4> Phone</h4>
                        <p>+234-8134-762-92</p>
                    </div>
                </div>
            </div>
            <button className={styles.btn} onClick={onClose}>close</button>
        </div>
    )
}

export default ContactUs