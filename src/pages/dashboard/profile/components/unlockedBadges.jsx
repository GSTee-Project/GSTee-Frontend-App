import styles from '../profile.module.css'
import speedDemonImg from '../../../../assets/images/speedDemonWhite.svg'
import bossSlayerImg from '../../../../assets/images/bossSlayerWhite.svg'
import goldStreakImg from '../../../../assets/images/goldStreak.svg'

const UnlockedBadges = () => {

    const unlockedBadges = [
        {
            image: speedDemonImg,
            name: 'Speed Demon',
            date: 'February'
        },
        {
            image: bossSlayerImg,
            name: 'Boss Slayer',
            date: 'March'
        },
        {
            image: goldStreakImg,
            name: 'Gold Streak',
            date: 'April'
        },
    ]

    return (
        <div className={styles.unlockedBadgesSection}>
            <header>
                <h3>Unlocked Badges</h3>
                <span>See all</span>
            </header>
            <div className={styles.badgesContainer}>
                {unlockedBadges.map((badge, index) => (
                    <div key={index} className={styles.badge}>
                        <div className={styles.imageContainer} style={{backgroundColor: badge.name === 'Boss Slayer' ? '#EA4335' : badge.name === 'Gold Streak' ? '#D4A729' : '#0866FF'}}>
                            <img src={badge.image} alt="" />
                        </div>
                        <h4>{badge.name}</h4>
                        <p>{badge.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UnlockedBadges