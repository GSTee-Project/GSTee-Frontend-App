import { useNavigate } from 'react-router-dom';
import styles from './gameModeInfo.module.css'
import { LuArrowLeft } from "react-icons/lu";

const GameModeInfo = ({ index }) => {

    const gameInfo = [
        {
            title: '⚡ Quick Quiz',
            concept: 'A fast-paced quiz mode where users answer a fixed number of GST-related questions within a short time limit.',
            game_play: ['10 multiple-choice questions', 'One question at a time', '3-6 seconds to answer each question', 'Automatic move to next question once time is up or user answers'],
            objective: 'Answer as many questions correctly and quickly as possible.',
            features: ['Timer bar per question (visible countdown)', 'Points based on accuracy + speed (e.g., faster = more points)', 'At the end: Score summary with stars, accuracy %, and retry option'],
            difficulty_options: ['Easy: Simple definitions and straightforward facts', 'Medium: Mix of concepts and applications', 'Hard: Scenario-based or tricky worded questions']
        },
        {
            title: '🥊  Battle Mode',
            concept: 'A timed 1v1 quiz battle where users compete against another player (AI or live opponent) to answer questions the fastest and most accurately.',
            game_play: ['10 rapid-fire multiple-choice questions', 'Timer visible for each question (e.g., 10 seconds)', 'Points awarded based on speed and correctness', 'Lives: 3 wrong answers = auto loss'],
            objective: 'Score more points than your opponent before time/lives run out.',
            features: ["Live progress bar showing opponent’s current score", 'Sound effects for right/wrong answers', "Power-ups: 1 Hint, 1 Freeze (pause opponent's timer for 3 seconds)"],
            difficulty_options: ['Easy, Medium, Hard (affects question complexity & speed)']
        },
        {
            title: '🧠 Memory Match',
            concept: ' A drag-and-drop style game where users match questions to correct answers from a shuffled grid',
            game_play: ['6–8 cards face down', 'Each card flips to reveal a question or an answer', 'Match all pairs correctly within the time limit (e.g., 90 seconds)'],
            objective: 'Match all GST question-answer pairs correctly with the fewest moves.',
            features: ['Timer countdown', 'Sound cue for successful/failed match', 'Star rating based on speed + accuracy'],
            difficulty_options: ['Easy: 3 pairs', 'Medium: 6 pairs', 'Hard: 8–10 pairs with similar distractors']
        },
        {
            title: '🏟️ Challenge Arena',
            concept: 'A solo challenge game with increasing levels of difficulty. Each level is a mini-quiz with 3–5 questions.',
            game_play: ['Questions appear in stages (Level 1 to Level 5)', 'Must pass each level to advance (e.g., 3/5 correct to proceed)', 'No going back once a level is completed'],
            objective: ' Survive all 5 levels and collect stars per level.',
            features: ['Level tracker (e.g., 🔹🔸🔸🔸🔸)', '“Unlock Next Level” animation', 'Rewards at milestones (e.g., badges or power-ups)'],
            difficulty_options: ['Starts easy, increases automatically with each level']
        },
    ]

    const current_game_info = gameInfo[index];

    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <LuArrowLeft className={styles.backIcon} onClick={() => navigate('/dashboard/play-games')} />
                <h3>{current_game_info.title}</h3>
            </div>

            <div className={styles.info}>
                <h4>Concept:</h4>
                <p>{current_game_info.concept}</p>
            </div>

            <div className={styles.info}>
                <h4>Gameplay:</h4>
                {current_game_info.game_play.map((gameplay, index) => (
                    <li key={index}>{gameplay}</li>
                ))}
            </div>

            <div className={styles.info}>
                <h4>Objective:</h4>
                <p>{current_game_info.objective}</p>
            </div>

            <div className={styles.info}>
                <h4>Features:</h4>
                {current_game_info.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </div>

            <div className={styles.info}>
                <h4>Difficulty Options:</h4>
                {current_game_info.difficulty_options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </div>

        </div>
    )
}

export default GameModeInfo