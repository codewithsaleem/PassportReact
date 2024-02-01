import React, { Component } from "react";
import auth from "./httpServicePassportAuth.js";
class Logout extends Component {
    componentDidMount(){
        auth.removeToken();
    }
    render() {
        return (
            <div className="container">
                <h2 className="text-danger">Logged Out</h2>
            </div>
        )
    }
}
export default Logout;