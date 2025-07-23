import './Navbar.css'

function Navbar({ selectedPage, onSelectPage }) {

    return (
        <>
            <div className="d-flex flex-row p-3 align-items-center d-md-none w-100">
                <h4 className="mb-0 heading-sidebar">Nurzy</h4>
                <div className="ms-auto d-flex align-items-center">
                    <button className="btn btn-primary me-3 btn-navbar">Premium</button>
                    <button className="btn me-3 btn-navbar">
                        <i className="bi bi-question-circle"></i>
                    </button>
                    <button className="btn btn-navbar-logout btn-navbar">
                        <i className="bi bi-box-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div className="d-flex flex-row p-3 justify-content-between d-md-none w-100" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                <button className={`btn btn-sidebar p-2 ${selectedPage === "dashboard" ? "btn-sidebar-active" : ""}`}
                        onClick={() => onSelectPage("dashboard")}>
                    <i className="bi bi-bar-chart"></i> Dashboard
                </button>
                <button className={`btn btn-sidebar p-2 ${selectedPage === "jobs" ? "btn-sidebar-active" : ""}`}
                        onClick={() => onSelectPage("jobs")}>
                    <i className="bi bi-briefcase"></i> Jobs
                </button>
                <button className={`btn btn-sidebar p-2 ${selectedPage === "caredits" ? "btn-sidebar-active" : ""}`}
                        onClick={() => onSelectPage("caredits")}>
                    <i className="bi bi-award"></i> Caredits
                </button>
                <button className={`btn btn-sidebar p-2 ${selectedPage === "profile" ? "btn-sidebar-active" : ""}`}
                        onClick={() => onSelectPage("profile")}>
                    <i className="bi bi-person"></i> Profile
                </button>
            </div>
        </>
    )
}

export default Navbar
