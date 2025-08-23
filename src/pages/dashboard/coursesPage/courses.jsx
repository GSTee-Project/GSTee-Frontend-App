import DashboardPageHeader from '../../../components/ui/dashboardPageHeader/dashboardPageHeader'
import SearchBox from '../../../components/ui/searchBox/searchBox'
import styles from './courses.module.css'
import courseImg from '../../../assets/images/lesson_image.jpg'
import CourseCard from '../../../components/ui/courseCard/courseCard'
import { useNavigate } from 'react-router-dom'

const Courses = () => {

  const navigate = useNavigate();

  const popular_courses = [
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
      title: 'Use of English & communicaion skills I',
      lessonNo: '15',
      hourNo: '15'
    },
    {
      id: 3,
      image: courseImg,
      title: 'Use of English & communicaion skills II',
      lessonNo: '15',
      hourNo: '15'
    },
  ]

  const all_courses = [
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
      title: 'Use of English & communicaion skills I',
      lessonNo: '2/15',
      hourNo: '15'
    },
    {
      id: 6,
      image: courseImg,
      title: 'Use of English & communicaion skills II',
      lessonNo: '3/15',
      hourNo: '15'
    },
  ]

  return (
    <div className={styles.page}>
      <DashboardPageHeader headText='Courses' />
      <SearchBox width='50%' borderRadius='16px' />

      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h3>Popular Courses</h3>
          <p onClick={() => navigate('popular')}>View All</p>
        </div>
        <div className={styles.cardContainer}>
          {popular_courses.map((course, index) => (
            <CourseCard key={index} id={course.id} image={course.image} title={course.title} lessonNo={course.lessonNo} hourNo={course.hourNo} />
          ))}
        </div>

        <div className={styles.containerHeader} style={{marginTop: '40px'}}>
          <h3>All Courses</h3>
          <p onClick={() => navigate('all')}>View All</p>
        </div>
        <div className={styles.cardContainer}>
          {all_courses.map((course, index) => (
            <CourseCard key={index} id={course.id} image={course.image} title={course.title} lessonNo={course.lessonNo} hourNo={course.hourNo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses