import styles from './auth.module.css';
import welcomeImage from '../../../assets/images/welcomeImage.svg'
// import { useNavigate } from 'react-router-dom';

const Welcome = () => {

    // const navigate = useNavigate();

    return (
        <div className={styles.content} >
            <img src={welcomeImage} style={{width: '270px', margin: '40px auto', display: 'block'}} alt="" />
            <h3 style={{fontWeight: '700', fontSize: '30px', textAlign: 'center'}}>Welcome to GSTee</h3>
            <p style={{textAlign: 'center'}}>Learn through play, level up by acing exams and collect badges as you progress</p>
            <button className={styles.btn} style={{width: '50%', borderRadius: '7px', fontSize: '15px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} onClick={close}>Get Started</button>
        </div>
    )
}

export default Welcome