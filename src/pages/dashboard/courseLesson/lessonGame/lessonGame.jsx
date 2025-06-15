import DashboardNavbar from '../../../../components/ui/dashboardNavbar/dashboardNavbar'
import LinearProgressBar from '../../../../components/ui/linearProgressBar/linearProgressBar'
import styles from './lessonGame.module.css'

const LessonGame = () => {
    return (
        <div>
            <DashboardNavbar showMenu={false} />
            <div className={styles.container}>
                <LinearProgressBar value={0} />
            </div>
        </div>
    )
}

export default LessonGame