import styles from './modeModalContent.module.css'
import modalImg from '../../../../../assets/images/quizModalImg.jpg'
import RadioBtn from './radioBtn'
import { useState } from 'react';
import bulbImg from '../../../../../assets/images/bulbIcon.svg'
import clockImg from '../../../../../assets/images/clockIcon.svg'
import skipImg from '../../../../../assets/images/skipIcon.svg'
import { useNavigate } from 'react-router-dom';

const ChallengeArenaContent = () => {

    const [currentMode, setCurrentMode] = useState(1);

    const navigate = useNavigate();

    return (
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.chooseContainer}>
                    <h3>Challenge Arena</h3>
                    <div className={styles.chooseRow} onClick={() => setCurrentMode(1)}>
                        <RadioBtn active={currentMode === 1} />
                        Easy
                    </div>
                    <div className={styles.chooseRow} onClick={() => setCurrentMode(2)}>
                        <RadioBtn active={currentMode === 2} />
                        Medium
                    </div>
                    <div className={styles.chooseRow} onClick={() => setCurrentMode(3)}>
                        <RadioBtn active={currentMode === 3} />
                        Hard
                    </div>
                </div>
                <img src={modalImg} onClick={() => navigate('/dashboard/play-games/challenge-arena-info')} alt="" />
            </div>
            <div className={styles.midText}>
                <p>Survive all 5 levels and collect stars per <br /> level. </p>
            </div>

            <div className={styles.lowerContainer}>
                <div className={styles.box}>
                    <h4>Progress</h4>
                    <div className={styles.boxContent}>
                        <img src={bulbImg} alt="" />
                        <p>0/10 correct</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <h4>Expected Time</h4>
                    <div className={styles.boxContent}>
                        <img src={clockImg} alt="" />
                        <p>{ currentMode === 1 ? '1 min' : currentMode === 2 ? '45 secs' : currentMode === 3 ? '30 secs' : '' }</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <h4>Power-ups</h4>
                    <div className={styles.flexBox}>
                        {(currentMode === 1 || currentMode === 2) && <div className={styles.boxContent}>
                            <img src={bulbImg} alt="" />
                            <p>1 hint</p>
                        </div>}
                        <div className={styles.boxContent}>
                            <img src={skipImg} alt="" />
                            <p>1 skip</p>
                        </div>
                    </div>
                </div>
            </div>
            <button  onClick={() => navigate('/games/challenge-arena')}>Start Now</button>
        </div>
    )
}

export default ChallengeArenaContent