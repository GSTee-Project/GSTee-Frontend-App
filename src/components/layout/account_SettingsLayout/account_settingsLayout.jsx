import React from 'react'
import styles from './account_settingsLayout.module.css'
import Sidebar from './sidebar'
import EditProfile from '../../../pages/dashboard/editProfile/editProfile'
import Preferences from '../../../pages/dashboard/preferences/preferences'
import Notifications from '../../../pages/dashboard/notifications/notifications'
import PrivacySettings from '../../../pages/dashboard/privacySettings/privacySettings'
import HelpCenter from '../../../pages/dashboard/helpCenter/helpCenter'
import ReportBug from '../../../pages/dashboard/reportBug/reportBug'
import Tab from './tab'

const Account_SettingsLayout = ({ menu }) => {
    return (
        <div className={styles.layout}>
            <Tab />
            <div className={styles.children}>
                {menu === 'Profile' && <EditProfile />}
                {menu === 'Preferences' && <Preferences />}
                {menu === 'Notifications' && <Notifications />}
                {menu === 'Privacy Settings' && <PrivacySettings />}
                {menu === 'Help Center' && <HelpCenter />}
                {menu === 'Report Bug' && <ReportBug />}
            </div>
            <Sidebar activeMenu={menu} />
        </div>
    )
}

export default Account_SettingsLayout