import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./passportEmpNavbar";
import Login from "./passportEmpLogin";
import Logout from "./passportEmpLogout";
import Details from "./passportEmpDetails";
import Welcome from "./passportEmpWelcome";
import MyJuniors from "./passportEmpMyJuniors";
import Tracker from "./passportEmpTracker";
class MainComponent extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Switch>
                <Route path="/tracker" component={Tracker} />
                    <Route path="/myJuniors" component={MyJuniors} />
                    <Route path="/myDetails" component={Details} />
                    <Route path="/company" component={Welcome} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                    <Redirect from="/" to="/login" />
                </Switch>
            </div>
        )
    }
}
export default MainComponent;