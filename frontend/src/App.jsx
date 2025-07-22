import Sidebar from "./components/Sidebar.jsx";

function App() {

    return (
        <>
            <div className="d-flex flex-row">
                <Sidebar />
                <div className="flex-grow-1 p-3 bg-light">
                    <h2>Main Content</h2>
                    <p>This is where your main content will appear.</p>
                </div>
            </div>
        </>
    )
}

export default App
