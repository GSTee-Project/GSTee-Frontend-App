import styles from './navbar.module.css'
import logo from '../../../assets/images/Logo-Coloured.svg'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();

  const paths = [
    '/',
    '/about',
    '/features', 
    '/contact-us'
  ]

  return (
    <div className={styles.navbar}>
      <div className={styles.smallContainer}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.navLinks}>
        <Link to={paths[0]} className={location.pathname === paths[0] ? styles.active : ''}>Home</Link>
        <Link to={paths[1]} className={location.pathname === paths[1] ? styles.active : ''}>About</Link>
        <Link to={paths[2]} className={location.pathname === paths[2] ? styles.active : ''}>Features</Link>
        <Link to={paths[3]} className={location.pathname === paths[3] ? styles.active : ''}>Contact Us</Link>
      </div>
      <div className={styles.smallContainer}>
        <button>Login</button>
        <button>Sign Up</button>
      </div>

    </div>
  )
}

export default Navbar