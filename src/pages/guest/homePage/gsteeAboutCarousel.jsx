import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from 'react';
import styles from './homePage.module.css';

import game from '../../../assets/images/game.png';
import achievement from '../../../assets/images/achievements.png';
import progress from '../../../assets/images/progress.png';
import leaderboard from '../../../assets/images/leaderboard.png';

const slides = [
  {
    title: "Gamified Learning",
    text: "Learn through quizzes and interactive modules",
    image: game,
  },
  {
    title: "Unlock Achievements",
    text: "Collect badges as you hit milestones",
    image: achievement,
  },
  {
    title: "Track Progress",
    text: "View your learning stats in one place",
    image: progress,
  },
  {
    title: "Leaderboard",
    text: "See how you rank against other learners",
    image: leaderboard,
  },
];

const GsteeAboutCarousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return(
        <>
        <div className={styles.gsteeCarousel}>
            <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className={styles.gsteeCard}
              initial={{opacity:0, x: 100}}
              animate={{opacity: 1, x: 0}}
              exit={{opacity: 0, x: -100}}
              transition={{duration: 0.5}}
              >
             <img src={slides[index].image} alt={slides[index].title} />
             <h3>{slides[index].title}</h3>
             <p>{slides[index].text}</p>
            </motion.div>
            </AnimatePresence>
        </div>

        <div className={styles.navigationDots}>
            {slides.map((_, i) => (
                <span 
                 key={i} 
                 onClick={() => setIndex(i)}
                 className={i === index ? styles.activeDot : ''}></span>
            ))}
        </div>
        </>
    )

}

export default GsteeAboutCarousel;