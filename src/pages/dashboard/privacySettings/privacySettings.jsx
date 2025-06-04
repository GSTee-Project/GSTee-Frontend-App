import { MdKeyboardArrowDown } from 'react-icons/md';
import ToggleButton from '../../../components/ui/toggleButton/toggleButton';
import styles from './privacySettings.module.css';

const PrivacySettings = () => {
  return (
    <div className={styles.page}>
      <h3>Privacy Settings</h3>

      <div className={styles.menu}>
        Data Sharing
        <ToggleButton on={false} />
      </div>

      <div className={styles.group}>
        <h4>Profile Visibility</h4>
        <div>
          <div className={styles.menu}>
            Public
            <ToggleButton on={true} />
          </div>
          <div className={styles.menu}>
            Friends only
            <ToggleButton on={true} />
          </div>
          <div className={styles.menu}>
            Private
            <ToggleButton on={true} />
          </div>
        </div>
      </div>

      <div className={styles.group}>
        <h4>Leaderboard Name Display</h4>
        <div>
          <div className={styles.menu}>
            Show full name
            <ToggleButton on={true} />
          </div>
          <div className={styles.menu}>
            Show nickname only
            <ToggleButton on={true} />
          </div>
          <div className={styles.menu}>
            Appear as anonymous
            <ToggleButton on={true} />
          </div>
        </div>
      </div>

      <div className={styles.group}>
        <h4>Communication Settings</h4>
        <div>
          <div className={styles.menu}>
            Receive email notifications
            <ToggleButton on={true} />
          </div>
          <div className={styles.menu}>
            Receive in-app announcements
            <ToggleButton on={true} />
          </div>
          <div className={styles.menu}>
            Allow other users to message me
            <ToggleButton on={true} />
          </div>
        </div>
      </div>

      <div className={styles.group}>
        <h4>Security and Data Management</h4>
        <div>
          <div className={styles.menu}>
            Two-factor authentication
            <ToggleButton on={true} />
          </div>
        </div>

        <p className={styles.downloadText}>Download my data</p>
      </div>



    </div>
  )
}

export default PrivacySettings