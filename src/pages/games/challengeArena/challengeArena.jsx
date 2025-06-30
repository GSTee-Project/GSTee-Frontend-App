import { useState } from 'react';
import styles from './challengeArena.module.css';
import QuestionCard from './questionCard';
import LinearProgressBar from '../../../components/ui/linearProgressBar/linearProgressBar';
import Result from '../../../components/ui/gameResult/result';
import QuizCompletion from '../../../components/ui/quizCompletion/quizCompletion';
import { useNavigate } from 'react-router-dom';
import Bar from '../../dashboard/courseLesson/lessonGame/bar';

const questions = [
  {
    question: 'What is the capital of Nigeria?',
    options: ['Lagos', 'Port Harcourt', 'Abuja', 'Kano'],
    correct: 'Abuja',
  },
  {
    question: 'What color is the sky?',
    options: ['Blue', 'Green', 'Red', 'Yellow'],
    correct: 'Blue',
  },
  {
    question: 'Which of these is a renewable energy source?',
    options: ['Coal', 'Solar', 'Petrol', 'Diesel'],
    correct: 'Petrol',
  },
];

const ChallengeArena = () => {
  const [current, setCurrent] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const totalLevel = 5;
  const currentQuestion = current + 1;
  const totalQuestions = questions.length;

  const navigate = useNavigate();

  const nextLevel = () => {
    setLevel(level => level + 1);
    setCurrent(0);
    setShowResults(false);
    setScore(0);
  }

  const handleNext = () => {
    if (current < totalQuestions - 1) {
      setCurrent(current + 1);
    } else {
      setShowResults(true);
    }
  };

  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className={styles.main}>
      {showResults ?
        <QuizCompletion xp={'30'} gems={'30'} score={score / totalQuestions} continueFunction={level < totalLevel ? nextLevel : () => navigate('/dashboard/play-games')} reviewBtn={false} continueText={level < totalLevel ? 'Continue to Next Level' : 'Continue'} />
        :
        <div className={styles.content}>
          {/*--- TOP BAR ---*/}
          <div className={styles.progress_timer_row}>
            <Bar percent={`${progress}%`} />
            <div className={styles.timer}>Level {level}/{totalLevel}</div>
          </div>
          <h4>Question {currentQuestion} of {totalQuestions}</h4>

          
          <QuestionCard
            totalQuestions={questions.length}
            question={questions[current].question}
            options={questions[current].options}
            correctAnswer={questions[current].correct}
            onNext={handleNext}
          />
        </div>
      }
    </div>
  );
};

export default ChallengeArena;
