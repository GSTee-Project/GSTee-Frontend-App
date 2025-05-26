import styles from './dashboardSidebar.module.css'
import UserProfile from './userProfile/userProfile'
import { RiDashboardLine } from "react-icons/ri";
import { FaPersonChalkboard } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuStar } from "react-icons/lu";
import { BsLightning } from "react-icons/bs";
import { MdOutlineLeaderboard } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { PiBugDroidBold } from "react-icons/pi";
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const DashboardSidebar = () => {

  const location = useLocation();

  const paths = ['/dashboard', '/dashboard/my-courses', '/dashboard/play-games', '/dashboard/levels&badges', 
    '/dashboard/power-ups', '/dashboard/leaderboard', '/dashboard/help', '/dashboard/report-bug']

  return (
    <div className={styles.sidebar}>
        <UserProfile />
        
        <div className={styles.sidebarMenu}>
          <Link to={paths[0]} className={location.pathname === paths[0] ? styles.active : ''}><RiDashboardLine className={styles.sidebarMenuIcon} /> Dashboard</Link>
          <Link to={paths[1]} className={location.pathname.includes(paths[1]) ? styles.active : ''}><FaPersonChalkboard className={styles.sidebarMenuIcon} /> My Courses</Link>
          <Link to={paths[2]} className={location.pathname.includes(paths[2]) ? styles.active : ''}><IoGameControllerOutline className={styles.sidebarMenuIcon}  /> Play Games</Link>
          <Link to={paths[3]} className={location.pathname.includes(paths[3]) ? styles.active : ''}><LuStar className={styles.sidebarMenuIcon}  /> Levels & Badges</Link>
          <Link to={paths[4]} className={location.pathname.includes(paths[4]) ? styles.active : ''}><BsLightning className={styles.sidebarMenuIcon}  /> Power-Ups</Link>
          <Link to={paths[5]} className={location.pathname.includes(paths[5]) ? styles.active : ''}><MdOutlineLeaderboard className={styles.sidebarMenuIcon}  /> Leaderboard</Link>
          <Link to={paths[6]} className={location.pathname.includes(paths[6]) ? styles.active : ''}><MdHelpOutline className={styles.sidebarMenuIcon}  /> Help</Link>
          <Link to={paths[7]} className={location.pathname.includes(paths[7]) ? styles.active : ''}><PiBugDroidBold className={styles.sidebarMenuIcon}  /> Report Bug</Link>
        </div>
    </div>
  )
}

export default DashboardSidebar