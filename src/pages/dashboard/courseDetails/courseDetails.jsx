import { useState } from 'react';
import styles from './courseDetails.module.css'
import { MdArrowForward } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';


const CourseDetails = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const navigateBack = () => {
    navigate(location.pathname.split('/').slice(0, -1).join('/'));
  }

  const lessons = [
    {
      id: 1,
      topic: 'Definition of Computer',
      slideNo: '15',
      time: '2mins',
      completed: true
    },
    {
      id: 2,
      topic: 'Definition of Computer',
      slideNo: '15',
      time: '2mins',
      completed: false
    },
    {
      id: 3,
      topic: 'Definition of Computer',
      slideNo: '15',
      time: '2mins',
      completed: false
    },
    {
      id: 4,
      topic: 'Definition of Computer',
      slideNo: '15',
      time: '2mins',
      completed: false
    },
    {
      id: 5,
      topic: 'Definition of Computer',
      slideNo: '15',
      time: '2mins',
      completed: false
    },
    {
      id: 6,
      topic: 'Definition of Computer',
      slideNo: '15',
      time: '2mins',
      completed: false
    },
    {
      id: 7,
      topic: 'Definition of Computer',
      slideNo: '15',
      time: '2mins',
      completed: false
    },
    {
      id: 8,
      topic: 'Definition of Computer',
      slideNo: '15',
      time: '2mins',
      completed: false
    },
    {
      id: 9,
      topic: 'Definition of Computer',
      slideNo: '15',
      time: '2mins',
      completed: false
    },
    {
      id: 10,
      topic: 'Definition of Computer',
      slideNo: '15',
      time: '2mins',
      completed: false
    },
  ]

  var description = 'This unit presents the background information about computers. The objective is to help students understand the basic concepts of the history and evolution of computers, the types and classifications of computers, and the key components of a computer system including hardware and software. It also covers input and output devices, data representation and storage, basic computer operations and processing, an introduction to operating systems and application software, the fundamentals of computer networks and the internet, as well as computer ethics and security. By the end of this unit, students will have a foundational understanding of how computers work, their various applications in daily life, and the role they play in modern society.'
  const preview = description.slice(0, 200);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.page}>
      <header>
        <h3>Computer Fundamentals</h3>
        <p onClick={navigateBack}>Go Back <MdArrowForward size={22} /></p>
      </header>
      <p className={styles.description}>
        {expanded ?
          description : `${preview}... `}
        <span onClick={() => setExpanded(!expanded)}> {expanded ? 'Read Less' : 'Read More'} </span>
      </p>

      <div className={styles.lessonContainer}>
        <h3>Lesson</h3>
        {lessons.map((lesson, index) => (
          <div key={index} className={styles.singleLesson} onClick={() => navigate(`${lesson.id}`)}>
            <h3>{lesson.topic}</h3>
            <div className={styles.right}>
              <p style={{ fontFamily: lesson.completed && 'Dm Sans' }}>{lesson.slideNo} Slides</p>
              <p>{lesson.time}</p>
              {lesson.completed && <p className={styles.completed}>Completed</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseDetails