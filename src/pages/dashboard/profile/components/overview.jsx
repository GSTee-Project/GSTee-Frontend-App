import styles from '../profile.module.css'
import lightningImg from '../../../../assets/images/lightning.svg'
import streakImg from '../../../../assets/images/streak.svg'
import g_coinImg from '../../../../assets/images/G-coin.svg'
import heartImg from '../../../../assets/images/heart.svg'

const Overview = () => {

    return (
        <div className={styles.overviewSection}>
            <h3>Overview</h3>
            <div className={styles.overviewCardContainer}>
                <div className={styles.overviewCard}>
                    <img src={streakImg} alt="" />
                    <div>
                        <h4>7</h4>
                        <p>Day Streak</p>
                    </div>
                </div>
                <div className={styles.overviewCard}>
                    <img src={lightningImg} alt="" />
                    <div>
                        <h4>700</h4>
                        <p>Total XP</p>
                    </div>
                </div>
                <div className={styles.overviewCard}>
                    <img src={g_coinImg} alt="" />
                    <div>
                        <h4>1800</h4>
                        <p>G-Coins</p>
                    </div>
                </div>
                <div className={styles.overviewCard}>
                    <img src={heartImg} alt="" />
                    <div>
                        <h4>5</h4>
                        <p>Hearts</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Overview