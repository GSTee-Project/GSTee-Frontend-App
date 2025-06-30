import { FiSearch } from 'react-icons/fi'
import styles from './searchBox.module.css'

const SearchBox = ({width="100%", placeholder="Search", borderRadius = "10px"}) => {
    return (
        <div className={styles.searchBox} style={{width: width}}>
            <input type="text" placeholder={placeholder} style={{borderRadius: borderRadius}} />
            <FiSearch className={styles.searchIcon} />
        </div>
    )
}

export default SearchBox