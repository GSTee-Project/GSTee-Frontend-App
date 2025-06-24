import styles from '../profile.module.css'
import searchIcon from '../../../../assets/images/purpleSearchIcon.svg'
import inviteIcon from '../../../../assets/images/purpleInviteIcon.svg'
import { IoIosArrowForward } from "react-icons/io";

const AddFriend = () => {
    return (
        <div className={styles.addFriendSection}>
            <h3>Add Friend</h3>
            <div className={styles.container}>
                <div>
                    <img src={searchIcon} alt="" />
                    <h4>Find Friends</h4>
                    <IoIosArrowForward className={styles.arrowIcon} />
                </div>
                <div>
                    <img src={inviteIcon} alt="" />
                    <h4>Invite Friends</h4>
                    <IoIosArrowForward className={styles.arrowIcon} />
                </div>
            </div>
        </div>
    )
}

export default AddFriend