import {Link, useLocation} from "react-router-dom";

function SidebarButton({ url, icon, label, collapsedSidebar }) {
    const location = useLocation();
    const currentPath = location.pathname.substring(1) || 'dashboard';

    return (
        <>
            <Link to={url} className={`btn btn-sidebar p-3 d-flex align-items-center
                                ${collapsedSidebar ? "collapsed" : ""}
                                ${currentPath === url.substring(1) ? "btn-sidebar-active" : ""}`}>
                <i className={`${icon}`}></i> {collapsedSidebar ? null : <span className="mb-0 ms-3">{label}</span>}
            </Link>
        </>
    )
}

export default SidebarButton
