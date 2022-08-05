import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg bg">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/">ReactWebsite</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link activeClassName='menu-active' className="nav-link" aria-current="page" to="/">Home</Link>
                                        </li>

                                        <li activeClassName='menu-active' className="nav-item">
                                            <Link className="nav-link" to="/about">About</Link>
                                        </li>

                                        <li activeClassName='menu-active' className="nav-item">
                                            <Link className="nav-link" to="/contact">Contact</Link>
                                        </li>

                                        <li activeClassName='menu-active' className="nav-item">
                                            <Link className="nav-link" to="/service">Services</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar