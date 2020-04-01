import React, { Component } from "react";


import "bootstrap/dist/css/bootstrap.css";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

import MainPage from "./pages";
import SimpleBot from "./pages/simplebot";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path = "/" component={MainPage} />
                    <Route exact path = "/bot" component={SimpleBot} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        )
    }
}


export default App;
