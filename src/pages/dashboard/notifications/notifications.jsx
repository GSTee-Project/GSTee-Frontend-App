import { useState } from 'react'
import styles from './notifications.module.css'

const Notifications = () => {

  const generalNotification = [
    'You just earned the Quiz Whiz badge, great job!',
    'Level up! You’re now on Level 5',
    'Reminder: Your daily quest is still incomplete',
    'New course added: “Mastering GST 102”',
    "You’ve completed 3 lessons in a row",
    'Leaderboard updated, see where you rank now',
    'New challenge available: Can you beat your quiz score?'
  ]
  const emailNotification = [
    'Latest email notification ',
    'You just earned the Quiz Whiz badge, great job!',
    'Level up! You’re now on Level 5',
    'Reminder: Your daily quest is still incomplete',
    'New course added: “Mastering GST 102”',
    "You’ve completed 3 lessons in a row",
    'Leaderboard updated, see where you rank now',
    'New challenge available: Can you beat your quiz score?'
  ]

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className={styles.page}>
      <h3>Notifications</h3>
      <div className={styles.group}>
        <h4 className={currentTab === 0 && styles.active } onClick={() => setCurrentTab(0)}>General</h4>
        <h4 className={currentTab === 1 && styles.active } onClick={() => setCurrentTab(1)}>Email</h4>
      </div>
      {(currentTab === 0 ? generalNotification : emailNotification).map((notification, index) => (
        <div key={index} className={styles.notificationBox}>{notification}</div>
      ))}

    </div>
  )
}

export default Notifications