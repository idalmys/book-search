import React from "react";
import { Link } from "react-router-dom"
import  "./nav.css";

function Nav() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container">
                <Link className="navbar-brand" to="#">GOOGLE BOOK SEARCH</Link>

                <div className="navbar">
                    <ul className="navbar-nav mr-auto mt-2 mb-2 mt-lg-0">
                        <li className="nav-item ">
                            <Link className="nav-link " to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " to="/saved">Saved</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav >


    )

}

export default Nav;