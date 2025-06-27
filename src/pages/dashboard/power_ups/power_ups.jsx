import DashboardPageHeader from '../../../components/ui/dashboardPageHeader/dashboardPageHeader'
import styles from './power_ups.module.css'
import streakFreeze from '../../../assets/images/streak-freeze.svg'
import shield from '../../../assets/images/shield.svg'
import timerBoost from '../../../assets/images/timer-boost.svg'
import xpBoost from '../../../assets/images/xp-boost.svg'
import turboMode from '../../../assets/images/turbo-mode.svg'
import heart from '../../../assets/images/heart.svg'
import hintBoost from '../../../assets/images/hint-boost.svg'
import g_coin from '../../../assets/images/G-coin.svg'

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

  const streakFreezeShop = [
    {
      duration: '1-day',
      price: '200'
    },
    {
      duration: '2-day',
      price: '400'
    },
    {
      duration: '3-day',
      price: '600'
    },
  ]

  const shieldShop = [
    {
      duration: '1 Piece',
      price: '150'
    },
    {
      duration: '2 Pieces',
      price: '300'
    },
    {
      duration: '3 Pieces',
      price: '450'
    },
  ]

  const timerBoostShop = [
    {
      duration: 'Single',
      price: '100'
    },
    {
      duration: '5 Pack',
      price: '450'
    },
    {
      duration: '10 Pack',
      price: '950'
    },
  ]

  const hintBoostShop = [
    {
      duration: 'Single',
      price: '200'
    },
    {
      duration: '5 Pack',
      price: '400'
    },
  ]

  return (
    <div className={styles.page}>
      <DashboardPageHeader headText='Power Ups' g_coin={1800} />

      {/* -- MY ITEMS SECTION --- */}
      <div className={styles.itemSection}>
        <h3>My Items</h3>
        <div className={styles.itemsContainer}>
          {myItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <img src={item.image} alt="" />
              <h4>{item.name}</h4>
              <p style={{ color: Number(item.amount) < 1 ? '#EA4335' : '#03A9F4' }}>x {item.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Streak Freeze Shop Section --- */}
      <div className={styles.shop}>
        <h3>Streak Freeze</h3>
        {streakFreezeShop.map((item, index) => (
          <div className={styles.itemRow} key={index}>
            <div className={styles.firstDiv}>
              <img src={streakFreeze} alt="" />
              <p>{item.duration}</p>
            </div>
            <div className={styles.secondDiv}>
              <img src={g_coin} alt="" />
              <p style={{color: '#0866FF'}}>{item.price}</p>
            </div>
            <button>Buy Now</button>
          </div>
        ))}
      </div>

      {/* --- Streak Freeze Shop Section --- */}
      <div className={styles.shop}>
        <h3>Shield</h3>
        {shieldShop.map((item, index) => (
          <div className={styles.itemRow} key={index}>
            <div className={styles.firstDiv}>
              <img src={shield} alt="" />
              <p>{item.duration}</p>
            </div>
            <div className={styles.secondDiv}>
              <img src={g_coin} alt="" />
              <p style={{color: '#0866FF'}}>{item.price}</p>
            </div>
            <button>Buy Now</button>
          </div>
        ))}
      </div>

      {/* --- Timer Boost Shop Section --- */}
      <div className={styles.shop}>
        <h3>Timer Boost</h3>
        {timerBoostShop.map((item, index) => (
          <div className={styles.itemRow} key={index}>
            <div className={styles.firstDiv}>
              <img src={timerBoost} alt="" />
              <p>{item.duration}</p>
            </div>
            <div className={styles.secondDiv}>
              <img src={g_coin} alt="" />
              <p style={{color: '#0866FF'}}>{item.price}</p>
            </div>
            <button>Buy Now</button>
          </div>
        ))}
      </div>

      {/* --- Hint Boost Shop Section --- */}
      <div className={styles.shop}>
        <h3>Hint Boost</h3>
        {hintBoostShop.map((item, index) => (
          <div className={styles.itemRow} key={index}>
            <div className={styles.firstDiv}>
              <img src={hintBoost} alt="" />
              <p>{item.duration}</p>
            </div>
            <div className={styles.secondDiv}>
              <img src={g_coin} alt="" />
              <p style={{color: '#0866FF'}}>{item.price}</p>
            </div>
            <button>Buy Now</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Power_Ups;