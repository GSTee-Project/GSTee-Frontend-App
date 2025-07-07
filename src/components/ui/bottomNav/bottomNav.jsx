import { useLocation } from 'react-router-dom';
import styles from './bottomNav.module.css'
import { FaPersonChalkboard } from 'react-icons/fa6';
import { IoGameControllerOutline } from 'react-icons/io5';
import { LuStar } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FiUser } from "react-icons/fi";


const BottomNav = () => {

    const location = useLocation();

    const paths = ['/dashboard', '/dashboard/my-courses', '/dashboard/play-games', '/dashboard/levels&badges', '/dashboard/profile']

    return (
        <div className={styles.bottomNav}>
            <Link to={paths[0]} className={location.pathname === paths[0] ? styles.active : ''}><IoMdHome className={styles.menuIcon} /> <p>Home</p></Link>
            <Link to={paths[2]} className={location.pathname.includes(paths[2]) ? styles.active : ''}><IoGameControllerOutline className={styles.menuIcon} /><p>Play</p> </Link>
            <Link to={paths[1]} className={location.pathname.includes(paths[1]) ? styles.active : ''}><FaPersonChalkboard className={styles.menuIcon} /><p>Courses</p> </Link>
            <Link to={paths[3]} className={location.pathname.includes(paths[3]) ? styles.active : ''}><LuStar className={styles.menuIcon} /> <p>Badges</p></Link>
            <Link to={paths[4]} className={location.pathname.includes(paths[4]) ? styles.active : ''}><FiUser className={styles.menuIcon} /><p>Profile</p> </Link>
        </div>
    )
}

export default BottomNav