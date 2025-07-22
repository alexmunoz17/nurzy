import { useState } from 'react';

function Sidebar() {
    const [collapsedSidebar, setCollapsedSidebar] = useState(false);

    const toggleSidebar = () => {
        setCollapsedSidebar(!collapsedSidebar);
    };

    return (
        <>
            <div className="p-3 vh-100 d-flex flex-column"
                 style={{ width: collapsedSidebar ? '5rem' : '16rem', transition: 'width 0.3s' }}>
                <div className="d-flex">
                    <h4>{collapsedSidebar ? 'N' : 'Nurzy'}</h4>
                    <h4 className="ms-auto" style={{ cursor: 'pointer' }}>
                        {collapsedSidebar ? (
                            <i className="bi bi-arrow-right" onClick={toggleSidebar}></i>
                        ) : (
                            <i className="bi bi-arrow-left" onClick={toggleSidebar}></i>
                        )}
                    </h4>
                </div>
                <hr/>
                <div className="d-flex">
                    <div style={{color: "white", fontSize: "1.5rem", borderRadius: "50%", height: "2.5rem", width: "2.5rem", alignItems: "center", display: "flex", justifyContent: "center", background: "linear-gradient(135deg, #a144f3, #bc62f7)"}}>
                        <i className="bi bi-person"></i>
                    </div>
                    <h5>Alex</h5>
                </div>
                <hr/>
                <button className="btn btn-primary p-2">
                    Dashboard
                </button>
                <button className="btn btn-primary p-2">
                    Jobs
                </button>
                <button className="btn btn-primary p-2">
                    Caredits
                </button>
                <button className="btn btn-primary p-2">
                    Profil
                </button>
                <div className="d-flex flex-column mt-auto">
                    <hr/>
                    <button className="btn btn-primary p-2">
                        Auf Premium upgraden
                    </button>
                    <button className="btn btn-primary p-2 mt-2">
                        Support kontaktieren
                    </button>
                    <button className="btn btn-primary p-2 mt-2">
                        Abmelden
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
