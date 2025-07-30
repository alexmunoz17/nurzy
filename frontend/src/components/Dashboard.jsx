import { useState, useEffect } from 'react';

import './Dashboard.css'

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
            <div className="flex-grow-1 p-3 ps-5 pe-5 bg-light vh-100" style={ animationStyle }>
                <h2>Dashboard</h2>
                <div className="flex-row w-100">
                    <div className="row mb-4">
                        <div className="col-sm-3 mb-3 mb-sm-0">
                            <div className="card nurzy-card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-8">
                                            <p className="text-sm mb-0 text-uppercase font-weight-bold">Open applications</p>
                                            <h5 className="font-weight-bolder">4</h5>
                                            <p className="mb-0">Waiting for answer</p>
                                        </div>
                                        <div className="col-4">
                                            <div
                                                className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                                                <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mb-3 mb-sm-0">
                        <div className="card nurzy-card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mb-3 mb-sm-0">
                            <div className="card nurzy-card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mb-3 mb-sm-0">
                            <div className="card nurzy-card">
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
