import styles from './auth.module.css';
import keyIcon from '../../../assets/images/passwordKeyIcon.svg'
import { GoArrowLeft } from "react-icons/go";
import { useState } from 'react';
import OtpBox from '../../../components/ui/otpBox';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { FaSquareCheck } from "react-icons/fa6";

const ForgotPassword = ({ changeAuthMode }) => {

    const [step, setStep] = useState(1);

    const [otp, setOtp] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((password) => !password);
    }

    return (
        <>
            {step === 1 &&
                <div className={styles.content} style={{ margin: '40px 0' }}>
                    <img src={keyIcon} alt="" className={styles.keyIcon} />
                    <h3>Forgot Password?</h3>
                    <p>No worries we will send you reset instructions</p>

                    <form action="">
                        <div className={styles.inputBox}>
                            <input type="email" name="email" id="email" placeholder='Enter your Email' />
                        </div>
                        <button onClick={() => setStep(2)}>Reset Password</button>
                    </form>
                    <div className={styles.bottomLink} onClick={() => changeAuthMode('login')}> <GoArrowLeft size={22} /> Back to Login</div>
                </div>
            }

            {step === 2 &&
                <div className={styles.content} style={{ margin: '40px 0' }}>
                    <img src={keyIcon} alt="" className={styles.keyIcon} />
                    <h3>Password Reset</h3>
                    <p style={{ color: 'black', fontSize: '16px', fontFamily: 'Dm Sans' }}>We sent a code to <span style={{ fontWeight: '500' }}>Johnmakus@gmail.com</span></p>

                    <form action="">
                        <OtpBox length={4} onChange={setOtp} />
                        <button onClick={() => setStep(3)}>Continue</button>
                    </form>
                    <p style={{ color: 'black', fontSize: '17px', width: 'fit-content', margin: 'auto', marginTop: '10px', fontFamily: 'Dm Sans' }}>Didn't receive an email? <span style={{ fontWeight: '500', color: 'var(--primary-color)' }}>click to resend</span></p>
                    <div className={styles.bottomLink} onClick={() => changeAuthMode('login')}> <GoArrowLeft size={22} /> Back to Login</div>
                </div>
            }

            {step === 3 &&
                <div className={styles.content} style={{ margin: '40px 0' }}>
                    <img src={keyIcon} alt="" className={styles.keyIcon} />
                    <h3>Set New password</h3>
                    <p>Must be at least 8 characters</p>
                    <form action="">
                        <div className={styles.inputBox}>
                            <label htmlFor="password">Password</label>
                            <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder='Enter New Password' />
                            {showPassword ?
                                <IoEyeOffOutline className={styles.eyeIcon} size={22} onClick={togglePassword} />
                                :
                                <IoEyeOutline className={styles.eyeIcon} size={22} onClick={togglePassword} />
                            }
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor="password">Confirm Password</label>
                            <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder='Repeat Password' />
                            {showPassword ?
                                <IoEyeOffOutline className={styles.eyeIcon} size={22} onClick={togglePassword} />
                                :
                                <IoEyeOutline className={styles.eyeIcon} size={22} onClick={togglePassword} />
                            }
                        </div>
                        <button onClick={() => setStep(4)}>Reset Password</button>
                    </form>
                    <div className={styles.bottomLink} onClick={() => changeAuthMode('login')}> <GoArrowLeft size={22} /> Back to Login</div>
                </div>
            }

            {step === 4 &&
                <div className={styles.content} style={{ margin: '40px 0' }}>
                    <FaSquareCheck size={60} style={{ color: 'var(--primary-color)', display: 'block', margin: 'auto' }} />
                    <div style={{textAlign: 'center', marginTop: '30px'}}>
                        <h3>All done!</h3>
                        <p style={{fontSize: '16px'}}>Proceed to login</p>
                    </div>
                    <form action="">
                        <button style={{marginTop: '0'}} onClick={() => changeAuthMode('login')}>Login</button>
                    </form>
                </div>
            }

        </>
    )
}

export default ForgotPassword