import styles from './dashboardNavbar.module.css'
import logo from '../../../assets/images/Logo-Coloured.svg'
import { FaRegBell } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TbMenuDeep } from "react-icons/tb";

const DashboardNavbar = ({ showMenu = true, setIsMobileSidebarOpen }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const paths = [
    '/dashboard',
    '/dashboard/play-games',
    '/dashboard/courses',
    '/dashboard/levels&badges',
    '/dashboard/power-ups'
  ]

  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown(showDropDown => !showDropDown);
  }

  return (
    <div className={styles.navbar} onClick={() => { if (showDropDown) setShowDropDown(false) }}>
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
        <>
          <div className={`${styles.smallContainer} ${styles.right}`}>
            <FaRegBell size={22} className={`${styles.bellIcon} ${location.pathname === '/dashboard/notifications' && styles.purple}`} onClick={() => navigate('/dashboard/notifications')} />
            <FaCircleUser onClick={() => navigate('/dashboard/profile')} size={36} className={styles.userIcon} />
            <IoIosArrowDown size={22} className={styles.arrowIcon} style={{ transform: showDropDown ? 'rotate(-180deg)' : 'rotate(0deg)' }} onClick={toggleDropDown} />

            {showDropDown &&
              <div className={styles.dropDownBox}>
                <div className={styles.mainNavlinks}>
                  <p onClick={() => navigate('/dashboard')}>Dashboard</p>
                  <p onClick={() => navigate('/dashboard/play-games')}>Game mode</p>
                  <p onClick={() => navigate('/dashboard/courses')}>Courses</p>
                  <p onClick={() => navigate('/dashboard/levels&badges')}>Levels & Badges</p>
                  <p onClick={() => navigate('/dashboard/power-ups')}>Power-ups</p>
                </div>
                <p onClick={() => navigate('/dashboard/profile')}>Profile</p>
                <p onClick={() => navigate('/dashboard/edit-profile')}>Account</p>
                <p>Logout</p>
              </div>}
          </div>
          <TbMenuDeep className={styles.menuIcon} onClick={() => {if (setIsMobileSidebarOpen) {setIsMobileSidebarOpen(prev => !prev)}}} />
        </>}
    </div>
  )
}

export default DashboardNavbar