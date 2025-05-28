import DashboardPageHeader from "../../../components/ui/dashboardPageHeader/dashboardPageHeader"
import styles from './dashboardoverview.module.css'
import Ongoing from "./ongoing/ongoing"
import UnlockBadges from "./unlockBadges/unlockBadges"

const DashboardOverview = () => {
  return (
    <div className={styles.page}>
      <DashboardPageHeader headText="Welcome back James!" g_coin={1800} streak={7} heart={5} />
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <Ongoing />
        </div>
        <div className={styles.rightContent}>
          <UnlockBadges />
        </div>
      </div>
    </div>
  )
}

export default DashboardOverview