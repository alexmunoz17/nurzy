import NavbarLink from "./NavbarLink.jsx";

import './Navbar.css';

function Navbar() {
    return (
        <>
            <div className="d-flex flex-row p-3 align-items-center d-md-none w-100">
                <h4 className="mb-0 heading-navbar">Nurzy</h4>
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
                <NavbarLink url="/dashboard" icon="bi bi-bar-chart" label="Dashboard" />
                <NavbarLink url="/jobs" icon="bi bi-briefcase" label="Jobs" />
                <NavbarLink url="/caredits" icon="bi bi-award" label="Caredits" />
                <NavbarLink url="/profile" icon="bi bi-person" label="Profile" />
            </div>
        </>
    );
}

export default Navbar
