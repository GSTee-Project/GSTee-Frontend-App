import { Outlet } from "react-router-dom"
import Navbar from "../../ui/guestNavbar/navbar"
import styles from './guestLayout.module.css'


const GuestLayout = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.outlet}>
                <Outlet />
            </div>
        </div>
    )
}

export default GuestLayout