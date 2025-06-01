import styles from './dailyQuest.module.css'
import image1 from '../../../../assets/images/quest_img1.jpg'
import image2 from '../../../../assets/images/quest_img2.jpg'
import image3 from '../../../../assets/images/quest_img3.jpg'
import image4 from '../../../../assets/images/quest_img4.jpg'
import Quest from './quest'

const DailyQuest = () => {
    return (
        <div className={styles.dailyQuest}>
            <h3>Daily Quest</h3>
            <div>
                <Quest image={image1} text={'Complete 3 quizzes'} currentValue={1} totalValue={3} />
                <Quest image={image2} text={'Study for 15 minutes'} currentValue={0} totalValue={15} />
                <Quest image={image3} text={'Earn 50 XP'} currentValue={0} totalValue={50} />
                <Quest image={image4} text={'Login for 3 Consecutive days'} currentValue={2} totalValue={3} />
            </div>
        </div>
    )
}

export default DailyQuest