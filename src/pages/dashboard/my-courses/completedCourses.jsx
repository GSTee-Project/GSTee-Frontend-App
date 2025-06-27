import DashboardPageHeader from '../../../components/ui/dashboardPageHeader/dashboardPageHeader'
import SearchBox from '../../../components/ui/searchBox/searchBox'
import styles from './myCourses.module.css'
import courseImg from '../../../assets/images/lesson_image.jpg'
import CourseCard from '../../../components/ui/courseCard/courseCard'

const CompletedCourses = () => {

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
    {
      id: 4,
      image: courseImg,
      title: 'Use of English & communicaion skills II',
      lessonNo: '15',
      hourNo: '15'
    },
    {
      id: 5,
      image: courseImg,
      title: 'Use of English & communicaion skills II',
      lessonNo: '15',
      hourNo: '15'
    },
    {
      id: 6,
      image: courseImg,
      title: 'Use of English & communicaion skills II',
      lessonNo: '15',
      hourNo: '15'
    },
  ]


  return (
    <div className={styles.page}>
      <DashboardPageHeader headText='Completed Courses' />
      <SearchBox width='50%' borderRadius='16px' />

      <div className={styles.container}>
        <div className={styles.cardContainer}>
          {completed_courses.map((course, index) => (
            <CourseCard key={index} id={course.id} image={course.image} title={course.title} lessonNo={course.lessonNo} hourNo={course.hourNo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompletedCourses