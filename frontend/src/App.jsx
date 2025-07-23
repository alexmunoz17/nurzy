import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Jobs from "./components/Jobs.jsx";
import {useState} from "react";

function App() {

    const [selectedPage, setSelectedPage] = useState("dashboard");

    const onSelectPage = (page) => {
        setSelectedPage(page);
    };

    return (
        <>
            <Navbar selectedPage={selectedPage} onSelectPage={onSelectPage}/>
            <div className="d-flex flex-row">
                <Sidebar selectedPage={selectedPage} onSelectPage={onSelectPage} />
                {selectedPage === "dashboard" ? (<Dashboard />) : null}
                {selectedPage === "jobs" ? (<Jobs />) : null}
            </div>
        </>
    )
}

export default App
