import { useState } from 'react'
import styles from './toggleButton.module.css'

const ToggleButton = ({ on }) => {

    const [onStatus, setOnStatus] = useState(on);

    return (
        <div className={styles.container} style={{backgroundColor: !onStatus && "#000000CC"}} onClick={() => setOnStatus(status => !status)}>
            <div className={styles.circle} id={onStatus ? styles.circleOn : ''} ></div>
        </div>
    )
}

export default ToggleButton