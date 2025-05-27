import { useEffect } from "react";
import styles from "../levelsAndBadges/levelsAndBadges.module.css";
import LinearProgressBar from "../../components/ui/linearProgressBar/linearProgressBar";
import { AiOutlineSync } from "react-icons/ai";
import { FaClock } from "react-icons/fa6";
import { IoFlagSharp, IoFootsteps } from "react-icons/io5";
import { BsFire } from "react-icons/bs";
import { TbShieldCheckeredFilled } from "react-icons/tb";
import { SlSpeedometer } from "react-icons/sl";
import { RiSwordLine } from "react-icons/ri";
import { IoIosLock } from "react-icons/io";
import Button from '@mui/material/Button';

const LevelsAndBadges = () => {

  const StatRow = ({ icon, value, label }) => (
  <div className={styles.statRow}>
    <div className={styles.statIcon}>{icon}</div>
    <div className={styles.statText}>
      <p className={styles.statValue}>{value}</p>
      <p>{label}</p>
    </div>
  </div>
);

// Badge List
const achievements = [
  { title: "First Steps", icon: <IoFootsteps />, earned: "Oct 8,2024", locked: false },
  { title: "Streak Starter", icon: <BsFire />, earned: "Jan 10,2025", locked: false },
  { title: "Battle Champ", icon: <TbShieldCheckeredFilled />, earned: "Jan 5,2025", locked: false },
  { title: "Speed Demon", icon: <SlSpeedometer />, earned: "Feb 5,2025", locked: false },
  { title: "Boss Slayer", icon: <RiSwordLine />, earned: "March 5,2025", locked: false },
  { title: "Gold Streak", icon: <svg width="86" height="90" viewBox="0 0 86 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M42.583 3V11.3333M23.833 9.25L30.083 15.5M61.333 9.25L55.083 15.5M52.0205 71.2167C53.3372 67.1958 53.9955 65.1875 55.3414 63.8042C55.983 63.1431 56.715 62.6069 57.5372 62.1958C59.2497 61.3333 61.333 61.3333 65.4997 61.3333C69.6664 61.3333 71.7497 61.3333 73.4664 62.1958C74.283 62.6069 75.015 63.1431 75.6622 63.8042C77.008 65.1875 77.6622 67.1958 78.983 71.2167L80.3414 75.3625C81.983 80.3708 82.8039 82.8708 81.5789 84.6042C80.3497 86.3333 77.758 86.3333 72.5705 86.3333H58.433C53.2455 86.3333 50.6497 86.3333 49.4247 84.6042C48.1955 82.8708 49.0164 80.3708 50.658 75.3625L52.0205 71.2167ZM29.0997 37.8833C30.4164 33.8625 31.0789 31.8542 32.4205 30.4708C33.0677 29.8097 33.7997 29.2736 34.6164 28.8625C36.333 28 38.4164 28 42.583 28C46.7497 28 48.833 28 50.5497 28.8625C51.3664 29.2736 52.0983 29.8097 52.7455 30.4708C54.0872 31.8542 54.7455 33.8625 56.0664 37.8833L57.4247 42.0292C59.0664 47.0375 59.883 49.5375 58.6622 51.2708C57.433 53 54.8414 53 49.6497 53H35.5164C30.3247 53 27.733 53 26.508 51.2708C25.2789 49.5375 26.0997 47.0375 27.7414 42.0292L29.0997 37.8833ZM6.18302 71.2167C7.50386 67.1958 8.16219 65.1875 9.50802 63.8042C10.1497 63.1431 10.8816 62.6069 11.7039 62.1958C13.4164 61.3333 15.4997 61.3333 19.6664 61.3333C23.833 61.3333 25.9164 61.3333 27.633 62.1958C28.4497 62.6069 29.1816 63.1431 29.8289 63.8042C31.1747 65.1875 31.8289 67.1958 33.1497 71.2167L34.508 75.3625C36.1497 80.3708 36.9705 82.8708 35.7455 84.6042C34.5164 86.3333 31.9247 86.3333 26.7372 86.3333H12.5997C7.41219 86.3333 4.81636 86.3333 3.59136 84.6042C2.36219 82.8708 3.18303 80.3708 4.82469 75.3625L6.18302 71.2167Z" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>, earned: "April 10,2025", locked: false },
  { title: "Puzzle Master", earned: "Solve 20 Puzzles", locked: true },
  { title: "High Flyer",  earned: "Finish top 3", locked: true },
];

//Levels
const levels = [
  { level: "Level 1", description: "Unlock your first badge" },
  { level: "Level 2", description: "Access leaderboards" },
  { level: "Level 3", description: "Challenge Friends" },
  { level: "Level 4", description: "Earn ‘Quiz Whiz’ badge" },
];

  useEffect(() => {
    console.log("Running"); 
  });
  return (
    <div className={styles.main}>
      <div className="">
        <div className={styles.flex}>
          <h3 className={styles.title}>Your Journey So Far</h3>
          <div className={`${styles.flex } ${styles.pointsDiv}`}>
            <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6.36683L25 11.9835V23.0168L15 28.6335L5.00001 23.0168V11.9835L15 6.36683ZM30 25.0002C30 25.6335 29.65 26.1835 29.1167 26.4668L15.95 33.8668C15.6833 34.0668 15.35 34.1668 15 34.1668C14.65 34.1668 14.3167 34.0668 14.05 33.8668L0.883343 26.4668C0.616022 26.3266 0.392307 26.1156 0.236556 25.857C0.0808042 25.5984 -0.00101379 25.302 9.48188e-06 25.0002V10.0002C9.48188e-06 9.36683 0.350009 8.81683 0.883343 8.5335L14.05 1.1335C14.3167 0.933496 14.65 0.833496 15 0.833496C15.35 0.833496 15.6833 0.933496 15.95 1.1335L29.1167 8.5335C29.65 8.81683 30 9.36683 30 10.0002V25.0002ZM15 4.41683L3.33334 10.9835V24.0168L15 30.5835L26.6667 24.0168V10.9835L15 4.41683Z" fill="#0866FF"/>
            </svg>
            <span className={styles.points}>1800</span>
          </div>
        </div>
        <p className={styles.desc}>Track your levels, earn badges, and celebrate your growth</p>
      </div>
      {/* Progress Level Section */}
      <div className={`${styles.levelProgressDiv}`}>
        <div className={styles.levelProgressDiv_first}>
          <p className={styles.progressLevelTitle}>Level Progress Overview</p>
          <div className={styles.levelDiv1}>
            <p className={styles.level}>Level 4</p>
            <p className={styles.xp}>700 XP</p>
            <LinearProgressBar value={60} />
            <p className={styles.nextLevelXp}>Next Level: <span>900 XP</span></p>
          </div>
        </div>
        {/* Stat Card 2*/}
        <div className={styles.statCard}>
          <StatRow icon={<AiOutlineSync className={styles.statIcon}/>} value="+210 XP" label="Earned this week" />
          <hr className={styles.divider} />
          <StatRow icon={<FaClock className={styles.statIcon}/>} value="8" label="Total learning hours" />
          <hr className={styles.divider} />
          <StatRow icon={<IoFlagSharp className={styles.statIcon} />} value="20 Quests" label="Completed this week" />
        </div>
      </div>
      {/* Badges Section */}
      <div className={styles.badgeSection}>
        <p className={styles.badgeHeader}>Your Badges</p>
        <div className={styles.grid}>{achievements.map((item, idx) => (
        <div key={idx} className={`${styles.card} ${item.locked ? styles.locked : ''}`}>
          <div className={styles.badgeIcon}> {item.locked ? (
              <div className={styles.lockCircle}><IoIosLock className={styles.lockIcon} /> </div>
            ) : ( item.icon )}
          </div>
          <div className={styles.badgeTitle}>{item.title}</div>
          <div className={styles.badgeSubtext}>
            {item.locked ? item.earned : `Earned: ${item.earned}`}
          </div>
        </div>
      ))}</div>
      </div>
      {/* Level Milestone */}
      <div className={styles.badgeSection}>
        <p className={styles.badgeHeader}>Level Milestones</p>
          <div className={styles.levelContainer}>
            {levels.map((item, idx) => (
              <div className={styles.levelCard} key={idx}>
                <span className={styles.level}>{item.level}</span>
                <span className={styles.levelDesc}>{item.description}</span>
              </div>
            ))}
        </div>
      </div>
      {/*  */}
      <div className={`${styles.levelProgressDiv} ${styles.more}`}>
        <div className={styles.info}>
          <p className={styles.infoText}>Want to level up faster?</p>
            <p className={styles.infoDesc}>Don’t miss today’s quests!</p>
        </div>
        <div className="button"><Button variant="contained" sx={{ backgroundColor: 'var(--primary-color)', padding: '15px', width: '17.5rem', borderRadius: '8px', textTransform: 'none', fontFamily: 'inherit', fontSize: '20px'}}>View Daily Quests</Button></div>
      </div>
    </div>
  );
};

export default LevelsAndBadges;
