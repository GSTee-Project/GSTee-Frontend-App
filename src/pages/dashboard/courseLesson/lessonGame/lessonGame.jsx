import { useEffect, useRef, useState } from 'react'
import DashboardNavbar from '../../../../components/ui/dashboardNavbar/dashboardNavbar'
import Bar from './bar'
import styles from './lessonGame.module.css'
import { HiMiniSpeakerWave } from 'react-icons/hi2'
import { FaHeart } from 'react-icons/fa'
import QuizCompletion from '../../../../components/ui/quizCompletion/quizCompletion'

const LessonGame = () => {

    const [currentNo, setCurrentNo] = useState(1);
    const totalNo = 10;
    const [totalHearts, setTotalHearts] = useState(5);
    const [score, setScore] = useState(0);

    const pageRef = useRef(null);

    const scroll = () => {
        if (pageRef.current) {
            pageRef.current.scrollTo({ top: 0 });
        }
    }

    const questions = [
        {
            question: 'What is the capital of Nigeria?',
            options: ['Lagos', 'Port Harcourt', 'Abuja', 'Kano'],
            answer: 'Abuja',
        },
        {
            question: 'What is the capital of Lagos?',
            options: ['Ikorodu', 'Ikeja', 'Apapa', 'Victoria Island'],
            answer: 'Ikeja',
        },
        {
            question: 'What is the capital of Ondo?',
            options: ['Akoko', 'Ondo East', 'Ifedore', 'Akure'],
            answer: 'Akure',
        },
        {
            question: 'What is the capital of Oyo?',
            options: ['Ibadan', 'Ogbomosho', 'Lagelu', 'Akinyele'],
            answer: 'Ibadan',
        },
        {
            question: 'What is the capital of Sokoto?',
            options: ['Bodinga', 'Sokoto', 'Wamako', 'Yabo'],
            answer: 'Sokoto',
        },
        {
            question: 'Which of the following is not a Local Government Area of Cross River?',
            options: ['Obudu', 'Akpabuyo', 'Ikom', 'Wurno'],
            answer: 'Wurno',
        },
        {
            question: 'How many Local Government Area doe we have in Lagos?',
            options: ['19', '20', '22', '30'],
            answer: '20',
        },
        {
            question: 'How many Local Government Area do we have in Nigeria?',
            options: ['762', '771', '784', '774'],
            answer: '774',
        },
        {
            question: 'What is the slogan for Osun State?',
            options: ['Center for Excellence', 'The Food Basket', 'State of the Living Spring', 'The Sun Shine State'],
            answer: 'State of the Living Spring',
        },
        {
            question: 'What is the slogan for Lagos State?',
            options: ['Center for Excellence', 'The Food Basket', 'State of the Living Spring', 'The Sun Shine State'],
            answer: 'Center for Excellence',
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(questions[currentNo - 1]);

    useEffect(() => {
        setCurrentQuestion(questions[currentNo - 1]);
        setselectedOption('');
        setShowAnswer('');
    }, [currentNo])

    const [selectedOption, setselectedOption] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);

    const checkAnswer = () => {
        setShowAnswer(true);
        if (currentQuestion.answer === selectedOption) {
            setScore(score => score + 1);
        }
        if (currentQuestion.answer !== selectedOption) {
            if (totalHearts - 1 < 0) {
                return;
            }
            setTotalHearts((totalHearts) => totalHearts - 1);
        }
    }

    const optionStyle = (optionValue) => {

        if (!selectedOption) {
            return;
        }

        if (!showAnswer && selectedOption === optionValue) {
            return { backgroundColor: '#61B7DE', color: 'white' };
        }

        if (showAnswer) {
            // ---  for the selected option
            if (optionValue === selectedOption) {
                if (currentQuestion.answer === optionValue) {
                    return { backgroundColor: '#34A853', color: 'white' };
                } else {
                    return { backgroundColor: '#F44336', color: 'white' };
                }

            }

            // --- do nothing to options that are not the correct answer
            if (currentQuestion.answer !== optionValue) {
                return;
            }

            // --- for the option that is the correct answer, change the color to green
            if (currentQuestion.answer === optionValue) {
                return { backgroundColor: '#34A853', color: 'white' }
            }

        }
    }

    const incrementQuestion = () => {
        setCurrentNo((currentNo) => currentNo + 1);
        scroll();
    }


    return (
        <div>
            <DashboardNavbar showMenu={false} />
            <div className={styles.container} ref={pageRef} >
                {currentNo <= totalNo ?
                    <div className={styles.content}>
                        <Bar percent={`${(currentNo / totalNo) * 100}%`} />
                        <h4>Question {currentNo} of {totalNo}</h4>

                        {/* --- QUIZ QUESTION CONTAINER --- */}
                        <div className={styles.contentBox}>
                            <div className={styles.headContainer}>
                                <HiMiniSpeakerWave size={26} color={'#00000080'} style={{ cursor: 'pointer' }} />
                                <div className={styles.heartContainer}>
                                    {Array.from({ length: totalHearts }).map((_, index) => (
                                        <FaHeart key={index} size={20} color={'#EA4335'} />
                                    ))}
                                    {Array.from({ length: 5 - totalHearts }).map((_, index) => (
                                        <FaHeart key={index} size={20} color={'#00000080'} />
                                    ))}
                                </div>
                            </div>
                            <h3>{currentQuestion.question}</h3>
                            <div className={styles.answerContainer}>
                                {currentQuestion.options.map((option, index) => (
                                    <div key={index} onClick={!showAnswer ? () => setselectedOption(option) : ''} className={styles.answerBox} style={optionStyle(option)}>{option}</div>
                                ))}
                            </div>
                        </div>
                        <button className={styles.checkBtn} onClick={!showAnswer ? checkAnswer : incrementQuestion} disabled={!selectedOption}>{showAnswer ? 'Continue' : 'Check'}</button>

                    </div> :
                    <QuizCompletion xp={'30'} gems={'30'} score={score / totalNo} />
                }
            </div>

        </div>
    )
}

export default LessonGame