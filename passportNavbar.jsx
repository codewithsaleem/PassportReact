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
                            <Link to="/user" className="nav-link">User</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/order/my" className="nav-link">MyOrders</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/order/all" className="nav-link">AllOrders</Link>
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