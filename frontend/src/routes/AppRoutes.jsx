import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard';
import Jobs from '../pages/Jobs/Jobs';
import NotFound from '../pages/NotFound/NotFound';
import Sidebar from '../components/Sidebar/Sidebar';

function SidebarLayout() {
    return (
        <div className="d-flex flex-row">
            <Sidebar/>
            <Outlet/>
        </div>
    );

}

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<SidebarLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/caredits" element={<div className="flex-grow-1 p-3 bg-light"><h2>Caredits</h2><p>Caredits page content</p></div>} />
                <Route path="/profile" element={<div className="flex-grow-1 p-3 bg-light"><h2>Profile</h2><p>Profile page content</p></div>} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
