import { useState } from 'react';
import GCoin from '../../components/ui/gCoin/gCoin';
import Heart from '../../components/ui/heart/heart';
import Streak from '../../components/ui/streak/streak';
import styles from './leaderboard.module.css';
import UnlockBadges from '../dashboard/overview/unlockBadges/unlockBadges';
import Notifications from './notifications/notifications';
import GlobalLeaderboard from './globalLeaderboard/globalLeaderboard';
import FriendsLeaderboard from './friendsLeaderboard/friendsLeaderboard';
import UniversityLeaderboard from './universityLeaderboard/universityLeaderboard';

const LeaderBoard = ({ g_coin, streak, heart }) => {
  const [activeLeaderboard, setActiveLeaderboard] = useState('global');

  const switchLeaderboard = () => {
    switch (activeLeaderboard) {
      case 'friends':
        return <FriendsLeaderboard />;
      case 'university':
        return <UniversityLeaderboard />;
      default:
        return <GlobalLeaderboard />;
    }
  };

  return (
    <>
      <header className={styles.leaderboard_header}>
        <div>
          <h1>GSTee Champions!</h1>
        </div>
        <div className={styles.achievement}>
          <GCoin value={g_coin} />
          <Streak value={streak} />
          <Heart value={heart} />
        </div>
      </header>

      <main className={styles.leaderboard_overview}>
        <section>
          <div className={styles.leaderboard_navigation}>
            <button
              onClick={() => setActiveLeaderboard('global')}
              className={activeLeaderboard === 'global' ? styles.active : ''}
            >
              Global
            </button>
            <button
              onClick={() => setActiveLeaderboard('friends')}
              className={activeLeaderboard === 'friends' ? styles.active : ''}
            >
              Friends
            </button>
            <button
              onClick={() => setActiveLeaderboard('university')}
              className={activeLeaderboard === 'university' ? styles.active : ''}
            >
              University
            </button>
          </div>

          <div>{switchLeaderboard()}</div>
        </section>

        <section>
          <div>
            <UnlockBadges />
          </div>
          <div>
            <Notifications />
          </div>
        </section>
      </main>
    </>
  );
};

export default LeaderBoard;
