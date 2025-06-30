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
    if (!answered) return styles.optionButton;
    if (option === correctAnswer) return `${styles.optionButton} ${styles.correct}`;
    if (option === selected) return `${styles.optionButton} ${styles.wrong}`;
    return styles.optionButton;
  };

  return (
    <>
      <div className={styles.contentBox}>
        <div className={styles.headContainer}>
          <HiMiniSpeakerWave className={styles.speaker} />
          <span className={styles.hearts}>
            <IoMdHeart />
            <IoMdHeart />
            <IoMdHeart />
            <IoMdHeart />
            <IoMdHeart />
          </span>
        </div>

        <h3>{question}</h3>

        <div className={styles.answerContainer}>
          {options.map((option) => (
            <button key={option} className={getOptionClass(option)} onClick={() => handleSelect(option)} disabled={answered}>
              {option}
            </button>
          ))}
        </div>

      </div>
      <button className={styles.checkBtn} onClick={handleContinue} disabled={!answered}> Continue</button>

    </>
  );
};

export default QuestionCard;
