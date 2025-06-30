import { useState, useEffect } from 'react';
import styles from './memoryMatch.module.css';
import Bar from '../../dashboard/courseLesson/lessonGame/bar';
import QuizCompletion from '../../../components/ui/quizCompletion/quizCompletion';
import { useNavigate } from 'react-router-dom';

const MemoryMatch = () => {
  const totalTime = 30;
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isOptionClicked, setIsOptionClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showResult) return;
    // --- timer function ---
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setShowResult(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showResult]);

  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  const question = ['Input Device', 'Speaker', 'Output Device', 'Monitor', 'A Computer', 'Keyboard', 'Screen', 'is an electronic machine']

  return (
    <div className={styles.container}>
      {!showResult ?
        <div className={styles.content}>

          {/*--- TOP BAR ---*/}
          <div className={styles.progress_timer_row}>
            <Bar percent={`${progress}%`} />
            <div className={styles.timer}>{timeLeft} secs</div>
          </div>

          {/* --- QUIZ QUESTION CONTAINER --- */}
          <div className={styles.contentBox} style={{marginTop: '50px'}}>
            <div className={styles.answerContainer}>
              {question.map((option, index) => (
                <div key={index} className={styles.answerBox}>
                  {option}
                </div>))}
            </div>
          </div>
        </div>
        :
        <QuizCompletion xp={'30'} gems={'30'} continueFunction={() => navigate('/dashboard/play-games')} reviewBtn={false} />
      }
    </div>
  );
};

export default MemoryMatch;
