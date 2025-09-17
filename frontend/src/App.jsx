import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";


function App() {
    const location = useLocation();
    const hideSidebar = location.pathname === "/";

    return (
        <>
            <Navbar/>
            <div className="d-flex flex-row">
                {!hideSidebar && <Sidebar/>}
                <AppRoutes/>
            </div>
        </>
    );
}

export default App
