import styles from './auth.module.css';
import googleIcon from '../../../assets/images/googleIcon.svg'
import facebookIcon from '../../../assets/images/facebookIcon.svg'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from 'react';

const Login = ({ changeAuthMode }) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((password) => !password);
    }

    return (
        <div className={styles.content}>
            <h3>Login</h3>
            <p>The ultimate gaming learning experience</p>

            <form action="">
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
                <span onClick={() => changeAuthMode('forgot-password')}>Forgot Password?</span>
                <button>Log In</button>
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
            <p className={styles.bottomLink} onClick={() => changeAuthMode('signup')}>Sign Up Instead</p>
        </div>
    )
}

export default Login