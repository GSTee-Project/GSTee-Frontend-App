import { useNavigate } from 'react-router-dom';
import GCoin from '../items/gCoin';
import Heart from '../items/heart';
import Streak from '../items/streak';
import styles from './dashboardPageHeader.module.css';
// import { useState } from 'react';
import { FaCircleUser, FaRegBell } from 'react-icons/fa6';
// import { IoIosArrowDown } from 'react-icons/io';

const DashboardPageHeader = ({ headText = 'Welcome back James', smallText = '', g_coin, streak, heart }) => {

    const navigate = useNavigate();

    // const [showDropDown, setShowDropDown] = useState(false);

    // const toggleDropDown = () => {
    //     setShowDropDown(showDropDown => !showDropDown);
    // }

    return (
        <div className={styles.section}>
            <div className={styles.left}>
                <div>
                    <h3>{headText}</h3>
                    {smallText && <p>{smallText}</p>}
                </div>
                <div className={styles.profileSection}>
                    <FaRegBell size={20} className={styles.bellIcon} onClick={() => navigate('/dashboard/notifications')} />
                    <FaCircleUser onClick={() => navigate('/dashboard/profile')} size={32} className={styles.userIcon} />
                    {/* <IoIosArrowDown size={20} className={styles.arrowIcon} style={{ transform: showDropDown ? 'rotate(-180deg)' : 'rotate(0deg)' }} onClick={toggleDropDown} /> */}
                    {/* {showDropDown &&
                        <div className={styles.dropDownBox}>
                            <p onClick={() => navigate('/dashboard/profile')}>Profile</p>
                            <p onClick={() => navigate('/dashboard/edit-profile')}>Account</p>
                        </div>} */}
                </div>
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