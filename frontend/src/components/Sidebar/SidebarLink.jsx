import {Link, useLocation} from "react-router-dom";

function SidebarLink({ url, icon, label, collapsedSidebar }) {
    const location = useLocation();
    const currentPath = location.pathname.substring(1) || 'dashboard';

    return (
        <>
            <Link to={url} className={`btn btn-sidebar p-2 d-flex align-items-center
                                ${collapsedSidebar ? "collapsed" : ""}
                                ${currentPath === url.substring(1) ? "btn-sidebar-active" : ""}`}>
                <i className={`${icon}`}></i> {collapsedSidebar ? null : <h5 className="mb-0 ms-1">{label}</h5>}
            </Link>
        </>
    )
}

export default SidebarLink
