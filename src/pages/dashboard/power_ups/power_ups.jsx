import DashboardPageHeader from '../../../components/ui/dashboardPageHeader/dashboardPageHeader'
import styles from './power_ups.module.css'
import streakFreeze from '../../../assets/images/streak-freeze.svg'
import shield from '../../../assets/images/shield.svg'
import timerBoost from '../../../assets/images/timer-boost.svg'
import xpBoost from '../../../assets/images/xp-boost.svg'
import turboMode from '../../../assets/images/turbo-mode.svg'
import heart from '../../../assets/images/heart.svg'
import hintBoost from '../../../assets/images/hint-boost.svg'

const Power_Ups = () => {

  const myItems = [
    {
      image: streakFreeze,
      name: 'Streak Freeze',
      amount: '2'
    },
    {
      image: shield,
      name: 'Shield',
      amount: '1'
    },
    {
      image: timerBoost,
      name: 'Timer Boost',
      amount: '3'
    },
    {
      image: xpBoost,
      name: 'XP Boost',
      amount: '1'
    },
    {
      image: turboMode,
      name: 'Turbo Mode',
      amount: '0'
    },
    {
      image: heart,
      name: 'Heart',
      amount: '5'
    },
    {
      image: hintBoost,
      name: 'Hint Boost',
      amount: '0'
    },
  ]

  return (
    <div className={styles.page}>
      <DashboardPageHeader headText='Power Ups' g_coin={1800} />
      <div className={styles.itemSection}>
        <h3>My Items</h3>
        <div className={styles.itemsContainer}>
          {myItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <img src={item.image} alt="" />
              <h4>{item.name}</h4>
              <p style={{color: Number(item.amount) < 1 ? '#EA4335' : '#03A9F4'}}>x {item.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Power_Ups;