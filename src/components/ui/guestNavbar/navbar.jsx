import styles from './navbar.module.css'
import logo from '../../../assets/images/Logo-Coloured.svg'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ModalWrapper from '../modalWrapper/modalWrapper';
import Signup from '../../../pages/guest/auth/signup';
import Login from '../../../pages/guest/auth/login';
import ForgotPassword from '../../../pages/guest/auth/forgotPassword';

const Navbar = () => {

  const location = useLocation();

  const paths = [
    '/',
    '/about',
    '/features',
    '/contact-us'
  ];

  const [authMode, setAuthMode] = useState(null);
  const [open, setOpen] = useState(null);

  const openModal = (mode) => {
    setAuthMode(mode);
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
  }

  const changeAuthMode = (mode) => {
    setAuthMode(mode);
  }


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
        <button onClick={() => openModal('login')}>Login</button>
        <button onClick={() => openModal('signup')}>Sign Up</button>
      </div>

      {/* --- Modal --- */}
      <ModalWrapper open={open} onClose={closeModal}>
        {authMode === 'signup' && <Signup changeAuthMode={changeAuthMode} />}
        {authMode === 'login' && <Login changeAuthMode={changeAuthMode} />}
        {authMode === "forgot-password" && <ForgotPassword changeAuthMode={changeAuthMode} />}
      </ModalWrapper>

    </div>
  )
}

export default Navbar