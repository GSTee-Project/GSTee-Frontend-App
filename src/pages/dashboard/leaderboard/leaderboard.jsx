import { useState } from 'react';
import styles from './leaderboard.module.css';
import UnlockBadges from '../../dashboard/overview/unlockBadges/unlockBadges';
import Notifications from './notifications/notifications';
import GlobalLeaderboard from './globalLeaderboard/globalLeaderboard';
import FriendsLeaderboard from './friendsLeaderboard/friendsLeaderboard';
import UniversityLeaderboard from './universityLeaderboard/universityLeaderboard';
import DashboardPageHeader from '../../../components/ui/dashboardPageHeader/dashboardPageHeader';

const LeaderBoard = () => {
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
    <div className={styles.page}>
      <DashboardPageHeader headText='GSTee Champions!' g_coin={1800} streak={7} heart={5} />

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
          <div style={{marginTop: '30px'}}>
            <Notifications />
          </div>
        </section>
      </main>
    </div>
  );
};

export default LeaderBoard;
