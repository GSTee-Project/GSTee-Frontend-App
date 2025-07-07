import styles from '../profile.module.css'
import profileImg from '../../../../assets/images/profileImg.svg'
import { MdEditSquare } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const BasicInfo = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.basicInfoContainer}>
            <div className={styles.purpleContainer}>
                <img src={profileImg} alt="" />
                <MdEditSquare className={styles.edit} onClick={() => navigate('/dashboard/edit-profile')} />
            </div>
            <div className={styles.nameInfo}>
                <div>
                    <h3>Tolu James</h3>
                    <p>Novice Learner</p>
                </div>
                <button onClick={() => navigate('/dashboard/edit-profile')}>Edit Profile</button>
            </div>
            <div className={styles.followerInfo}>
                <p>19 Following</p>
                <p>25 Followers</p>
            </div>
            <button className={styles.add}>Add Friends</button>
        </div>
    )
}

export default BasicInfo