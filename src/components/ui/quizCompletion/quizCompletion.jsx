import styles from './quizCompletion.module.css'
import celebrationImg from '../../../assets/images/noto_confetti-ball.svg'
import bolt from '../../../assets/images/bolt.svg'
import hexagon from '../../../assets/images/hexagon.svg'
import target from '../../../assets/images/target.svg'
import { useLocation, useNavigate } from 'react-router-dom'

const QuizCompletion = ({ xp, gems, score= 0, continueBtn = true, continueText, continueFunction, reviewBtn = true, reviewText, reviewFunction }) => {

    const navigate = useNavigate();
    const location = useLocation();

    // --- go back once ---
    const reviewLesson = () => {
        navigate(location.pathname.split('/').slice(0, -1).join('/'));
    }

    // --- go back twice ---
    const backToCourse = () => {
        navigate(location.pathname.split('/').slice(0, -2).join('/'));
    }

    return (
        <div className={styles.page}>
            <img src={celebrationImg} alt="" />
            <h3>Congratuations!</h3>
            <p>You’ve successfully completed this lesson.</p>
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
            {continueBtn && <button onClick={continueFunction || backToCourse}>{continueText || 'Continue'}</button>}
            {reviewBtn && <button onClick={reviewFunction || reviewLesson} className={styles.secondBtn}>{reviewText || 'Review Lesson'}</button>}
        </div>
    )
}

export default QuizCompletion