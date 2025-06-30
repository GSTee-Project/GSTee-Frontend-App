import styles from './finalPage.module.css'
import celebrationImg from '../../../../assets/images/noto_confetti-ball.svg'
import bolt from '../../../../assets/images/bolt.svg'
import hexagon from '../../../../assets/images/hexagon.svg'
import target from '../../../../assets/images/target.svg'
import { useNavigate } from 'react-router-dom'
import userIcon from '../../../../assets/images/userIcon.jpg';
import opponentIcon from '../../../../assets/images/opponentIcon.jpg';
import { useState } from 'react'

const FinalPage = ({ xp, gems, score }) => {

    const navigate = useNavigate();

    const [finalPage, setFinalPage] = useState(false);

    return (
        <div className={styles.page}>
            <img src={celebrationImg} alt="" />
            <h3>{finalPage ? 'Winner' : 'Congratuations!'}</h3>
            {!finalPage && <p>You’ve successfully completed this lesson.</p>}
            {!finalPage ?
                <>
                    <div className={styles.avatarSection}>
                        {/* --- Your Avatar --- */}
                        <div className={styles.avatarContainer}>
                            <img src={userIcon} alt="You" className={styles.avatar} />
                            <p className={styles.avatar_label}>You</p>
                            <p className={styles.score_text}>{score} out of 10</p>
                        </div>
                        {/* --- Opponent Avatar --- */}
                        <div className={styles.avatarContainer}>
                            <img src={opponentIcon} alt="Joseph" className={styles.avatar} />
                            <p className={styles.avatar_label}>Joseph</p>
                            <p className={styles.score_text}>3 out of 10</p>
                        </div>
                    </div>
                    <button onClick={() => setFinalPage(true)}>Continue</button>
                </>
                :
                <>
                    {/* --- Your Avatar --- */}
                    <div className={styles.avatarContainer} style={{marginTop: '20px', marginBottom: '30px'}}>
                        <img src={userIcon} alt="You" className={styles.avatar} />
                        <p className={styles.avatar_label}>You</p>
                    </div>

                    <div className={styles.cardContainer}>
                        <div className={styles.statCard}>
                            <p>Total XP</p>
                            <div>
                                <img src={bolt} alt="" />
                                {xp}
                            </div>
                        </div>
                        <div className={styles.statCard} style={{ backgroundColor: '#03A9F4' }}>
                            <p>Total Gems</p>
                            <div style={{ color: '#03A9F4' }}>
                                <img src={hexagon} alt="" />
                                {gems}
                            </div>
                        </div>
                        <div className={styles.statCard} style={{ backgroundColor: '#34A853' }}>
                            <p>
                                {score >= 0.7 ?
                                    'Good' :
                                    score >= 0.5 ?
                                        'Average'
                                        :
                                        'Poor'
                                }
                            </p>
                            <div style={{ color: '#34A853' }}>
                                <img src={target} alt="" />
                                {score * 100}%
                            </div>
                        </div>
                    </div>
                    <button onClick={() => navigate('/dashboard/play-games')}>Continue</button>
                </>
            }
        </div>
    )
}

export default FinalPage