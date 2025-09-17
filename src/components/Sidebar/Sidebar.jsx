import { useState } from 'react';

import SidebarButton from "./SidebarButton.jsx";

import './Sidebar.css';

function Sidebar() {
    const [collapsedSidebar, setCollapsedSidebar] = useState(false);

    const toggleSidebar = () => {
        setCollapsedSidebar(!collapsedSidebar);
    };

    return (
        <div className="p-4 vh-100 d-flex flex-column sidebar d-none d-md-flex flex-shrink-0"
             style={{ width: collapsedSidebar ? "6rem" : "20rem" }}>
            <div className="d-flex pb-4 align-items-center">
                <span className="mb-0 heading-sidebar">{collapsedSidebar ? "N" : "Nurzy"}</span>
                <h4 className="ms-auto mb-0 icon-collapse">
                    <i className={`bi ${collapsedSidebar ? "bi-arrow-right" : "bi-arrow-left"}`} onClick={toggleSidebar}></i>
                </h4>
            </div>
            <div className={`d-flex pb-4 align-items-center ${collapsedSidebar ? "collapsed d-flex" : ""}`}>
                <div className="icon-profile">
                    <i className="bi bi-person"></i>
                </div>
                {collapsedSidebar ? null : (<h5 className="mb-0 ms-2">Alexander Muñoz</h5>)}
            </div>
            {/* Scrollable middle area for sidebar buttons */}
            <div className="flex-grow-1 overflow-auto min-h-0 pe-1 hide-scrollbar">
                <SidebarButton url="/dashboard" icon="bi bi-bar-chart" label="Dashboard" collapsedSidebar={collapsedSidebar} />
                <SidebarButton url="/jobs" icon="bi bi-briefcase" label="Jobs" collapsedSidebar={collapsedSidebar} />
                <SidebarButton url="/caredits" icon="bi bi-award" label="Caredits" collapsedSidebar={collapsedSidebar} />
                <SidebarButton url="/community" icon="bi bi-people" label="Community" collapsedSidebar={collapsedSidebar} />
                <SidebarButton url="/training" icon="bi bi-mortarboard" label="Training" collapsedSidebar={collapsedSidebar} />
                <SidebarButton url="/manual" icon="bi bi-file-earmark-text" label="Manual" collapsedSidebar={collapsedSidebar} />
                <SidebarButton url="/profile" icon="bi bi-person" label="Profile" collapsedSidebar={collapsedSidebar} />
            </div>
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
