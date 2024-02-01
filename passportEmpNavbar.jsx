import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand ms-4">Home</Link>

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/myDetails" className="nav-link">My Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tracker" className="nav-link">Details of Tracker</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/company" className="nav-link">Company</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/myJuniors" className="nav-link">My Juniors</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link">Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;