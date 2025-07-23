import { useState } from 'react';
import ModalWrapper from '../../../../../components/ui/modalWrapper/modalWrapper';
import BattleModeContent from '../modeModalContent/battleModeContent';
import ChallengeArenaContent from '../modeModalContent/challengeArenaContent';
import MemoryMatchContent from '../modeModalContent/memoryMatchContent';
import QuickQuizContent from '../modeModalContent/quickQuizContent';
import styles from './modeCard.module.css';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';



const ModeCard = ({ image, title, description, modeNo }) => {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const modeInfo = () => {
    if (modeNo === 1){
      navigate('/dashboard/play-games/quick-quiz-info');
      return;
    }
    if (modeNo === 2){
      navigate('/dashboard/play-games/battle-mode-info');
      return;
    }
    if (modeNo === 3){
      navigate('/dashboard/play-games/memory-match-info');
      return;
    }
    if (modeNo === 4){
      navigate('/dashboard/play-games/challenge-arena-info');
      return;
    }
  }

  return (
    <div className={styles.box}>
      <div className={styles.imageContainer}>
        <img src={image} alt="" />
        <BsQuestionCircleFill onClick={modeInfo} className={styles.questionIcon} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={() => setOpen(true)}>Start Now</button>
      </div>

      <ModalWrapper open={open} onClose={() => setOpen(false)}>
        {modeNo === 1 && <QuickQuizContent />}
        {modeNo === 2 && <BattleModeContent />}
        {modeNo === 3 && <MemoryMatchContent />}
        {modeNo === 4 && <ChallengeArenaContent />}
      </ModalWrapper>
    </div>
  )
}

export default ModeCard