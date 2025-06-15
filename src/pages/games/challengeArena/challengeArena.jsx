import { useState } from 'react';
import styles from './challengeArena.module.css';
import QuestionCard from './questionCard';
import LinearProgressBar from '../../../components/ui/linearProgressBar/linearProgressBar';
import Result from '../../../components/ui/gameResult/result';



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
  const level = 1;
  const totalLevel = 5;
  const currentQuestion = current + 1;
  const totalQuestions = questions.length;


  const handleNext = () => {
    if (current < totalQuestions - 1) {
      setCurrent(current + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className={styles.main}>
    {showResults ? ( <Result score={score} totalQuestions={totalQuestions} onContinue={() => console.log('Next level')}/>
    ) : (
      <>
        <div className={styles.topBar}>
          <LinearProgressBar value={(currentQuestion) / totalQuestions * 100} height={35} />
          <span className={styles.level}>Level {level}/{totalLevel}</span>
        </div>
        <p className={styles.qNumber}>Question {currentQuestion} of {totalQuestions}</p>

        <QuestionCard
          totalQuestions={questions.length}
          question={questions[current].question}
          options={questions[current].options}
          correctAnswer={questions[current].correct}
          onNext={handleNext}
        />
      </>
    )}
    </div>
  );
};

export default ChallengeArena;
