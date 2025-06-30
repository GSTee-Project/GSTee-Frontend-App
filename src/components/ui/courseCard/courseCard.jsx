import styles from './courseCard.module.css';
import { PiBookOpenText } from "react-icons/pi";
import { GrAlarm } from "react-icons/gr";
import { useLocation, useNavigate } from 'react-router-dom';

const CourseCard = ({ id, image, title, lessonNo, hourNo }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const navigateToCourse = () => {
        if (location.pathname.includes('my-courses')) {
            navigate(`/dashboard/my-courses/${id}`);
            return;
        }
        navigate(`/dashboard/courses/${id}`);
    }

    return (
        <div className={styles.card}>
            <img src={image} alt="" />
            <div className={styles.cardContent}>
                <h4>{title}</h4>
                <div className={styles.flex}>
                    <div><PiBookOpenText /> {lessonNo} lessons</div>
                    <div><GrAlarm /> {hourNo} hours</div>
                </div>
                <button onClick={navigateToCourse}>Open</button>
            </div>
        </div>
    )
}

export default CourseCard