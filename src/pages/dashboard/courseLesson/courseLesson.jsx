import styles from './courseLesson.module.css'
import { MdArrowBack } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ModalWrapper from '../../../components/ui/modalWrapper/modalWrapper';
import celebrationImg from '../../../assets/images/noto_confetti-ball.svg'

const CourseLesson = () => {

  const slides = [
    {
      heading: 'What is a Computer?',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
    {
      heading: 'Types of Computer',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
    {
      heading: 'Types of Computer',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
    {
      heading: 'Types of Computer',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
    {
      heading: 'Types of Computer',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
    {
      heading: 'Types of Computer',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
    {
      heading: 'Types of Computer',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
    {
      heading: 'Types of Computer',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
    {
      heading: 'Types of Computer',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
    {
      heading: 'Types of Computer',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
    {
      heading: 'Types of Computer',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
    {
      heading: 'Types of Computer',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
    {
      heading: 'Types of Computer',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
    {
      heading: 'Types of Computer',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
    {
      heading: 'Types of Computer',
      text: 'A Computer is defined as a tool or machine used for processing data and give required information.'
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateBack = () => {
    navigate(location.pathname.split('/').slice(0, -1).join('/'));
  }

  const incrementSlide = () => {
    if (currentSlide >= slides.length) {
      return;
    }
    setCurrentSlide((currentSlide) => currentSlide + 1);
  }

  const decrementSlide = () => {
    if (currentSlide <= 1) {
      return;
    }
    setCurrentSlide((currentSlide) => currentSlide - 1);
  }

  const openFinishModal = () => {
    setOpenModal(true);
  }

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header>
          <MdArrowBack className={styles.back} onClick={navigateBack} />
          <h3>Definition of Computer</h3>
        </header>
        <div className={styles.contentBox}>
          <div className={styles.topCornerBox}>
            <HiMiniSpeakerWave size={26} color={'#00000080'} style={{ cursor: 'pointer' }} />
            <div className={styles.heartBox}>
              +1
              <FaHeart size={20} color={'#EA4335'} />
            </div>
          </div>
          <h4>{slides[currentSlide - 1].heading}</h4>
          <p>{slides[currentSlide - 1].text}</p>
        </div>

        <div className={styles.bottomNavigation}>
          <div className={`${styles.arrowBox} ${currentSlide === 1 && styles.disabled}`} onClick={decrementSlide}>
            <IoArrowBack className={styles.arrowIcon} />
          </div>
          <p>{`${currentSlide}/${slides.length}`}</p>
          <div className={`${styles.arrowBox} ${currentSlide === slides.length && styles.finish}`} onClick={currentSlide === slides.length ? openFinishModal : incrementSlide}>
            {currentSlide === slides.length ? 'Finish' : <IoArrowForward className={styles.arrowIcon} />}
          </div>
        </div>
      </div>

      <ModalWrapper open={openModal} onClose={() => setOpenModal(false)} width='600px' showCloseBtn={false}>
        <div className={styles.modalContent}>
          <img src={celebrationImg} alt="" />
          <h3>Congratuations!</h3>
          <p>Lesson completed, you earned <span>15XP</span></p>
          <button onClick={() => navigate('game')}>Play Game</button>
        </div>
      </ModalWrapper>
    </div>
  )
}

export default CourseLesson