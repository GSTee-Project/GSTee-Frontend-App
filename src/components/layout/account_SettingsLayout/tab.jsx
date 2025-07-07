import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './account_settingsLayout.module.css'

const Tab = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const tab = {
    account: [
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
        name: 'Privacy',
        path: '/dashboard/privacy-settings'
      },
    ],
    support: [
      {
        name: 'Help Center',
        path: '/dashboard/help-center'
      },
      {
        name: 'Report Bug',
        path: '/dashboard/report-bug'
      },
    ]
  }

  return (
    <div className={styles.tab}>
      <div className={styles.tabHeader}>
        <p className={tab.account.some(item => item.path === location.pathname) && styles.active} onClick={() => navigate('/dashboard/edit-profile')}>Account</p>
        <p className={tab.support.some(item => item.path === location.pathname) && styles.active} onClick={() => navigate('/dashboard/help-center')}>Support</p>
      </div>
      {tab.account.some(item => item.path === location.pathname) ?
        <div className={styles.tabContent}>
          {tab.account.map(({ name, path }, index) => (
            <div key={index} onClick={() => navigate(path)} className={path === location.pathname && styles.active}>{name}</div>
          ))}
        </div>
        :
        <div className={styles.tabContent}>
          {tab.support.map(({ name, path }, index) => (
            <div key={index} onClick={() => navigate(path)} className={path === location.pathname && styles.active}>{name}</div>
          ))}
        </div>
      }
    </div>
  )
}

export default Tab