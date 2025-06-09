import styles from './helpCenter.module.css'
import { FiSearch } from 'react-icons/fi';
import { BiSolidChat, BiEnvelope, BiGroup } from 'react-icons/bi';
import { BsChatTextFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";

const HelpCenter = () => {
  return (
    <>
      <div className={styles.title}>Help Center</div>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search" />
        <FiSearch className={styles.searchIcon} />
      </div>

      <h4 className={styles.sectionHeader}>Popular Help Topics</h4>

      <div className={styles.topicSection}>
        <h5>Getting Started</h5>
        <ul>
          <li>How to create an account</li>
          <li>Navigating the dashboard</li>
        </ul>

        <h5>Gamified Learning</h5>
        <ul>
          <li>How to earn points and badges</li>
          <li>Join challenges or leaderboards</li>
        </ul>

        <h5>Account Settings</h5>
        <ul>
          <li>Updating your profile</li>
          <li>Changing your password</li>
          <li>Privacy & notification settings</li>
        </ul>

        <h5>Technical Issues</h5>
        <ul>
          <li>Troubleshooting login problems</li>
          <li>Website not loading</li>
        </ul>

        <h5>Data & Privacy</h5>
        <ul>
          <li>How your data is used</li>
          <li>Downloading or deleting your data</li>
        </ul>
      </div>

      <h4 className={styles.contactHeader}>Contact support</h4>
      <ul className={styles.contactList}>
        <li><BsChatTextFill /> Live Chat</li>
        <li><FaEnvelope /> Email Support</li>
        <li><HiUserGroup /> Community Forum</li>
      </ul>
    </>
  )
}

export default HelpCenter