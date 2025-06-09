import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/guest/homePage/homePage';
import DashboardLayout from '../components/layout/dashboardLayout/dashboardLayout';
import DashboardOverview from '../pages/dashboard/overview/dashboardOverview';
import LevelsAndBadges from '../pages/levelsAndBadges/levelsAndBadges';
import PowerUps from '../pages/dashboard/powerUps/powerUps';
import Account_SettingsLayout from '../components/layout/account_SettingsLayout/account_settingsLayout';
import ChooseQuizMode from '../pages/dashboard/chooseQuizMode/chooseQuizMode';
import GameModeInfo from '../pages/dashboard/gameModeInfo/gameModeInfo';
import LeaderBoard from '../pages/leaderboard/leaderboard';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/dashboard' element={<DashboardLayout />}>
                    <Route index element={<DashboardOverview />} />
                    <Route path='my-courses' element={<>my courses</>} />
                    <Route path='play-games' element={<ChooseQuizMode />} />
                    <Route path='play-games/quick-quiz-info' element={<GameModeInfo index={0} />} />
                    <Route path='play-games/battle-mode-info' element={<GameModeInfo index={1} />} />
                    <Route path='play-games/memory-match-info' element={<GameModeInfo index={2} />} />
                    <Route path='play-games/challenge-arena-info' element={<GameModeInfo index={3} />} />
                    <Route path='levels&badges' element={<LevelsAndBadges />} />
                    <Route path='power-ups' element={<PowerUps />} />
                    <Route path='leaderboard' element={<LeaderBoard g_coin={1800} streak={7} heart={5}/>} />
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