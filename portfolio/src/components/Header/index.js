import React from "react";
import "../../sass/header.scss";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <button className="navbar-brand">
                <Link to="/home" className={location.pathname === "/" ? "nav-link active" : "nav-link"} id="navbar-brand">
                Caitlin Collins
                </Link>
            </button>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav navigation">
                    <li className="nav-item">
                        <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
 )
}



export default Header;