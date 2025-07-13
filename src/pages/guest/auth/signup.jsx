import { useState } from 'react';
import styles from './auth.module.css';
import googleIcon from '../../../assets/images/googleIcon.svg'
import facebookIcon from '../../../assets/images/facebookIcon.svg'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const Signup = ({ changeAuthMode }) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((password) => !password);
    }

    return (
        <div className={styles.content}>
            <h3>Welcome to Gstee</h3>
            <p>The ultimate gaming learning experience</p>

            <form action="">
                <div className={styles.twoInputBox}>
                    <div className={styles.inputBox}>
                        <label htmlFor="firstName">First name</label>
                        <input type="text" name="firstNamE" id="firstName" placeholder='Enter your name' />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="lastName">Last name</label>
                        <input type="name" name="lastName" id="lastName" placeholder='Enter your name' />
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter your Email' />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="password">Password</label>
                    <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder='Enter your Password' />
                    {showPassword ?
                        <IoEyeOffOutline className={styles.eyeIcon} size={22} onClick={togglePassword} />
                        :
                        <IoEyeOutline className={styles.eyeIcon} size={22} onClick={togglePassword} />
                    }
                </div>
                <button>Sign Up</button>
            </form>
            <div className={styles.lineThrough}>
                <p>or</p>
            </div>
            <div className={styles.altSignup}>
                <img src={googleIcon} alt="" />
                <p>Sign Up with Google</p>
            </div>
            <div className={styles.altSignup}>
                <img src={facebookIcon} alt="" />
                <p>Sign Up with Facebook</p>
            </div>
            <p className={styles.bottomLink} onClick={() => changeAuthMode('login')}>Login</p>
        </div>
    )
}

export default Signup