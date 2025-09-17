import {Link, useLocation} from "react-router-dom";

function NavbarLink({ url, icon, label }) {
    const location = useLocation();
    const currentPath = location.pathname.substring(1) || 'dashboard';

    return (
        <>
            <Link to={url} className={`btn btn-navbar p-2 ${currentPath === url.substring(1) ? "btn-navbar-active" : ""}`}>
                <i className={`${icon}`}></i> {label}
            </Link>
        </>
    )
}

export default NavbarLink
