import styles from '../profile.module.css'
import quizConquerorImg from '../../../../assets/images/quizConquerorAchievement.svg'
import starStreakImg from '../../../../assets/images/starStreakAchievement.svg'
import slideSurfer from '../../../../assets/images/slideSurferAchievement.svg'

const Achievements = () => {

    const achievements = [
        {
            image: quizConquerorImg,
            name: 'Quiz Conqueror',
            description: 'You scored above 80% on 5 quizzes in a row.'
        },
        {
            image: starStreakImg,
            name: 'Streak Star',
            description: 'You logged in and studied for 7 consecutive days.'
        },
        {
            image: slideSurfer,
            name: 'Slide Surfer',
            description: 'You completed 50 interactive slides without missing a day'
        },
    ]

    return (
        <div className={styles.achievementsSection}>
            <header>
                <h3>Achievements</h3>
                <span>See all</span>
            </header>
            <div className={styles.achievementsContainer}>
                {achievements.map((achievement, index) => (
                    <div key={index} className={styles.achievement}>
                        <div className={styles.achievementImageContainer}>
                            <img src={achievement.image} alt="" />
                        </div>
                        <div>
                            <h4>{achievement.name}</h4>
                            <p>{achievement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Achievements