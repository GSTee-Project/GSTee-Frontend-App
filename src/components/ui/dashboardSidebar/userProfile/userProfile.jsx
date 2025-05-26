import Heart from '../heart/heart';
import styles from './UserProfile.module.css'
import { FaCircleUser } from "react-icons/fa6";

const UserProfile = () => {

    var no_hearts = 5;

    return (
        <div className={styles.profileSection}>
            <div className={styles.main}>
                <FaCircleUser className={styles.userIcon} />
                <div>
                    <h3>Tolu James</h3>
                    <p>700 XP</p>
                    <div className={styles['progress-bar']}>
                        <div className={styles['progress']}></div>
                    </div>
                </div>
            </div>
            <div className={styles.lowerSection}>
                <p>Novice Learner</p>
                <div className={styles.heartContainer}>
                    {Array.from({ length: no_hearts }).map((_, index) => (
                        <Heart key={index} color={'red'} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserProfile