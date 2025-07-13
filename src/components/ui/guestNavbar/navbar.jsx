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
import { LuSquareMenu } from "react-icons/lu";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Navbar = ({ activeSection, scrollToTop }) => {

  const [currentLink, setCurrentLink] = useState('#home');
  const [openNav, setOpenNav] = useState(false);


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

  const toggleNav = () => {
    setOpenNav(!openNav);
  }


  return (
    <>
    {/* --- Desktop Nav Bar --- */}
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
        <button onClick={() => {
          openModal('login');
          setOpenNav(false);
        }}>Login</button>
        <button onClick={() => {
          openModal('signup');
          setOpenNav(false);
        }}>Sign Up</button>
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

    {/* --- Mobile Nav Bar--- */}
    <div className={styles.mobileNav}>
      <div className={styles.smallContainer}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.openMenu}>
          <LuSquareMenu onClick={toggleNav} className={styles.menuIcon}/>
      </div>
    </div>

    <div className={`${styles.sideBar} ${openNav ? styles.mobileNavActive : ''}`}>
      <div className={styles.closeMenu}>
        <img src={logo} alt="" />
        <AiOutlineCloseSquare onClick={toggleNav} className={styles.closeIcon}/>  
      </div>

      <div className={styles.mobileNavlinks}>
        <Link onClick={scrollToTop} className={currentLink === '#home' ? styles.active : ''}>Home</Link>
        <Link to='/#about' onClick={() => {
          setCurrentLink('#about');
          setOpenNav(false);
        }} 
        className={currentLink === '#about' ? styles.active : ''}>
          About
        </Link>
        <Link to='/#features' onClick={() => {
          setCurrentLink('#features');
          setOpenNav(false);
        }} 
        className={currentLink === '#features' ? styles.active : ''}>
         Features
        </Link>
       <Link onClick={() => {
        openModal('contact');
        setOpenNav(false);
       }}>
        Contact Us
      </Link>
      </div>

      <div className={styles.sideBarBtns}>
        <button onClick={() => {
          openModal('login');
          setOpenNav(false);
        }}>Log In</button>
        <button onClick={() => {
          openModal('signup');
          setOpenNav(false);
        }}>Sign Up</button>
      </div>
    </div>
    </>
  )
}

export default Navbar