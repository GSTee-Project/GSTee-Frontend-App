import { useState, useEffect } from 'react';
import quizData from '../../../data/quizData.json';
import styles from './battleMode.module.css';
import userIcon from '../../../assets/images/userIcon.jpg';
import opponentIcon from '../../../assets/images/opponentIcon.jpg';
import { HiMiniSpeakerWave } from 'react-icons/hi2';
import QuizCompletion from '../../../components/ui/quizCompletion/quizCompletion';
import Bar from '../../dashboard/courseLesson/lessonGame/bar';
import FinalPage from './finalPage/finalPage';

const BattleMode = () => {
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
    setTimeout(goToNext, 1000);
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

  // const progress = ((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className={styles.container}>
      {!showResult ?
        <>
          {/* --- Opponent Avatar --- */}
          <div className={styles.avatarContainer}>
            <img src={userIcon} alt="You" className={styles.avatar} />
            <p className={styles.avatar_label}>You</p>
          </div>

          {/* --- MIDDLE CONTENT --- */}
          <div className={styles.content}>
            {/*--- TOP BAR ---*/}
            <div className={styles.progress_timer_row}>
              <Bar percent={`${progress}%`} />
              <div className={styles.timer}>{timeLeft} secs</div>
            </div>
            <h4>Question {currentQuestion + 1} of {questions.length}</h4>

            {/* --- QUIZ QUESTION CONTAINER --- */}
            <div className={styles.contentBox}>
              {questions.length > 0 && (
                <>
                  <div className={styles.headContainer}>
                    <HiMiniSpeakerWave size={26} color={'#00000080'} style={{ cursor: 'pointer' }} />
                  </div>
                  <h3>{questions[currentQuestion].question}</h3>
                  <div className={styles.answerContainer}>
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
                </>)}
            </div>
            <button className={styles.checkBtn} onClick={handleSkip} disabled={isOptionClicked}>skip</button>
          </div>

          {/* --- User Avatar --- */}
          <div className={styles.avatarContainer}>
            <img src={opponentIcon} alt="Joseph" className={styles.avatar} />
            <p className={styles.avatar_label}>Joseph</p>
          </div>
        </>
        :
        <FinalPage xp={'30'} gems={'30'} score={score } />

      }
    </div>
  );
};

export default BattleMode;
