import styles from './courseCard.module.css';
import { PiBookOpenText } from "react-icons/pi";
import { GrAlarm } from "react-icons/gr";

const CourseCard = ({ image, title, lessonNo, hourNo }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt="" />
            <div className={styles.cardContent}>
                <h4>{title}</h4>
                <div className={styles.flex}>
                    <div><PiBookOpenText /> {lessonNo} lessons</div>
                    <div><GrAlarm /> {hourNo} hours</div>
                </div>
                <button>Open</button>
            </div>
        </div>
    )
}

export default CourseCard