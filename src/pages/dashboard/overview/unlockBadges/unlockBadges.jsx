import styles from './unlockBadges.module.css'

const UnlockBadges = () => {

  const badges_data = [
    {
      name: 'Gold Streak',
      month: 'April 2025',
      color: '#FBBC05'
    },
    {
      name: 'Boss Slayer',
      month: 'March 2025',
      color: '#0866FF'
    },
    {
      name: 'Speed Demon',
      month: 'February 2025',
      color: '#EA4335'
    },
    {
      name: 'Battle Champ',
      month: 'February 2025',
      color: '#2F6A47'
    },

    {
      name: 'Streak Starter',
      month: 'January 2025',
      color: '#D47129'
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Unlock Badges</h3>
        <span>View All</span>
      </div>
      <div>
        {badges_data.map((badge, index) => (
          <div key={index} className={styles.badge}>
            <div style={{ backgroundColor: badge.color }} className={styles.circle}></div>
            <div>
              <h3>{badge.name}</h3>
              <p>{badge.month}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UnlockBadges