import { Outlet } from 'react-router-dom'
import DashboardNavbar from '../../ui/dashboardNavbar/dashboardNavbar'
import styles from './gameLayout.module.css'

const GameLayout = () => {
    return (
        <div>
            <DashboardNavbar showMenu={false} />
            <div className={styles.outlet}>
                <Outlet />
            </div>
        </div>
    )
}

export default GameLayout