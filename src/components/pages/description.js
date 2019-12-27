import React, {Component} from "react";
import Footer from "../Footer";
import Gallery from "../Gallery"
import "./style.css"

import {
    useParams
} from "react-router-dom";



class Description extends Component{

    constructor(props) {
        super();
        this.state = {
            loaded:false,
            desk:{},
            id:null,
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        console.log(id);
        // const id = useParams();
        const url = "http://134.209.138.34/item/" + id;
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({
                loaded: true,
                desk: json[0],
            }));
        console.log(this.state.desk);
    }

    render() {
        const { loaded, desk } = this.state;
        if (loaded){
            const { images } = desk;
            // console.log(desk);
            return (
                <div className="container">
                    <hr/>
                    <div>
                        <Footer desk={desk} />
                    </div>
                    <hr/>

                    <div>
                        <Gallery images={images}/>
                    </div>
                    <div className="container text-left">
                        <div className="header">
                            <hr/>
                            <h3 className="">Описание</h3>
                        </div>
                        <div className="containe text-left" style={{width: "700px"}}>
                            <blockquote className="blockquote left">
                                <p className="lead small">{desk.description}</p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return <div>loading...</div>
        }
    }
}

export default Description;

