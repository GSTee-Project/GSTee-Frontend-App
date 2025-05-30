import styles from './auth.module.css';
import keyIcon from '../../../assets/images/passwordKeyIcon.svg'
import { GoArrowLeft } from "react-icons/go";

const ForgotPassword = ({ changeAuthMode }) => {
    return (
        <div className={styles.content} style={{margin: '40px 0'}}>
            <img src={keyIcon} alt="" className={styles.keyIcon} />
            <h3>Forgot Password?</h3>
            <p>No worries we will send you reset instructions</p>

            <form action="">
                <div className={styles.inputBox}>
                    <input type="email" name="email" id="email" placeholder='Enter your Email' />
                </div>
                <button>Reset Password</button>
            </form>
            <div className={styles.bottomLink} onClick={() => changeAuthMode('signup')}> <GoArrowLeft size={22} /> Back to Login</div>
        </div>
    )
}

export default ForgotPassword