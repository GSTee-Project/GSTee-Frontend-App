import { useState, useEffect } from 'react';
import quizData from '../../../data/quizData.json';
import styles from './quickQuick.module.css';
import celebrationConfetti from '../../../assets/images/noto_confetti-ball.png';
import gem from '../../../assets/images/gem.svg';
import target from '../../../assets/images/target.svg';
import lightning from '../../../assets/images/lightning.svg';

const QuickQuiz = () => {
  const totalTime = 60;
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isOptionClicked, setIsOptionClicked] = useState(false);

  useEffect(() => {
    setQuestions(quizData);
  }, []);

  useEffect(() => {
    if (showResult) return;
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

  const handleOptionClick = (option) => {
    if (isOptionClicked) return;
    setSelectedOption(option);
    setIsOptionClicked(true);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      goToNext();
    }, 1000);
  };

  const handleSkip = () => {
    if (isOptionClicked) return;
    goToNext();
  };

  const goToNext = () => {
    setSelectedOption(null);
    setIsOptionClicked(false);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setTimeLeft(totalTime);
    setIsOptionClicked(false);
  };

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100;

  return (
  <div className={styles.quiz_wrapper}>
    {!showResult && (
      <div className={styles.top_bar}>
        <div className={styles.progress_timer_row}>
          <div className={styles.progress_bar_background}>
            <div
              className={styles.progress_bar_fill}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className={styles.timer}>{timeLeft} secs</div>
        </div>

        <div className={styles.question_label}>
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>
    )}

    {/*quiz questions*/}
    {!showResult && (
      <div className={styles.quiz_container}>
        {questions.length > 0 && (
          <>
            <p className={styles.question_text}>
              {questions[currentQuestion].question}
            </p>
            <div>
              {questions[currentQuestion].options.map((option, idx) => {
                let optionClass = styles.optionButton;

                if (isOptionClicked) {
                  if (option === questions[currentQuestion].answer) {
                    optionClass += ` ${styles.correct}`;
                  } else if (option === selectedOption) {
                    optionClass += ` ${styles.wrong}`;
                  } else {
                    optionClass += ` ${styles.disabled_option}`;
                  }
                }

                return (
                  <button key={idx} onClick={() => handleOptionClick(option)} disabled={isOptionClicked}
                   className={optionClass}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    )}

    {/*skip btn*/}
    {!showResult && (
      <button onClick={handleSkip} className={styles.skip_button} disabled={isOptionClicked}>
        Skip
      </button>
    )}

    {/*result section*/}
    {showResult && (
      <div className={styles.congrats_container}>
        <img src={celebrationConfetti} alt="Celebration Confetti" className={styles.confetti_icon} />
        <h2 className={styles.congrats_text}>Congratulations!</h2>
        <p className={styles.sub_text}>
          You've successfully completed this lesson.
        </p>

        <div className={styles.reward_row}>
          <div className={`${styles.reward_card} ${styles.xp}`}>
            <div>Total XP</div>
            <div className={styles.reward_score}><img src={lightning} alt="lightning" />30</div>
          </div>
          <div className={`${styles.reward_card} ${styles.gems}`}>
            <div>Total Gems</div>
            <div className={styles.reward_score}><img src={gem} alt="total_gems" /> 30</div>
          </div>
          <div className={`${styles.reward_card} ${styles.score}`}>
            <div>Good!</div>
            <div className={styles.reward_score}><img src={target} alt='score' />{Math.round((score / questions.length) * 100)}%</div>
          </div>
        </div>

        <button onClick={handleRestart} className={styles.continue_button}>
          Continue
        </button>
        <button className={styles.review_button}>Review Lesson</button>
      </div>
    )}
  </div>
);
};

export default QuickQuiz;
