import React, {Component} from "react";
import ImageList from "./ImageList";


class Gallery extends Component {

    render() {
        const { images } = this.props;
        return (
        <div className="container">
            <div className="row">
            <ImageList images={images}/>
            </div>
        </div>
        )
    }
}

export default Gallery;
