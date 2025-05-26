import styles from './DashboardSidebar.module.css'
import UserProfile from './userProfile/userProfile'
import { RiDashboardLine } from "react-icons/ri";
import { FaPersonChalkboard } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuStar } from "react-icons/lu";
import { BsLightning } from "react-icons/bs";
import { MdOutlineLeaderboard } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { PiBugDroidBold } from "react-icons/pi";

const DashboardSidebar = () => {
  return (
    <div className={styles.sidebar}>
        <UserProfile />
        
        <div className={styles.sidebarMenu}>
          <li><RiDashboardLine className={styles.sidebarMenuIcon} /> Dashboard</li>
          <li><FaPersonChalkboard className={styles.sidebarMenuIcon} /> My Courses</li>
          <li><IoGameControllerOutline className={styles.sidebarMenuIcon}  /> Play Games</li>
          <li><LuStar className={styles.sidebarMenuIcon}  /> Levels & Badges</li>
          <li><BsLightning className={styles.sidebarMenuIcon}  /> Power-Ups</li>
          <li><MdOutlineLeaderboard className={styles.sidebarMenuIcon}  /> Leaderboard</li>
          <li><MdHelpOutline className={styles.sidebarMenuIcon}  /> Help</li>
          <li><PiBugDroidBold className={styles.sidebarMenuIcon}  /> Report Bug</li>
        </div>
    </div>
  )
}

export default DashboardSidebar