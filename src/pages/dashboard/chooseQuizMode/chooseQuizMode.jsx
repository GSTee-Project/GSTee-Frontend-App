import DashboardPageHeader from '../../../components/ui/dashboardPageHeader/dashboardPageHeader';
import styles from './chooseQuizMode.module.css';
import ModeCard from './components/modeCard/modeCard';
import quickQuizImg from '../../../assets/images/quickQuizImg.jpg'
import battleModeImg from '../../../assets/images/battleModeImg.jpg'
import memoryMatchImg from '../../../assets/images/memoryMatchImg.jpg'
import challengeArenaImg from '../../../assets/images/challengeArenaImg.jpg'

const ChooseQuizMode = () => {
  return (
    <div className={styles.page}>
      <DashboardPageHeader headText='Choose Your Game Mode' smallText='Test your skills or practice what you’ve learned' g_coin={1800} heart={5} />
      <div className={styles.container}>
        <ModeCard image={quickQuizImg} title={'Quick Quiz'} description={'Answer 10 questions as fast as  you can!'} modeNo={1}/>
        <ModeCard image={battleModeImg} title={'Battle Mode'} description={'Compete against other players'} modeNo={2}/>
        <ModeCard image={memoryMatchImg} title={'Memory Match'} description={'Find all the matching pairs!'} modeNo={3}/>
        <ModeCard image={challengeArenaImg} title={'Challenge Arena'} description={'Go head-to-head in a tough duel!'} modeNo={4}/>
      </div>
    </div>
  )
}

export default ChooseQuizMode