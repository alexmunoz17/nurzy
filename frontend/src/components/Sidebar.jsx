import { useState } from 'react';

import './Sidebar.css'

function Sidebar() {
    const [collapsedSidebar, setCollapsedSidebar] = useState(false);
    const [sidebarButtonIsActive, setSidebarButtonIsActive] = useState("dashboard");

    const toggleSidebar = () => {
        setCollapsedSidebar(!collapsedSidebar);
    };

    return (
        <>
            <div className="p-3 vh-100 d-flex flex-column navbar-sidebar"
                 style={{ width: collapsedSidebar ? "5rem" : "16rem" }}>
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
                <button className={`btn btn-sidebar p-2
                                    ${collapsedSidebar ? "collapsed d-flex" : ""}
                                    ${sidebarButtonIsActive === "dashboard" ? "btn-sidebar-active" : ""}`}
                        onClick={() => setSidebarButtonIsActive("dashboard")}>
                    <i className="bi bi-bar-chart"></i> {collapsedSidebar ? null : "Dashboard"}
                </button>
                <button className={`btn btn-sidebar p-2
                                    ${collapsedSidebar ? "collapsed d-flex" : ""}
                                    ${sidebarButtonIsActive === "jobs" ? "btn-sidebar-active" : ""}`}
                        onClick={() => setSidebarButtonIsActive("jobs")}>
                    <i className="bi bi-briefcase"></i> {collapsedSidebar ? null : "Jobs"}
                </button>
                <button className={`btn btn-sidebar p-2
                                    ${collapsedSidebar ? "collapsed d-flex" : ""}
                                    ${sidebarButtonIsActive === "caredits" ? "btn-sidebar-active" : ""}`}
                        onClick={() => setSidebarButtonIsActive("caredits")}>
                    <i className="bi bi-award"></i> {collapsedSidebar ? null : "Caredits"}
                </button>
                <button className={`btn btn-sidebar p-2
                                    ${collapsedSidebar ? "collapsed d-flex" : ""}
                                    ${sidebarButtonIsActive === "profile" ? "btn-sidebar-active" : ""}`}
                        onClick={() => setSidebarButtonIsActive("profile")}>
                    <i className="bi bi-person"></i> {collapsedSidebar ? null : "Profile"}
                </button>
                <div className="d-flex flex-column mt-auto">
                    <hr/>
                    <button className="btn btn-primary p-2">
                        Upgrade to Premium
                    </button>
                    <button className="btn btn-primary p-2 mt-2">
                        Contact support
                    </button>
                    <button className="btn btn-logout p-2 mt-2">
                        Log out
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
