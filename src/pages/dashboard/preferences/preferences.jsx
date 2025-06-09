import ToggleButton from '../../../components/ui/toggleButton/toggleButton';
import styles from './preferences.module.css';
import { MdKeyboardArrowDown } from "react-icons/md";

const Preferences = () => {
  return (
    <div className={styles.page}>
      <h3>Preferences</h3>

      <div className={styles.group}>
        <h4>Lesson Experience</h4>
        <div>
          <div className={styles.menu}>
            Sound effects
            <ToggleButton on={true} />
          </div>
          <div className={styles.menu}>
            Animations
            <ToggleButton on={true} />
          </div>
          <div className={styles.menu}>
            Motivational Messages
            <ToggleButton on={true} />
          </div>
          <div className={styles.menu}>
            Listening Exercise
            <ToggleButton on={true} />
          </div>
        </div>
      </div>

      <div className={styles.group}>
        <h4>Appearance</h4>
        <div className={styles.formInput}>
          <label htmlFor="systemDefault">Theme</label>
          <div className={styles.selectContainer}>
            <select name="" id="systemDefault">
              <option value="">System Default</option>
            </select>
            <MdKeyboardArrowDown className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preferences