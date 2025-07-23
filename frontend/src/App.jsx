import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {

    return (
        <>
            <div className="d-flex flex-row">
                <Sidebar />
                <Dashboard />
            </div>
        </>
    )
}

export default App
