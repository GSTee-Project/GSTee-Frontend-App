import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/guest/homePage/homePage';
import DashboardLayout from '../components/layout/dashboardLayout/dashboardLayout';
import DashboardOverview from '../pages/dashboard/overview/dashboardOverview';
import GuestLayout from '../components/layout/guestLayout/guestLayout';
import PowerUps from '../pages/dashboard/powerUps/powerUps';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<GuestLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='about' element={<>About page</>} />
                    <Route path='features' element={<>Features page</>} />
                    <Route path='contact-us' element={<>Contact Us page</>} />
                </Route>
                <Route path='/dashboard' element={<DashboardLayout />}>
                    <Route index element={<DashboardOverview />} />
                    <Route path='my-courses' element={<>my courses</>} />
                    <Route path='play-games' element={<>play games</>} />
                    <Route path='levels&badges' element={<>levels & badges</>} />
                    <Route path='power-ups' element={<PowerUps/>} />
                    <Route path='leaderboard' element={<>leaderboard</>} />
                    <Route path='help' element={<>help</>} />
                    <Route path='report-bug' element={<>report bug</>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes