import styles from '../profile.module.css'
import profileImg from '../../../../assets/images/profileImg.svg'
import { useState } from 'react'

const FriendList = () => {

    const [tab, setTab] = useState(1);

    const friends = [
        {
            image: profileImg,
            name: 'Sam John',
            xp: '1200'
        },
        {
            image: profileImg,
            name: 'Donald Ali',
            xp: '2600'
        },
        {
            image: profileImg,
            name: 'Prince Will',
            xp: '2432'
        },
        {
            image: profileImg,
            name: 'Liz Kin',
            xp: '1170'
        },
        {
            image: profileImg,
            name: 'Popel Chi',
            xp: '6709'
        },
    ]

    return (
        <div className={styles.friendListSection}>
            <header>
                <h3>Friend List</h3>
                <span>See all</span>
            </header>
            <div className={styles.friendListContainer}>
                <div className={styles.containerHead}>
                    <h4 onClick={() => setTab(1)}>Following</h4>
                    <h4 onClick={() => setTab(2)}>Followers</h4>
                    <div className={styles.bar}>
                        <div className={styles.innerBar} id={tab === 1 ? styles.left: styles.right} />
                    </div>
                </div>
                <div>
                    {friends.map((friend, index) => (
                        <div key={index} className={styles.friendBox}>
                            <img src={friend.image} alt="" />
                            <div>
                                <h4>{friend.name}</h4>
                                <p>{friend.xp} XP</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FriendList