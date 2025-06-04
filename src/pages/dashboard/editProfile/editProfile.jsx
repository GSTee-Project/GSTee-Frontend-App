import { FaCircleUser } from 'react-icons/fa6';
import styles from './editProfile.module.css';

const EditProfile = () => {
  return (
    <div className={styles.page}>
      <h3>Profile</h3>
      <FaCircleUser className={styles.userIcon} />
      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter name' defaultValue={'Tolu James'} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Username</label>
          <input type="text" placeholder='Enter username' defaultValue={'Tolames'} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Email</label>
          <input type="email" placeholder='Enter email' defaultValue={'tolujames@gmail.com'} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Change Password</label>
          <input type="password" placeholder='Enter new password' defaultValue={'12345678'} />
        </div>
        <button>Save Changes</button>
        <p className={styles.delete}>DELETE MY ACCOUNT</p>
      </div>
    </div>
  )
}

export default EditProfile