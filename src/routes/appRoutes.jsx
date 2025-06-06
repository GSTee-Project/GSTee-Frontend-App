import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/guest/homePage/homePage';
import DashboardLayout from '../components/layout/dashboardLayout/dashboardLayout';
import DashboardOverview from '../pages/dashboard/overview/dashboardOverview';
import LevelsAndBadges from '../pages/levelsAndBadges/levelsAndBadges';
import PowerUps from '../pages/dashboard/powerUps/powerUps';
import Account_SettingsLayout from '../components/layout/account_SettingsLayout/account_settingsLayout';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/dashboard' element={<DashboardLayout />}>
                    <Route index element={<DashboardOverview />} />
                    <Route path='my-courses' element={<>my courses</>} />
                    <Route path='play-games' element={<>play games</>} />
                    <Route path='levels&badges' element={<LevelsAndBadges />} />
                    <Route path='power-ups' element={<PowerUps />} />
                    <Route path='leaderboard' element={<>leaderboard</>} />
                    <Route path='edit-profile' element={<Account_SettingsLayout menu={'Profile'} />} />
                    <Route path='preferences' element={<Account_SettingsLayout menu={'Preferences'} />} />
                    <Route path='notifications' element={<Account_SettingsLayout menu={'Notifications'} />} />
                    <Route path='privacy-settings' element={<Account_SettingsLayout menu={'Privacy Settings'} />} />
                    <Route path='help-center' element={<Account_SettingsLayout menu={'Help Center'} />} />
                    <Route path='report-bug' element={<Account_SettingsLayout menu={'Report Bug'} />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes