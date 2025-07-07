import { Outlet, useLocation } from "react-router-dom"
import DashboardNavbar from "../../ui/dashboardNavbar/dashboardNavbar"
import DashboardSidebar from "../../ui/dashboardSidebar/dashboardSidebar"
import styles from './dashboardLayout.module.css'
import { useEffect, useRef, useState } from "react"
import BottomNav from "../../ui/bottomNav/bottomNav"

const DashboardLayout = () => {

  const location = useLocation();

  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollTo({ top: 0 });
    }
  }, [location.pathname]);

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <DashboardNavbar setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
      <div className={styles.contentSection}>
        <DashboardSidebar isMobileSidebarOpen={isMobileSidebarOpen} setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
        <div className={styles.outlet} onClick={() => setIsMobileSidebarOpen(false)} ref={pageRef}>
          <Outlet />
        </div>
        <BottomNav />
      </div>

    </div>
  )
}

export default DashboardLayout