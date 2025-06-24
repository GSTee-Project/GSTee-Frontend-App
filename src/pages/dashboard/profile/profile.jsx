import Notifications from '../leaderboard/notifications/notifications'
import Achievements from './components/achievements'
import AddFriend from './components/addFriend'
import BasicInfo from './components/basicInfo'
import FriendList from './components/friendList'
import FriendStreak from './components/friendStreak'
import Overview from './components/overview'
import UnlockedBadges from './components/unlockedBadges'
import styles from './profile.module.css'

const Profile = () => {
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <BasicInfo />
        <div style={{ paddingBottom: '50px', borderBottom: '1px solid #00000080', marginBottom: '40px' }}>
          <Overview />
          <FriendStreak />
        </div>
        <UnlockedBadges />
        <Achievements />
      </div>

      <div className={styles.right}>
        <FriendList />
        <Notifications />
        <AddFriend />
      </div>
    </div>
  )
}

export default Profile