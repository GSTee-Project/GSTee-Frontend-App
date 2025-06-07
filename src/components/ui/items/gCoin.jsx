import coinIcon from '../../../assets/images/G-coin.svg'
import styles from './items.module.css'

const GCoin = ({ value = 0 }) => {
    return (
        <div className={styles.container} style={{color: '#0866FF'}}>
            <img src={coinIcon} className={styles.image} alt="" />
            {value}
        </div>
    )
}

export default GCoin