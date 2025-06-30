import styles from '../profile.module.css'
import profileImg from '../../../../assets/images/profileImg.svg'
import streakImg from '../../../../assets/images/streak.svg'

const FriendStreak = () => {

  const friendStreakList = [
    {
      picture: profileImg,
      streak: '200'
    },
    {
      picture: profileImg,
      streak: '168'
    },
    {
      picture: profileImg,
      streak: '109'
    },
    {
      picture: profileImg,
      streak: '75'
    },
    {
      picture: profileImg,
      streak: '32'
    },
  ]

  return (
    <div className={styles.friendStreakSection}>
      <h3>Friend Streaks</h3>
      <div className={styles.friendStreakContainer}>
        {friendStreakList.map((friend, index) => (
          <div key={index} className={styles.singleFriendStreak}>
            <img src={friend.picture} alt="" />
            <div>
              <img src={streakImg} className={styles.streakImg} alt="" />
              <p>{friend.streak}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FriendStreak