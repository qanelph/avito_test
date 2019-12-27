import React, { Component } from "react";
import ArticleList from "./ArticleList/index";

import "bootstrap/dist/css/bootstrap.css";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

import MainPage from "./pages";
import Description from "./pages/description";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path = "/" component={MainPage} />
                    <Route exact path = "/description/:id" component={Description} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        )
    }
}


export default App;
