import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Footer extends Component {
    render(){
        // console.log((this.props));
        const {desk} = this.props;
        return (
            <div className="container align-content-md-center">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card text-center float-right" style={{width: "180px"}}>
                            <img className="card-img-top"
                                 src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Avatar3.jpg"
                                 alt="Card image"/>
                            <div className="card-body">
                                <h5 className="card-title">{desk.sellerName}</h5>
                                <p className="card-text lead small">{desk.price}</p>
                            </div>
                        </div>
                        <h1 className="font-weight-light mt-5 row">{desk.title}</h1>
                        <p className="lead text-black-50 ">{desk.address}</p>
                    </div>
                </div>
            </div>
        )
    }


}
