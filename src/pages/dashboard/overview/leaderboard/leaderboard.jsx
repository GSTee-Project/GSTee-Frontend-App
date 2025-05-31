import styles from './leaderboard.module.css'
import cand1 from '../../../../assets/images/leaderboard_img1.jpg'
import cand2 from '../../../../assets/images/leaderboard_img2.jpg'
import cand3 from '../../../../assets/images/leaderboard_img3.jpg'
import cand4 from '../../../../assets/images/leaderboard_img4.jpg'
import cand5 from '../../../../assets/images/leaderboard_img5.jpg'
import cand6 from '../../../../assets/images/leaderboard_img6.jpg'
import TopCandidate from './topCandidate'

const Leaderboard = () => {

    const topCandidate = [
        {position: 1, image: cand1, name: 'Helen', xp: '1561'},
        {position: 2, image: cand2, name: 'Joshua', xp: '1402'},
        {position: 3, image: cand3, name: 'Tara', xp: '1373'},
        {position: 4, image: cand4, name: 'Laura', xp: '959'},
        {position: 5, image: cand5, name: 'David', xp: '880'},
        {position: 6, image: cand6, name: 'Ade', xp: '829'},
    ]

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Leaderboard</h3>
                <span>View All</span>
            </div>
            <div>
                {topCandidate.map((candidate, index) => (
                    <TopCandidate key={index} position={candidate.position} picture={candidate.image} name={candidate.name} xp={candidate.xp} />
                ))}
            </div>
        </div>
    )
}

export default Leaderboard