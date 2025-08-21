import DashboardPageHeader from '../../../components/ui/dashboardPageHeader/dashboardPageHeader'
import SearchBox from '../../../components/ui/searchBox/searchBox'
import styles from './myCourses.module.css'
import courseImg from '../../../assets/images/lesson_image.jpg'
import CourseCard from '../../../components/ui/courseCard/courseCard'
import { useNavigate } from 'react-router-dom'

const MyCourses = () => {

  const navigate = useNavigate();

  const completed_courses = [
    {
      id: 1,
      image: courseImg,
      title: 'Computer Fundamentals',
      lessonNo: '15',
      hourNo: '15'
    },
    {
      id: 2,
      image: courseImg,
      title: 'Computer Fundamentals',
      lessonNo: '15',
      hourNo: '15'
    },
    {
      id: 3,
      image: courseImg,
      title: 'Computer Fundamentals',
      lessonNo: '15',
      hourNo: '15'
    },
  ]

  const ongoing_courses = [
    {
      id: 4,
      image: courseImg,
      title: 'Computer Fundamentals',
      lessonNo: '1/15',
      hourNo: '15'
    },
    {
      id: 5,
      image: courseImg,
      title: 'Computer Fundamentals',
      lessonNo: '2/15',
      hourNo: '15'
    },
    {
      id: 6,
      image: courseImg,
      title: 'Computer Fundamentals',
      lessonNo: '3/15',
      hourNo: '15'
    },
  ]

  return (
    <div className={styles.page}>
      <DashboardPageHeader headText='My Courses' />
      <SearchBox width='50%' borderRadius='16px' />

      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h3>Completed Courses</h3>
          <p onClick={() => navigate('completed')}>View All</p>
        </div>
        <div className={styles.cardContainer}>
          {completed_courses.map((course, index) => (
            <CourseCard key={index} id={course.id} image={course.image} title={course.title} lessonNo={course.lessonNo} hourNo={course.hourNo} />
          ))}
        </div>

        <div className={styles.containerHeader} style={{marginTop: '40px'}}>
          <h3>Ongoing Courses</h3>
          <p onClick={() => navigate('ongoing')}>View All</p>
        </div>
        <div className={styles.cardContainer}>
          {ongoing_courses.map((course, index) => (
            <CourseCard key={index} id={course.id} image={course.image} title={course.title} lessonNo={course.lessonNo} hourNo={course.hourNo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyCourses