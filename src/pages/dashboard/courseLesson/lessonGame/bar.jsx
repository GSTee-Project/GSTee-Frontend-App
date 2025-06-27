import styles from './lessonGame.module.css'

const Bar = ({percent}) => {
  return (
    <div className={styles.barWrapper}>
        <div className={styles.bar} style={{width: percent}}>
            
        </div>
    </div>
  )
}

export default Bar