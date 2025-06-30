import { useState, useEffect } from 'react';
import quizData from '../../../data/quizData.json';
import styles from './quickQuiz.module.css';
import Bar from '../../dashboard/courseLesson/lessonGame/bar';
import QuizCompletion from '../../../components/ui/quizCompletion/quizCompletion';
import { HiMiniSpeakerWave } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const QuickQuiz = () => {
  const totalTime = 60;
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isOptionClicked, setIsOptionClicked] = useState(false);
  const navigate = useNavigate();

  // --- set quiz questions ---
  useEffect(() => {
    setQuestions(quizData);
  }, []);

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

  // const handleRestart = () => {
  //   setCurrentQuestion(0);
  //   setSelectedOption(null);
  //   setScore(0);
  //   setShowResult(false);
  //   setTimeLeft(totalTime);
  //   setIsOptionClicked(false);
  // };

  // const progress = ((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100;
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className={styles.container}>
      {!showResult ?
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
        :
        <QuizCompletion xp={'30'} gems={'30'} score={score / questions.length} continueFunction={() => navigate('/dashboard/play-games')} reviewBtn={false} />
      }
    </div>
  );
};

export default QuickQuiz;
