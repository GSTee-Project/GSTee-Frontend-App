import { Outlet } from "react-router-dom"
import DashboardNavbar from "../../ui/dashboardNavbar/dashboardNavbar"
import DashboardSidebar from "../../ui/dashboardSidebar/dashboardSidebar"
import styles from './dashboardLayout.module.css'

const DashboardLayout = () => {
  return (
    <div className={styles.layout}>
      <DashboardNavbar />
      <div className={styles.contentSection}>
        <DashboardSidebar />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default DashboardLayout