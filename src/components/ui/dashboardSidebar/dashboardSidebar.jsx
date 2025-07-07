import styles from './dashboardSidebar.module.css'
import UserProfile from './userProfile/userProfile'
import { RiDashboardLine } from "react-icons/ri";
import { FaCircleUser, FaPersonChalkboard } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuStar } from "react-icons/lu";
import { BsLightning } from "react-icons/bs";
import { MdOutlineLeaderboard } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { PiBugDroidBold } from "react-icons/pi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaRegBell } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { CgCloseR } from "react-icons/cg";

const DashboardSidebar = ({ isMobileSidebarOpen, setIsMobileSidebarOpen }) => {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMobileSidebarOpen(false);
    setShowDropDown(false);
  }, [location.pathname]);

  const paths = ['/dashboard', '/dashboard/my-courses', '/dashboard/play-games', '/dashboard/levels&badges',
    '/dashboard/power-ups', '/dashboard/leaderboard', '/dashboard/help-center', '/dashboard/report-bug']

  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown(showDropDown => !showDropDown);
  }

  return (
    <div className={styles.sidebar} style={{ left: !isMobileSidebarOpen && '-340px' }} >
      <CgCloseR size={30} className={styles.closeIcon} onClick={() => setIsMobileSidebarOpen(false)}/>
      <div className={styles.userProfileContainer}>
        <UserProfile />
      </div>

      <div className={styles.sidebarMenu}>
        <Link to={paths[0]} className={location.pathname === paths[0] ? styles.active : ''}><RiDashboardLine className={styles.sidebarMenuIcon} /> <p>Dashboard</p></Link>
        <Link to={paths[1]} className={location.pathname.includes(paths[1]) ? styles.active : ''}><FaPersonChalkboard className={styles.sidebarMenuIcon} /><p>My Courses</p> </Link>
        <Link to={paths[2]} className={location.pathname.includes(paths[2]) ? styles.active : ''}><IoGameControllerOutline className={styles.sidebarMenuIcon} /><p>Play Games</p> </Link>
        <Link to={paths[3]} className={location.pathname.includes(paths[3]) ? styles.active : ''}><LuStar className={styles.sidebarMenuIcon} /> <p>Levels & Badges</p></Link>
        <Link to={paths[4]} className={location.pathname.includes(paths[4]) ? styles.active : ''}><BsLightning className={styles.sidebarMenuIcon} /><p>Power-Ups</p> </Link>
        <Link to={paths[5]} className={location.pathname.includes(paths[5]) ? styles.active : ''}><MdOutlineLeaderboard className={styles.sidebarMenuIcon} /><p>Leaderboard</p> </Link>
        <Link to={paths[6]} className={location.pathname.includes(paths[6]) ? styles.active : ''}><MdHelpOutline className={styles.sidebarMenuIcon} /> <p>Help</p></Link>
        <Link to={paths[7]} className={location.pathname.includes(paths[7]) ? styles.active : ''}><PiBugDroidBold className={styles.sidebarMenuIcon} /> <p>Report Bug</p></Link>
        
        {/* --- Only displayed in mobile sidebar --- */}
        <div className={styles.mobileBottomContent}>
          <button>LOGOUT</button>
          <div className={styles.profileSection}>
            <FaRegBell size={22} className={styles.bellIcon} onClick={() => navigate('/dashboard/notifications')} />
            <FaCircleUser onClick={() => navigate('/dashboard/profile')} size={36} className={styles.userIcon} />
            <IoIosArrowDown size={22} className={styles.arrowIcon} style={{ transform: showDropDown ? 'rotate(-180deg)' : 'rotate(0deg)' }} onClick={toggleDropDown} />
            {showDropDown &&
              <div className={styles.dropDownBox}>
                <p onClick={() => navigate('/dashboard/profile')}>Profile</p>
                <p onClick={() => navigate('/dashboard/edit-profile')}>Account</p>
              </div>}
          </div>
        </div>
      </div>


    </div>
  )
}

export default DashboardSidebar