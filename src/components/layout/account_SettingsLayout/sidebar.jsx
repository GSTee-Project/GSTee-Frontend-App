import React from 'react'
import styles from './account_settingsLayout.module.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const menu = [
        {
            name: 'Profile',
            path: '/dashboard/edit-profile'
        },
        {
            name: 'Preferences',
            path: '/dashboard/preferences'
        },
        {
            name: 'Notifications',
            path: '/dashboard/notifications'
        },
        {
            name: 'Privacy Settings',
            path: '/dashboard/privacy-settings'
        },
        {
            name: 'Help Center',
            path: '/dashboard/help-center'
        },
        {
            name: 'Report Bug',
            path: '/dashboard/report-bug'
        },
    ]

    return (
        <div className={styles.sidebarSection}>
            <div className={styles.sidebarContainer}>
                <h3>Account</h3>
                {menu.slice(0, 4).map((menu, index) => (
                    <p key={index} className={location.pathname === menu.path ? styles.active : ''} onClick={() => navigate(menu.path)}>{menu.name}</p>
                ))}
            </div>
            <div className={styles.sidebarContainer}>
                <h3>Support</h3>
                {menu.slice(4, 6).map((menu, index) => (
                    <p key={index} className={location.pathname === menu.path ? styles.active : ''} onClick={() => navigate(menu.path)}>{menu.name}</p>
                ))}
            </div>
            <button className={styles.btn}>LOG OUT</button>
        </div>
    )
}

export default Sidebar