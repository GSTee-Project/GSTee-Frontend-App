import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/guest/homePage/homePage';
import DashboardLayout from '../components/layout/dashboardLayout/dashboardLayout';
import DashboardOverview from '../pages/dashboard/overview/dashboardOverview';
// import PowerUps from '../pages/dashboard/powerUps/powerUps';
import Account_SettingsLayout from '../components/layout/account_SettingsLayout/account_settingsLayout';
import ChooseQuizMode from '../pages/dashboard/chooseQuizMode/chooseQuizMode';
import GameModeInfo from '../pages/dashboard/gameModeInfo/gameModeInfo';
import LeaderBoard from '../pages/dashboard/leaderboard/leaderboard';
import LevelsAndBadges from '../pages/dashboard/levelsAndBadges/levelsAndBadges';
import Power_Ups from '../pages/dashboard/power_ups/power_ups';
import GameLayout from '../components/layout/gameLayout/gameLayout';
import Courses from '../pages/dashboard/coursesPage/courses';
import MyCourses from '../pages/dashboard/myCoursesPage/myCourses';
import CourseDetails from '../pages/dashboard/courseOverview/courseDetails';
import CourseLesson from '../pages/dashboard/courseLesson/courseLesson';
import CompletedCourses from '../pages/dashboard/myCoursesPage/completedCourses';
import OngoingCourses from '../pages/dashboard/myCoursesPage/ongoingCourses';
import PopularCourses from '../pages/dashboard/coursesPage/popularCourses';
import AllCourses from '../pages/dashboard/coursesPage/allCourses';
import LessonGame from '../pages/dashboard/courseLesson/lessonGame/lessonGame';
import Profile from '../pages/dashboard/profile/profile';
import MemoryMatch from '../pages/games/memoryMatch/memoryMatch';
import QuickQuiz from '../pages/games/quickQuiz/quickQuiz';
import BattleMode from '../pages/games/battleMode/battleMode';
import ChallengeArena from "../pages/games/challengeArena/challengeArena";



const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/dashboard' element={<DashboardLayout />}>
                    <Route index element={<DashboardOverview />} />

                    {/* --- Courses route --- */}
                    <Route path='courses' element={<Courses />} />
                    <Route path='courses/popular' element={<PopularCourses />} />
                    <Route path='courses/all' element={<AllCourses />} />
                    <Route path='courses/:id' element={<CourseDetails />} />
                    <Route path='courses/:id/:id' element={<CourseLesson />} />

                    {/* --- My Courses Route --- */}
                    <Route path='my-courses' element={<MyCourses />} />
                    <Route path='my-courses/completed' element={<CompletedCourses />} />
                    <Route path='my-courses/ongoing' element={<OngoingCourses />} />
                    <Route path='my-courses/:id' element={<CourseDetails />} />
                    <Route path='my-courses/:id/:id' element={<CourseLesson />} />

                    <Route path='play-games' element={<ChooseQuizMode />} />
                    <Route path='play-games/quick-quiz-info' element={<GameModeInfo index={0} />} />
                    <Route path='play-games/battle-mode-info' element={<GameModeInfo index={1} />} />
                    <Route path='play-games/memory-match-info' element={<GameModeInfo index={2} />} />
                    <Route path='play-games/challenge-arena-info' element={<GameModeInfo index={3} />} />
                    <Route path='levels&badges' element={<LevelsAndBadges />} />
                    <Route path='power-ups' element={<Power_Ups />} />
                    <Route path='leaderboard' element={<LeaderBoard />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='edit-profile' element={<Account_SettingsLayout menu={'Profile'} />} />
                    <Route path='preferences' element={<Account_SettingsLayout menu={'Preferences'} />} />
                    <Route path='notifications' element={<Account_SettingsLayout menu={'Notifications'} />} />
                    <Route path='privacy-settings' element={<Account_SettingsLayout menu={'Privacy Settings'} />} />
                    <Route path='help-center' element={<Account_SettingsLayout menu={'Help Center'} />} />
                    <Route path='report-bug' element={<Account_SettingsLayout menu={'Report Bug'} />} />
                </Route>

                {/* --- lesson game --- */}
                <Route path='/dashboard/courses/:id/:id/game' element={<LessonGame />} />
                <Route path='/dashboard/my-courses/:id/:id/game' element={<LessonGame />} />

                {/* --- games section --- */}
                <Route path='/games' element={<GameLayout />}>
                    <Route path='quick-quiz' element={<QuickQuiz />} />
                    <Route path='battle-mode' element={<BattleMode/>} />
                    <Route path='memory-match' element={<MemoryMatch />} />
                    <Route path='challenge-arena' element={<ChallengeArena/>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes