import React, { useState } from 'react';
import styles from './challengeArena.module.css';
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { IoMdHeart } from "react-icons/io";

const QuestionCard = ({
  question,
  options,
  correctAnswer,
  onNext,
}) => {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (option) => {
    if (!answered) {
      setSelected(option);
      setAnswered(true);
    }
  };

  const handleContinue = () => {
    setAnswered(false);
    setSelected(null);
    onNext();
  };

  const getOptionClass = (option) => {
    if (!answered) return styles.option;
    if (option === correctAnswer) return `${styles.option} ${styles.correct}`;
    if (option === selected) return `${styles.option} ${styles.incorrect}`;
    return styles.option;
  };

  return (
    <>
      <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>
            <HiMiniSpeakerWave className={styles.speaker}/>
            <span className={styles.hearts}>
              <IoMdHeart/>
              <IoMdHeart/>
              <IoMdHeart/>
              <IoMdHeart/>
              <IoMdHeart/>
            </span>
          </div>

          <h2 className={styles.question}>{question}</h2>

          <div className={styles.optionsContainer}>
            {options.map((option) => (
              <button key={option} className={getOptionClass(option)} onClick={() => handleSelect(option)} disabled={answered}>
                {option}
              </button>
            ))}
          </div>

      </div>
      <div className={styles.btnDiv}>
        <button className={styles.continueButton} onClick={handleContinue} disabled={!answered}> Continue</button>
      </div>
    </>
  );
};

export default QuestionCard;
