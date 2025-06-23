import Notifications from '../leaderboard/notifications/notifications'
import BasicInfo from './components/basicInfo'
import FriendList from './components/friendList'
import FriendStreak from './components/friendStreak'
import Overview from './components/overview'
import styles from './profile.module.css'

const Profile = () => {
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <BasicInfo />
        <div style={{ paddingBottom: '50px', borderBottom: '1px solid #00000080' }}>
          <Overview />
          <FriendStreak />
        </div>
      </div>
      <div className={styles.right}>
        <FriendList />
        <Notifications />
      </div>
    </div>
  )
}

export default Profile