import { useState } from 'react';

import SidebarLink from "./SidebarLink.jsx";

import './Sidebar.css';

function Sidebar() {
    const [collapsedSidebar, setCollapsedSidebar] = useState(false);

    const toggleSidebar = () => {
        setCollapsedSidebar(!collapsedSidebar);
    };

    return (
        <div className="p-3 vh-100 d-flex flex-column navbar-sidebar d-none d-md-flex"
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
            <SidebarLink url="/dashboard" icon="bi bi-bar-chart" label="Dashboard" collapsedSidebar={collapsedSidebar} />
            <SidebarLink url="/jobs" icon="bi bi-briefcase" label="Jobs" collapsedSidebar={collapsedSidebar} />
            <SidebarLink url="/caredits" icon="bi bi-award" label="Caredits" collapsedSidebar={collapsedSidebar} />
            <SidebarLink url="/profile" icon="bi bi-person" label="Profile" collapsedSidebar={collapsedSidebar} />
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
    )
}

export default Sidebar
