import styles from './heart.module.css'
import { FaHeart } from "react-icons/fa6";

const Heart = ({color}) => {
  return (
    <div>
        <FaHeart size={18} style={{color: color}} />
    </div>
  )
}

export default Heart