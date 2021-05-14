import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <nav >
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/auth">Log in</Link>
                    </li>
                    <li>
                        <Link to="/album">Album</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
