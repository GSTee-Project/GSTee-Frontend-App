import styles from './navbar.module.css'
import logo from '../../../assets/images/Logo-Coloured.svg'
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import ModalWrapper from '../modalWrapper/modalWrapper';
import Signup from '../../../pages/guest/auth/signup';
import Login from '../../../pages/guest/auth/login';
import ForgotPassword from '../../../pages/guest/auth/forgotPassword';
import Welcome from '../../../pages/guest/auth/welcome';
import ContactUs from '../../../pages/guest/homePage/contactUs/contactUs';

const Navbar = ({ activeSection, scrollToTop }) => {

  const [currentLink, setCurrentLink] = useState('#home');


  useEffect(() => {
    setCurrentLink(activeSection);
  }, [activeSection])

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
        <Link onClick={scrollToTop} className={currentLink === '#home' ? styles.active : ''}>Home</Link>
        <Link to='/#about' onClick={() => setCurrentLink('#about')} className={currentLink === '#about' ? styles.active : ''}>About</Link>
        <Link to='/#features' onClick={() => setCurrentLink('#features')} className={currentLink === '#features' ? styles.active : ''}>Features</Link>
        <Link onClick={() => openModal('contact')}>Contact Us</Link>
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
        {authMode === "welcome" && <Welcome onClose={closeModal} />}
        {authMode === "contact" && <ContactUs onClose={closeModal} /> }
      </ModalWrapper>

    </div>
  )
}

export default Navbar