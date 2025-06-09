import styles from './modeModalContent.module.css'

const RadioBtn = ({active}) => {
  return (
    <div className={styles.radiobtn} id={active ? styles.active : ''}>
    </div>
  )
}

export default RadioBtn