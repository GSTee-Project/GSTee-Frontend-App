import styles from './dailyQuest.module.css'

const Quest = ({image, text, currentValue, totalValue}) => {

    var width = (Number(currentValue)/Number(totalValue))*100;

  return (
    <div className={styles.quest}>
        <img src={image} alt="" />
        <div className={styles.content}>
            <h4>{text}</h4>
            <div className={styles.progressBar}>
                <div className={styles.progress} style={{width: `${width}%`}}>
                    <p>{currentValue} / {totalValue}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quest