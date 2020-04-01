import SimpleBot from "./simplebot";
import React, {Component} from "react";
import "./style.css"

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <nav className="class=navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                    </a>
                </nav>
                <div class="container">
                    {SimpleBot}
                </div>
            </div>
        )
    }
}