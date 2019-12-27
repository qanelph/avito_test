import ArticleList from "../ArticleList";
import React, {Component} from "react";
import "./style.css"

export default class MainPage extends Component {
    constructor(props) {
        super();
        this.state = {
            loaded:false,
            obj:{},
        }
    }

    componentDidMount() {
        const url = "http://134.209.138.34/items/";
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({
                loaded: true,
                obj: json,
            }));
        console.log(this.state.obj);
    }

    render() {
        const { loaded, obj } = this.state;
        if (loaded){

            return(
                <div className="container">
                    <div className="jumbotron">
                        <h3 className="font-weight ">Недвижимость</h3>
                        <div className="jumbotron-fluid text-muted">
                            <h6 className="font-weight-light">тестовое задание для авито</h6>
                        </div>
                    </div>
                    <ArticleList articles={obj}/>
                </div>
            )
            } else {
            return <div>loading...</div>
            }
        }
}