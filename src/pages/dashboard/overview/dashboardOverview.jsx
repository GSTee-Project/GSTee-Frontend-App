import DashboardPageHeader from "../../../components/ui/dashboardPageHeader/dashboardPageHeader"
import DailyQuest from "./dailyQuest/dailyQuest"
import styles from './dashboardOverview.module.css'
import Leaderboard from "./leaderboard/leaderboard"
import Ongoing from "./ongoing/ongoing"
import UnlockBadges from "./unlockBadges/unlockBadges"

const DashboardOverview = () => {
  return (
    <div className={styles.page}>
      <DashboardPageHeader headText="Welcome back James!" g_coin={1800} streak={7} heart={5} />
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <Ongoing />
          <DailyQuest />
        </div>
        <div className={styles.rightContent}>
          <UnlockBadges />
          <Leaderboard />
        </div>
      </div>
    </div>
  )
}

export default DashboardOverview