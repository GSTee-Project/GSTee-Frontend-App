import heartIcon from '../../../assets/images/heart.svg'
import styles from './items.module.css'

const Heart = ({value = 0}) => {
    return (
        <div className={styles.container} style={{color: '#EA4335'}}>
            <img src={heartIcon} className={styles.image} alt="" />
            {value}
        </div>
    )
}

export default Heart