import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";


function App() {
    return (
        <>
            <Navbar/>
            <div className="d-flex flex-row">
                <Sidebar/>
                <AppRoutes/>
            </div>
        </>
    );
}

export default App
