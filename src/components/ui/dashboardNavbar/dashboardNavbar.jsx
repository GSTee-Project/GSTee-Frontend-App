import styles from './dashboardNavbar.module.css'
import logo from '../../../assets/images/Logo-Coloured.svg'
import { FaRegBell } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

const DashboardNavbar = ({ showMenu = true }) => {

  const location = useLocation();

  const paths = [
    '/dashboard',
    '/dashboard/play-games',
    '/dashboard/courses',
    '/dashboard/levels&badges',
    '/dashboard/power-ups'
  ]

  return (
    <div className={styles.navbar}>
      <div className={styles.smallContainer}>
        <img src={logo} alt="" />
      </div>
      {showMenu &&
        <div className={styles.navLinks}>
          <Link to={paths[0]} className={location.pathname === paths[0] ? styles.active : ''}>Dashboard</Link>
          <Link to={paths[1]} className={location.pathname === paths[1] ? styles.active : ''}>Game Modes</Link>
          <Link to={paths[2]} className={location.pathname.includes(paths[2]) ? styles.active : ''}>Courses</Link>
          <Link to={paths[3]} className={location.pathname === paths[3] ? styles.active : ''}>Levels & Badges</Link>
          <Link to={paths[4]} className={location.pathname === paths[4] ? styles.active : ''}>Power-Ups</Link>
        </div>}
      {showMenu &&
        <div className={`${styles.smallContainer} ${styles.left}`}>
          <FaRegBell size={22} className={styles.bellIcon} />
          <FaCircleUser size={36} className={styles.userIcon} />
          <IoIosArrowDown size={22} className={styles.arrowIcon} />
        </div>}

    </div>
  )
}

export default DashboardNavbar