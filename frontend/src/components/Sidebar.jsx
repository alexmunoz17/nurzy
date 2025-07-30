import { useState } from 'react';

import './Sidebar.css'

function Sidebar({ selectedPage, onSelectPage }) {
    const [collapsedSidebar, setCollapsedSidebar] = useState(false);

    const toggleSidebar = () => {
        setCollapsedSidebar(!collapsedSidebar);
    };

    return (
        <>
            <div className="p-3 vh-100 d-flex flex-column navbar-sidebar d-none d-md-flex"
                 style={{ minWidth: collapsedSidebar ? "5rem" : "16rem" }}>
                <div className="d-flex align-items-center">
                    <h4 className="mb-0 heading-sidebar">{collapsedSidebar ? "N" : "Nurzy"}</h4>
                    <h4 className="ms-auto mb-0 icon-collapse">
                        <i className={`bi ${collapsedSidebar ? "bi-arrow-right" : "bi-arrow-left"}`} onClick={toggleSidebar}></i>
                    </h4>
                </div>
                <hr/>
                <div className={`d-flex align-items-center ${collapsedSidebar ? "collapsed d-flex" : ""}`}>
                    <div className="icon-profile">
                        <i className="bi bi-person"></i>
                    </div>
                    {collapsedSidebar ? null : (<h5 className="mb-0 ms-2">Alex</h5>)}
                </div>
                <hr/>
                <button className={`btn btn-sidebar p-2 d-flex align-items-center
                                    ${collapsedSidebar ? "collapsed" : ""}
                                    ${selectedPage === "dashboard" ? "btn-sidebar-active" : ""}`}
                        onClick={() => onSelectPage("dashboard")}>
                    <i className="bi bi-bar-chart"></i> {collapsedSidebar ? null : <h5 className="mb-0 ms-1">Dashboard</h5>}
                </button>
                <button className={`btn btn-sidebar p-2 d-flex align-items-center
                                    ${collapsedSidebar ? "collapsed" : ""}
                                    ${selectedPage === "jobs" ? "btn-sidebar-active" : ""}`}
                        onClick={() => onSelectPage("jobs")}>
                    <i className="bi bi-briefcase"></i> {collapsedSidebar ? null : <h5 className="mb-0 ms-1">Jobs</h5>}
                </button>
                <button className={`btn btn-sidebar p-2 d-flex align-items-center
                                    ${collapsedSidebar ? "collapsed" : ""}
                                    ${selectedPage === "caredits" ? "btn-sidebar-active" : ""}`}
                        onClick={() => onSelectPage("caredits")}>
                    <i className="bi bi-award"></i> {collapsedSidebar ? null : <h5 className="mb-0 ms-1">Caredits</h5>}
                </button>
                <button className={`btn btn-sidebar p-2 d-flex align-items-center
                                    ${collapsedSidebar ? "collapsed" : ""}
                                    ${selectedPage === "profile" ? "btn-sidebar-active" : ""}`}
                        onClick={() => onSelectPage("profile")}>
                    <i className="bi bi-person"></i> {collapsedSidebar ? null : <h5 className="mb-0 ms-1">Profile</h5>}
                </button>
                <div className="d-flex flex-column mt-auto">
                    <hr/>
                    <button className={`btn btn-sidebar p-2 mt-2 d-flex align-items-center
                                        ${collapsedSidebar ? "collapsed" : ""}`}>
                        <i className="bi bi-chevron-double-up"></i> {collapsedSidebar ? null : <h5 className="mb-0 ms-1">Upgrade to Premium</h5>}
                    </button>
                    <button className={`btn btn-sidebar p-2 mt-2 d-flex align-items-center
                                        ${collapsedSidebar ? "collapsed" : ""}`}>
                        <i className="bi bi-question-circle"></i> {collapsedSidebar ? null : <h5 className="mb-0 ms-1">Contact support</h5>}
                    </button>
                    <button className={`btn btn-sidebar btn-logout p-2 mt-2 d-flex align-items-center
                                        ${collapsedSidebar ? "collapsed" : ""}`}>
                        <i className="bi bi-box-arrow-right"></i> {collapsedSidebar ? null : <h5 className="mb-0 ms-1">Log out</h5>}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
