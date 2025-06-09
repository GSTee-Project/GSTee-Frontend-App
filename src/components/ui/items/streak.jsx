import streakIcon from '../../../assets/images/streak.svg'
import styles from './items.module.css'

const Streak = ({value = 0}) => {
    return (
        <div className={styles.container} style={{color: '#D47129'}}>
            <img src={streakIcon} className={styles.image} alt="" />
            {value}
        </div>
    )
}

export default Streak