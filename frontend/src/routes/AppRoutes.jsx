import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Jobs from '../pages/Jobs/Jobs';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/caredits" element={<div className="flex-grow-1 p-3 bg-light"><h2>Caredits</h2><p>Caredits page content</p></div>} />
            <Route path="/profile" element={<div className="flex-grow-1 p-3 bg-light"><h2>Profile</h2><p>Profile page content</p></div>} />
            <Route path="*" element={<Dashboard />} />
        </Routes>
    );
}

export default AppRoutes;
