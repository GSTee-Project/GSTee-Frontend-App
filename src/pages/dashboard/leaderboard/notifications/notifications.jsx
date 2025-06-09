import React from 'react';
import styles from './notifications.module.css';
import user1 from '../../../../assets/images/user-four.png';
import user2 from '../../../../assets/images/user-two.png';
import user3 from '../../../../assets/images/user-three.png';
import confetti from '../../../../assets/images/mingcute_celebrate-fill.png';
import reaction1 from '../../../../assets/images/noto_confetti-ball.png';
import reaction2 from '../../../../assets/images/noto_confetti-ball.png';
import reaction3 from '../../../../assets/images/streak.svg';


const Notifications = () => {
    const notificationBox = [
        { userImage: user1, userName: 'Prince Will', daySent: '1 day', message: 'Completed 50 slides', reaction: reaction1 },
        { userImage: user2, userName: 'Donald Ali', daySent: '2 days', message: 'Earned 1000 XP!', reaction: reaction2 },
        { userImage: user3, userName: 'Liz Kin', daySent: '2 days', message: 'Completed a 50 day streak!', reaction: reaction3 }
    ];

    return (
        <>
            <section>
                <div className={styles.notifications_header}>
                    <h2>Notifications</h2>
                    <p>See all</p>
                </div>
                <div className={styles.notifications_container}>
                    {notificationBox.map((notification, index) => (
                        <div key={index} className={styles.notifications}>
                            <div className={styles.user_profile}>
                                <div>
                                    <img src={notification.userImage} alt="" />
                                </div>
                                <div>
                                    <h3>{notification.userName}</h3>
                                    <p>{notification.daySent}</p>
                                </div>
                            </div>

                            <div className={styles.notification_message}>
                                <p>{notification.message}</p>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '1.2rem', color: '#D47129', fontWeight: '700' }}>
                                    <img src={notification.reaction}
                                        alt=""
                                        className={`${styles.reactionImg} ${index === 2 ? styles.reactionSmall : ''}`}
                                    />
                                    {index === 2 && <span>50</span>}
                                </span>
                            </div>
                            <div>
                                <button className={styles.notification_btn}><img src={confetti} alt="confetti" />CHEER</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Notifications;