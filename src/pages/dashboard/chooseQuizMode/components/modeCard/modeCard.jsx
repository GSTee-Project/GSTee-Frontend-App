import { useState } from 'react';
import ModalWrapper from '../../../../../components/ui/modalWrapper/modalWrapper';
import BattleModeContent from '../modeModalContent/battleModeContent';
import ChallengeArenaContent from '../modeModalContent/challengeArenaContent';
import MemoryMatchContent from '../modeModalContent/memoryMatchContent';
import QuickQuizContent from '../modeModalContent/quickQuizContent';
import styles from './modeCard.module.css';

const ModeCard = ({ image, title, description, modeNo}) => {

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.box}>
      <div className={styles.imageContainer}>
        <img src={image} alt="" />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={() => setOpen(true)}>Start Now</button>
      </div>

      <ModalWrapper open={open} onClose={() => setOpen(false)} width='55%'>
        {modeNo === 1 && <QuickQuizContent />}
        {modeNo === 2 && <BattleModeContent />}
        {modeNo === 3 && <MemoryMatchContent />}
        {modeNo === 4 && <ChallengeArenaContent />}
      </ModalWrapper>
    </div>
  )
}

export default ModeCard