import styles from './dashboardNavbar.module.css'
import logo from '../../../assets/images/Logo-Coloured.svg'
import { FaRegBell } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const DashboardNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.smallContainer}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.navLinks}>
        <li>Dashboard</li>
        <li>Game Modes</li>
        <li>Courses</li>
        <li>Levels & Badges</li>
        <li>Power-Ups</li>
      </div>
      <div className={styles.smallContainer}>
        <FaRegBell size={22} className={styles.bellIcon} />
        <FaCircleUser size={36} className={styles.userIcon} />
        <IoIosArrowDown size={22} className={styles.arrowIcon} />
      </div>

    </div>
  )
}

export default DashboardNavbar