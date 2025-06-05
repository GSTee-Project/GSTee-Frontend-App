import styles from './leaderboard.module.css'
import firstBadge from '../../../../assets/images/first_badge.svg'
import secondBadge from '../../../../assets/images/second_badge.svg'
import thirdBadge from '../../../../assets/images/third_badge.svg'

const TopCandidate = ({ position, picture, name, xp, variant }) => {

  const topThree = [firstBadge, secondBadge, thirdBadge];
  const containerClass = variant === 'global' ? `${styles.candidate} ${styles.global}` : styles.candidate;

  return (
    <div className={containerClass}>
      <div className={styles.left}>
           {position <= 3 ?
        <img src={topThree[position - 1]} />
        :
        <p className={styles.position}>{position}</p>
      }

      <img className={styles.profile} src={picture} alt="" />
      </div>
   
      <h4 className={styles.center}>{name}</h4>
      <span className={styles.right}>{xp} XP</span>
    </div>
  )
}

export default TopCandidate