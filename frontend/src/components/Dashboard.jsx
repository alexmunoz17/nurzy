import { useState, useEffect } from 'react';

import './Sidebar.css'

function Dashboard() {
    const [pageIsLoaded, setPageIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPageIsLoaded(true);
        }, 200)
    }, [])

    const animationStyle = {
        transform: pageIsLoaded ? 'translateY(0)' : 'translateY(30px)',
        opacity: pageIsLoaded ? 1 : 0,
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
    };

    return (
        <>
            <div className="flex-grow-1 p-3 bg-light vh-100" style={ animationStyle }>
                <h2>Dashboard</h2>
                <div className="flex-row w-100">
                    <div className="row mb-4">
                        <div className="col-sm-12 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
