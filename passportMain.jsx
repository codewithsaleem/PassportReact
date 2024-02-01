import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./passportNavbar";
import Login from "./passportLogin";
import User from "./passportUser";
import Logout from "./passportLogout";
import Orders from "./passportOrders";
class MainComponent extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Switch>
                    <Route path="/order/:type" component={Orders} />
                    <Route path="/user" component={User} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                    <Redirect from="/" to="/login" />
                </Switch>
            </div>
        )
    }
}
export default MainComponent;