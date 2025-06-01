import styles from './leaderboard.module.css'
import firstBadge from '../../../../assets/images/first_badge.svg'
import secondBadge from '../../../../assets/images/second_badge.svg'
import thirdBadge from '../../../../assets/images/third_badge.svg'

const TopCandidate = ({ position, picture, name, xp }) => {

  const topThree = [firstBadge, secondBadge, thirdBadge]

  return (
    <div className={styles.candidate}>
      {position <= 3 ?
        <img src={topThree[position - 1]} />
        :
        <p className={styles.position}>{position}</p>
      }

      <img className={styles.profile} src={picture} alt="" />
      <h4>{name}</h4>
      <span>{xp} XP</span>
    </div>
  )
}

export default TopCandidate