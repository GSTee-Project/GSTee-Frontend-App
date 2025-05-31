import React from 'react'
import styles from './ongoing.module.css'
import lessonImg from '../../../../assets/images/lesson_image.jpg'
import cupStarImg from '../../../../assets/images/cup-star.svg'
import streak from '../../../../assets/images/streak.svg'
import splash from '../../../../assets/images/splash.svg'


const Ongoing = () => {
    return (
        <div className={styles.page}>
            <div className={styles.ongoing}>
                <img src={lessonImg} alt="" />
                <h3>Ongoing Lesson</h3>
                <h5>Feasibility Studies</h5>
                <p>3/15 Slides Completed</p>
                <button>Continue</button>
            </div>
            <div className={styles.side}>
                <div className={styles.xpProgress}>
                    <img src={cupStarImg} alt="" />
                    <h3>XP Progress</h3>
                    <h3>300 / 500 XP</h3>
                    <div className={styles['progress-bar']}>
                        <div className={styles['progress']}></div>
                    </div>
                </div>
                <div className={styles.currentStreak}>
                    <img src={streak} alt="" />
                    <h3>Current Streak</h3>
                    <h3>7 days</h3>
                </div>
            </div>

        </div>
    )
}

export default Ongoing