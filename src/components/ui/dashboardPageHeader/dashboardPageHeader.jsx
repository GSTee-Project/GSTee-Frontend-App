import GCoin from '../items/gCoin';
import Heart from '../items/heart';
import Streak from '../items/streak';
import styles from './dashboardPageHeader.module.css';

const DashboardPageHeader = ({ headText = 'Welcome back James', smallText = '', g_coin, streak, heart }) => {
    return (
        <div className={styles.section}>
            <div className={styles.left}>
                <h3>{headText}</h3>
                {smallText && <p>{smallText}</p>}
            </div>
            <div className={styles.right}>
                {g_coin && <GCoin value={g_coin} />}
                {streak && <Streak value={streak} />}
                {heart && <Heart value={heart} />}
            </div>
        </div>
    )
}

export default DashboardPageHeader