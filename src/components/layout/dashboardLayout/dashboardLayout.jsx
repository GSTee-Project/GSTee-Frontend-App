import { Outlet, useLocation } from "react-router-dom"
import DashboardNavbar from "../../ui/dashboardNavbar/dashboardNavbar"
import DashboardSidebar from "../../ui/dashboardSidebar/dashboardSidebar"
import styles from './dashboardLayout.module.css'
import { useEffect, useRef } from "react"

const DashboardLayout = () => {

  const location = useLocation();

  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollTo({ top: 0 });
    }
  }, [location.pathname]);



  return (
    <div className={styles.layout}>
      <DashboardNavbar />
      <div className={styles.contentSection}>
        <DashboardSidebar />
        <div className={styles.outlet} ref={pageRef}>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default DashboardLayout